import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Course Introduction Component
function CourseIntroduction({ courseId, onStartCourse, isEnrolled, onEnroll }) {
  const { t } = useTranslation();
  const courseData = t(`lessonsContent.${courseId}`);
  const moduleKeys = Object.keys(courseData.modules).filter((k) => k !== 'quiz' && k !== 'video');
  const saved = JSON.parse(localStorage.getItem('nv_progress') || '{}');
  const completed = saved[courseId]?.completedModules || {};
  const completedCount = moduleKeys.filter((k) => completed[k] && (completed[k].text || completed[k].quiz || completed[k].video)).length;
  const progressPct = Math.round((completedCount / (moduleKeys.length || 1)) * 100);
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Full-bleed gradient header */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%),radial-gradient(circle_at_80%_0%,white,transparent_35%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-4">
            <button onClick={() => navigate('/lessons')} className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm border border-white/30">← {t('lessons.backToLessons')}</button>
          </div>
          <h1 className="text-4xl font-extrabold mb-3 tracking-tight">{courseData.title}</h1>
          <p className="text-lg text-indigo-100 max-w-3xl">{courseData.summary}</p>
          {/* Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 text-sm bg-white/10 backdrop-blur px-3 py-1.5 rounded-full border border-white/20">
              <span>⏱️</span>
              <span className="font-medium">{t('lessons.duration')}:</span>
              <span>{courseData.meta?.duration}</span>
            </span>
            <span className="inline-flex items-center gap-2 text-sm bg-white/10 backdrop-blur px-3 py-1.5 rounded-full border border-white/20">
              <span>⚡</span>
              <span className="font-medium">{t('lessons.difficultyLabel')}:</span>
              <span>{courseData.meta?.difficulty}</span>
            </span>
          </div>
          {/* Progress */}
          <div className="mt-6 max-w-xl">
            <div className="flex justify-between text-sm text-indigo-100 mb-1">
              <span>{t('myLessons.progress')}</span>
              <span>{completedCount}/{moduleKeys.length} · {progressPct}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div className="h-2 rounded-full bg-white" style={{ width: `${progressPct}%` }}></div>
            </div>
          </div>
        </div>
          </div>
          
      {/* Spacious content area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* What You Will Learn */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('lessons.whatYouWillLearn')}
              </h2>
              <ul className="space-y-3">
                {courseData.whatYouWillLearn.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Syllabus */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('lessons.syllabus')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courseData.syllabus.modules.map((module, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all">
                    <div className="flex items-center">
                      <span className="bg-indigo-600 text-white rounded-full w-9 h-9 flex items-center justify-center text-sm font-bold mr-3 shadow-sm">
                        {index + 1}
                      </span>
                      <span className="font-medium text-gray-900">{module.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enrollment + Start Buttons */}
            <div className="text-center flex flex-col items-center gap-3">
              {!isEnrolled && (
                <button
                  onClick={onEnroll}
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-2xl"
                >
                  ✅ Derse Kaydol
                </button>
              )}
              <button
                onClick={onStartCourse}
                disabled={!isEnrolled}
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg ${isEnrolled ? 'bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-2xl hover:-translate-y-0.5' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
              >
                🚀 {t('lessons.startLesson')}
              </button>
            </div>
      </div>
    </div>
  );
}

// Lesson Content Component with Tabs
function LessonContent({ courseId, moduleId }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('text');
  const [attention, setAttention] = useState(72);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(null);
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [moduleCompleted, setModuleCompleted] = useState(false);
  const [showAttentionPopup, setShowAttentionPopup] = useState(false);
  const [attentionSuggestions, setAttentionSuggestions] = useState([]);
  const courseData = t(`lessonsContent.${courseId}`);
  const moduleData = courseData.modules[moduleId];
  const quizData = moduleData?.quiz || courseData.modules?.quiz;
  const videoData = moduleData?.video || courseData.modules?.video;

  // Build ordered module list from syllabus titles combined with module keys
  const allModuleKeys = Object.keys(courseData.modules).filter((k) => k !== 'quiz' && k !== 'video');
  const currentIndex = Math.max(0, allModuleKeys.indexOf(moduleId));
  const prevId = currentIndex > 0 ? allModuleKeys[currentIndex - 1] : null;
  const nextId = currentIndex < allModuleKeys.length - 1 ? allModuleKeys[currentIndex + 1] : null;
  
  const tabs = [
    { id: 'text', label: t('lessons.tabs.text'), icon: '📖' },
    ...(courseId === 'python' ? [{ id: 'practice', label: 'Practice', icon: '💻' }] : []),
    { id: 'quiz', label: t('lessons.tabs.quiz'), icon: '📝' },
    { id: 'video', label: t('lessons.tabs.video'), icon: '🎥' }
  ];

  // Load JDoodle script only when Practice tab is active
  useEffect(() => {
    if (activeTab !== 'practice') return;
    const existing = document.getElementById('jdoodle-pym');
    if (!existing) {
      const s = document.createElement('script');
      s.id = 'jdoodle-pym';
      s.src = 'https://www.jdoodle.com/assets/jdoodle-pym.min.js';
      s.async = true;
      document.body.appendChild(s);
    } else {
      // Re-execute if JDoodle global is available (handles re-render)
      try { if (window.pym) { window.pym.autoInit(); } } catch (e) {}
    }
  }, [activeTab]);

  // Reset quiz state when module changes
  useEffect(() => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(null);
    setShowQuizResults(false);
    setModuleCompleted(false);
    setShowAttentionPopup(false);
    setAttentionSuggestions([]);
  }, [moduleId]);

  // Persist progress when user views a tab
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('nv_progress') || '{}');
    const course = saved[courseId] || { completedModules: {} };
    const mod = course.completedModules[moduleId] || {};
    mod[activeTab] = true;
    course.completedModules[moduleId] = mod;
    saved[courseId] = course;
    localStorage.setItem('nv_progress', JSON.stringify(saved));
  }, [courseId, moduleId, activeTab]);

  // Generate attention-based suggestions
  const generateAttentionSuggestions = (attentionLevel) => {
    const suggestions = [];
    
    if (attentionLevel < 40) {
      suggestions.push({
        type: 'text',
        icon: '📖',
        title: 'Switch to Text Mode',
        description: 'Reading text content can help refocus your attention',
        action: () => setActiveTab('text')
      });
      suggestions.push({
        type: 'quiz',
        icon: '📝',
        title: 'Try Interactive Quiz',
        description: 'Engage with questions to boost concentration',
        action: () => setActiveTab('quiz')
      });
      suggestions.push({
        type: 'video',
        icon: '🎥',
        title: 'Watch Video Content',
        description: 'Visual content might help regain focus',
        action: () => setActiveTab('video')
      });
    } else if (attentionLevel < 60) {
      suggestions.push({
        type: 'quiz',
        icon: '📝',
        title: 'Take a Quick Quiz',
        description: 'Interactive content can help maintain focus',
        action: () => setActiveTab('quiz')
      });
      suggestions.push({
        type: 'break',
        icon: '⏸️',
        title: 'Take a Short Break',
        description: 'A brief pause might help refresh your mind',
        action: () => alert('Consider taking a 2-3 minute break to refresh your focus!')
      });
    }
    
    return suggestions;
  };

  // Simulate attention updates (placeholder for EEG integration)
  useEffect(() => {
    const id = setInterval(() => {
      setAttention((prev) => {
        const delta = Math.random() * 10 - 5;
        const next = Math.max(10, Math.min(100, prev + delta));
        const val = Math.round(next);
        
        // Check for low attention and show suggestions
        if (val < 60 && !showAttentionPopup) {
          const suggestions = generateAttentionSuggestions(val);
          if (suggestions.length > 0) {
            setAttentionSuggestions(suggestions);
            setShowAttentionPopup(true);
          }
        }
        
        // persist sample for details view
        try {
          const store = JSON.parse(localStorage.getItem('nv_attention') || '{}');
          const course = store[courseId] || {};
          const mod = course[moduleId] || [];
          mod.push({ t: Date.now(), v: val });
          // limit stored samples
          const trimmed = mod.slice(-100);
          course[moduleId] = trimmed;
          store[courseId] = course;
          localStorage.setItem('nv_attention', JSON.stringify(store));
        } catch (e) {}
        return val;
      });
    }, 3000);
    return () => clearInterval(id);
  }, [showAttentionPopup]);

  // Quiz handling functions
  const handleQuizAnswerChange = (questionIndex, answerIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const handleQuizSubmit = () => {
    if (!quizData?.questions) return;
    
    let correctAnswers = 0;
    const totalQuestions = quizData.questions.length;
    
    quizData.questions.forEach((question, qIndex) => {
      const userAnswer = quizAnswers[qIndex];
      const correctAnswer = question.correct; // Assuming correct answer index is stored in question.correct
      
      if (userAnswer === correctAnswer) {
        correctAnswers++;
      }
    });
    
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    setQuizScore(score);
    setQuizSubmitted(true);
    setShowQuizResults(true);
    
    // Mark quiz as completed in progress
    const saved = JSON.parse(localStorage.getItem('nv_progress') || '{}');
    const course = saved[courseId] || { completedModules: {} };
    const mod = course.completedModules[moduleId] || {};
    mod.quiz = true;
    course.completedModules[moduleId] = mod;
    saved[courseId] = course;
    localStorage.setItem('nv_progress', JSON.stringify(saved));
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(null);
    setShowQuizResults(false);
  };

  // Determine course completion based on module completion
  const isCourseComplete = () => {
    const saved = JSON.parse(localStorage.getItem('nv_progress') || '{}');
    const course = saved[courseId]?.completedModules || {};
    return allModuleKeys.every((key) => {
      const m = course[key] || {};
      return m.text && m.quiz && m.video;
    });
  };
  const courseComplete = isCourseComplete();
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'text':
        return (
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{moduleData.title}</h2>
            <div className="text-gray-700 leading-relaxed text-lg">
              {(() => {
                const renderParagraphWithInlineCode = (text, key) => {
                  const parts = String(text).split(/(`[^`]+`)/g);
                  return (
                    <p key={key} className="mb-4">
                      {parts.map((part, i) => {
                        if (part.startsWith('`') && part.endsWith('`')) {
                          const code = part.slice(1, -1);
                          return (
                            <code key={i} className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded font-mono text-base">
                              {code}
                            </code>
                          );
                        }
                        return <span key={i}>{part}</span>;
                      })}
                    </p>
                  );
                };
                const renderBlock = (content, key) => {
                  const str = String(content);
                  const trimmed = str.trim();
                  if (trimmed.startsWith('```') && trimmed.endsWith('```')) {
                    const inner = trimmed.replace(/^```|```$/g, '');
                    return (
                      <pre key={key} className="mb-4 bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-base">
                        <code>{inner}</code>
                      </pre>
                    );
                  }
                  return renderParagraphWithInlineCode(str, key);
                };
                const blocks = Array.isArray(moduleData.text) ? moduleData.text : [moduleData.text];
                return blocks.flatMap((b, idx) => {
                  if (typeof b === 'string') {
                    // If it contains a fenced block, render as a single block to preserve fences
                    if (b.includes('```')) {
                      return [renderBlock(b, idx)];
                    }
                    if (b.includes('\n')) {
                      return b.split('\n').map((line, i) => renderBlock(line, `${idx}-${i}`));
                    }
                  }
                  return [renderBlock(b, idx)];
                });
              })()}
            </div>
          </div>
        );
      case 'practice':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Practice</h2>
              <p className="text-gray-600">Try code interactively before taking the quiz.</p>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow">
              <div
                data-pym-src="https://www.jdoodle.com/embed/v1/f48595f2451bbd87"
                style={{ minHeight: 600 }}
              />
            </div>
          </div>
        );
      case 'quiz':
        if (!quizData?.questions) {
          return (
            <div className="max-w-4xl mx-auto text-center py-12">
              <div className="text-gray-500 text-lg">Bu modül için quiz bulunmuyor.</div>
            </div>
          );
        }

        if (showQuizResults) {
          return (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                  quizScore >= 80 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                  quizScore >= 60 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                  'bg-gradient-to-r from-red-500 to-red-600'
                }`}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Quiz Tamamlandı!</h2>
                <div className={`text-4xl font-bold mb-2 ${
                  quizScore >= 80 ? 'text-green-600' :
                  quizScore >= 60 ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {quizScore}%
                </div>
                <p className="text-gray-600 text-lg mb-8">
                  {quizScore >= 80 ? 'Harika! Çok iyi performans gösterdiniz.' :
                   quizScore >= 60 ? 'İyi iş! Biraz daha çalışarak daha iyi olabilirsiniz.' :
                   'Tekrar deneyin. Başarısızlık değil, öğrenme fırsatı!'}
                </p>
              </div>

              {/* Detailed Results */}
              <div className="space-y-4 mb-8">
                {quizData.questions.map((question, qIndex) => {
                  const userAnswer = quizAnswers[qIndex];
                  const correctAnswer = question.correct;
                  const isCorrect = userAnswer === correctAnswer;
                  
                  return (
                    <div key={qIndex} className={`border rounded-xl p-4 ${
                      isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                    }`}>
                      <div className="flex items-start space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                          isCorrect ? 'bg-green-500' : 'bg-red-500'
                        }`}>
                          {isCorrect ? '✓' : '✗'}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">{question.q}</h4>
                          <div className="space-y-2">
                            {question.a.map((answer, aIndex) => (
                              <div key={aIndex} className={`p-3 rounded-lg ${
                                aIndex === correctAnswer ? 'bg-green-100 text-green-800 font-medium' :
                                aIndex === userAnswer && !isCorrect ? 'bg-red-100 text-red-800' :
                                'bg-gray-100 text-gray-700'
                              }`}>
                                {answer}
                                {aIndex === correctAnswer && <span className="ml-2 text-green-600">✓ Doğru cevap</span>}
                                {aIndex === userAnswer && !isCorrect && <span className="ml-2 text-red-600">✗ Sizin cevabınız</span>}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-center space-x-4">
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Tekrar Dene
                </button>
                <button
                  onClick={() => setShowQuizResults(false)}
                  className="px-8 py-3 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Quiz'e Dön
                </button>
              </div>
            </div>
          );
        }

        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 animate-pulse">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{quizData?.title}</h2>
              <p className="text-gray-600 text-lg">{t('brainAligned.quizDesc')}</p>
            </div>
            <div className="space-y-6">
              {(quizData?.questions || []).map((question, qIndex) => (
                <div key={qIndex} className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {qIndex + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {question.q}
                      </h3>
                      <div className="space-y-3">
                        {question.a.map((answer, aIndex) => (
                          <label key={aIndex} className="flex items-center cursor-pointer group/option">
                            <input
                              type="radio"
                              name={`question-${qIndex}`}
                              value={aIndex}
                              checked={quizAnswers[qIndex] === aIndex}
                              onChange={() => handleQuizAnswerChange(qIndex, aIndex)}
                              className="mr-4 w-5 h-5 text-blue-600 focus:ring-blue-500 focus:ring-2"
                            />
                            <span className="text-gray-700 group-hover/option:text-blue-600 transition-colors duration-200 flex-1 p-4 rounded-xl hover:bg-white/70 group-hover/option:bg-white/90">
                              {answer}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center mt-8">
                <button 
                  onClick={handleQuizSubmit}
                  disabled={Object.keys(quizAnswers).length !== quizData.questions.length}
                  className={`px-10 py-4 font-bold text-lg rounded-xl transition-all duration-300 transform shadow-xl hover:shadow-2xl ${
                    Object.keys(quizAnswers).length === quizData.questions.length
                      ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <span className="flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {Object.keys(quizAnswers).length === quizData.questions.length ? 'Sınavı Tamamla' : 'Tüm Soruları Cevaplayın'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        );
      case 'video':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-6 animate-pulse">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{videoData?.title}</h2>
              <p className="text-gray-600 text-lg">{t('brainAligned.videoDesc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative group">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white text-lg font-medium mb-2">Video Oynatıcı</p>
                  <p className="text-gray-300 text-sm">EEG takip ile optimize edilmiş içerik</p>
                </div>
                
                {/* Video controls overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-4">
                    <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                    <div className="flex-1 bg-white/20 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full w-1/3"></div>
                    </div>
                    <span className="text-white text-sm">2:45 / 8:30</span>
                    <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Video Açıklaması</h3>
                <p className="text-gray-300 leading-relaxed">{videoData?.description}</p>
                
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      8:30 dakika
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      HD Kalite
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      EEG Takip
                    </span>
                  </div>
                  
                  <button className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                    Video Oynat
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar: Back to intro, Attention bar, Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              <button onClick={() => navigate(`/lessons/${courseId}/intro`)} className="px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm">← Intro</button>
              <div className="hidden sm:flex items-center space-x-2">
                <span className="text-sm text-gray-600">{t('lessons.attention')}</span>
                <div className="w-40 bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className={`h-2 ${attention < 40 ? 'bg-red-500' : attention < 70 ? 'bg-yellow-500' : 'bg-green-500'}`} style={{ width: `${attention}%` }}></div>
                </div>
                <span className="text-sm text-gray-700 w-8 text-right">{attention}%</span>
              </div>
            </div>
            <div className="flex space-x-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Attention Popup */}
      {showAttentionPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 animate-in slide-in-from-bottom-4 duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{t('attentionPopup.title')}</h3>
                    <p className="text-sm text-gray-600">{t('attentionPopup.message', { value: attention })}</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowAttentionPopup(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-4">{t('attentionPopup.intro')}</p>
                
                <div className="space-y-3">
                  {attentionSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        suggestion.action();
                        setShowAttentionPopup(false);
                      }}
                      className="w-full p-4 text-left bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 rounded-xl border border-blue-200 hover:border-blue-300 transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{suggestion.icon}</span>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {suggestion.title}
                          </h4>
                          <p className="text-sm text-gray-600">{suggestion.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowAttentionPopup(false)}
                  className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
                >
                  Dismiss
                </button>
                <button
                  onClick={() => {
                    setShowAttentionPopup(false);
                    // Reset attention to a higher level
                    setAttention(75);
                  }}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                >
                  I'm Focused Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar + Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-4 xl:col-span-3">
          <div className="sticky top-24 bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200 font-semibold text-gray-900">{t('lessons.modules')}</div>
            <nav className="p-2 space-y-1">
              {allModuleKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => navigate(`/lessons/${courseId}/${key}`)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    key === moduleId ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  {courseData.modules[key].title}
                </button>
              ))}
            </nav>
            <div className="px-4 py-3 border-t border-gray-200 flex justify-between">
              <button
                disabled={!prevId}
                onClick={() => prevId && navigate(`/lessons/${courseId}/${prevId}`)}
                className={`px-3 py-2 rounded-md text-sm ${prevId ? 'bg-gray-100 hover:bg-gray-200 text-gray-800' : 'bg-gray-50 text-gray-400 cursor-not-allowed'}`}
              >
                ← {t('lessons.previous')}
              </button>
              <button
                disabled={!nextId}
                onClick={() => nextId && navigate(`/lessons/${courseId}/${nextId}`)}
                className={`px-3 py-2 rounded-md text-sm ${nextId ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-gray-50 text-gray-400 cursor-not-allowed'}`}
              >
                {t('lessons.next')} →
              </button>
            </div>
          </div>
        </aside>
      
      {/* Content Area */}
        <section className="lg:col-span-8 xl:col-span-9">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Module Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-white mb-1">
                    {moduleData?.title || courseData.modules[moduleId]?.title}
                  </h1>
                  <p className="text-blue-100 text-sm">{t('lessons.modules')} {allModuleKeys.indexOf(moduleId) + 1} / {allModuleKeys.length}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-medium">{t('eeg.active')}</span>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-white text-sm font-medium">{t('eeg.attentionShort', { value: attention })}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <div className="px-6">
                <div className="flex space-x-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600 bg-blue-50/50'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <span className="mr-2 text-lg">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6 min-h-[400px]">
        {renderTabContent()}
            </div>

            {/* Success Message */}
            {moduleCompleted && (
              <div className="px-6 py-4 bg-green-50 border-t border-green-200">
                <div className="flex items-center justify-center space-x-2 text-green-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Module completed successfully! Great job! 🎉</span>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => {
                    const saved = JSON.parse(localStorage.getItem('nv_progress') || '{}');
                    const course = saved[courseId] || { completedModules: {} };
                    const mod = course.completedModules[moduleId] || {};
                    mod.text = true; mod.quiz = true; mod.video = true;
                    course.completedModules[moduleId] = mod;
                    saved[courseId] = course;
                    localStorage.setItem('nv_progress', JSON.stringify(saved));
                    setModuleCompleted(true);
                    // Auto-hide success message after 3 seconds
                    setTimeout(() => setModuleCompleted(false), 3000);
                  }}
                  className="px-6 pyw-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t('lessons.markModuleComplete')}
                  </span>
                </button>

                <button
                  disabled={!courseComplete}
                  onClick={() => navigate(`/lessons/${courseId}/intro`)}
                  className={`px-8 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                    courseComplete
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transform hover:scale-105 shadow-lg hover:shadow-xl'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('lessons.finishCourse')}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Main Lessons Component
function Lessons() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [joinCode, setJoinCode] = useState('');
  const [joinError, setJoinError] = useState('');
  
  // Parse the path to get courseId and moduleId
  const pathParts = location.pathname.split('/').filter(Boolean);
  const courseId = pathParts[1]; // /lessons/[courseId]/...
  const moduleId = pathParts[2]; // /lessons/[courseId]/[moduleId]
  const isIntro = moduleId === 'intro';
  const isDetails = moduleId === 'details';
  
  // Available courses - enriched with meta and image
  const availableCourses = [
    { 
      id: 'python', 
      title: t('topics.python'), 
      description: t('lessonsContent.python.summary'),
      duration: t('lessonsContent.python.meta.duration'),
      difficulty: t('lessonsContent.python.meta.difficulty'),
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80&auto=format&fit=crop'
    },
    { 
      id: 'web', 
      title: t('topics.web'), 
      description: t('lessonsContent.web.summary'),
      duration: t('lessonsContent.web.meta.duration'),
      difficulty: t('lessonsContent.web.meta.difficulty'),
      image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=1200&q=80&auto=format&fit=crop'
    },
    { 
      id: 'js', 
      title: t('topics.js'), 
      description: t('lessonsContent.js.summary'),
      duration: t('lessonsContent.js.meta.duration'),
      difficulty: t('lessonsContent.js.meta.difficulty'),
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop'
    }
  ];
  
  // Enrollment helpers
  const getCurrentUser = () => {
    try { return JSON.parse(localStorage.getItem('currentUser') || 'null'); } catch (e) { return null; }
  };
  const currentUser = getCurrentUser();
  const enrollmentKey = 'nv_enrollments';
  const isEnrolled = (courseId) => {
    try {
      const all = JSON.parse(localStorage.getItem(enrollmentKey) || '{}');
      const userKey = currentUser?.username || '__guest__';
      return Boolean(all[userKey]?.[courseId]);
    } catch (e) { return false; }
  };
  const enroll = (courseId) => {
    try {
      const all = JSON.parse(localStorage.getItem(enrollmentKey) || '{}');
      const userKey = currentUser?.username || '__guest__';
      const userEnrolls = all[userKey] || {};
      userEnrolls[courseId] = true;
      all[userKey] = userEnrolls;
      localStorage.setItem(enrollmentKey, JSON.stringify(all));
    } catch (e) {}
  };

  const handleStartCourse = (courseId) => {
    navigate(`/lessons/${courseId}/intro`);
  };
  
  const handleStartModule = (courseId) => {
    // Start with the first module (variables for python, html_basics for web, intro for js)
    const firstModules = { python: 'variables', web: 'html_basics', js: 'intro' };
    navigate(`/lessons/${courseId}/${firstModules[courseId]}`);
  };
  
  // If no course is selected, show course selection
  if (!courseId) {
    // Gate: student must be in a class
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (currentUser?.role === 'student') {
      const map = JSON.parse(localStorage.getItem('studentClass') || '{}');
      const classId = map[currentUser.username];
      if (!classId) {
        // Check join status
        const joinStatus = JSON.parse(localStorage.getItem('studentJoinStatus') || '{}')[currentUser.username];
        if (joinStatus?.status === 'pending') {
          return (
            <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50 flex items-center justify-center p-8">
              <div className="max-w-lg w-full bg-white rounded-2xl shadow p-6 text-center">
                <h1 className="text-2xl font-extrabold text-indigo-800 mb-2">Onay Bekleniyor</h1>
                <p className="text-gray-700">Sınıf katılım isteğiniz öğretmeninize iletildi. Onaylandığında derslere erişebileceksiniz.</p>
                <div className="mt-4 text-sm text-gray-600">Sınıf: <span className="font-medium">{joinStatus.classId}</span></div>
                <div className="mt-6">
                  <a href="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium">Destek ile İletişime Geç</a>
                </div>
              </div>
            </div>
          );
        }
        if (joinStatus?.status === 'rejected') {
          return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center p-8">
              <div className="max-w-lg w-full bg-white rounded-2xl shadow p-6">
                <h1 className="text-2xl font-extrabold text-red-700 mb-2 text-center">Katılım Reddedildi</h1>
                <p className="text-gray-700 mb-4 text-center">Öğretmeniniz katılım isteğinizi reddetti.</p>
                {joinStatus.reason && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-3 text-sm mb-4">{joinStatus.reason}</div>
                )}
                <p className="text-sm text-gray-600 mb-3 text-center">İsterseniz başka bir sınıf kodu ile tekrar deneyebilirsiniz.</p>
                <div className="space-y-3">
                  <input
                    value={joinCode}
                    onChange={(e) => { setJoinCode(e.target.value.toUpperCase()); setJoinError(''); }}
                    placeholder="Örn: ABC123"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                  {joinError && <div className="text-red-600 text-sm">{joinError}</div>}
                  <button
                    onClick={() => {
                      const code = (joinCode || '').toUpperCase().trim();
                      if (!code) { setJoinError('Lütfen sınıf kodu girin'); return; }
                      const classes = JSON.parse(localStorage.getItem('teacherClasses') || '[]');
                      const cls = classes.find(c => (c.code || '').toUpperCase() === code);
                      if (!cls) { setJoinError('Kod bulunamadı. Öğretmeninizle kontrol edin.'); return; }
                      // queue pending request
                      const allReq = JSON.parse(localStorage.getItem('classJoinRequests') || '{}');
                      const arr = Array.isArray(allReq[cls.id]) ? allReq[cls.id] : [];
                      if (!arr.find(r => r.username === currentUser.username)) {
                        arr.push({ username: currentUser.username, email: currentUser.email || '', ts: Date.now(), status: 'pending' });
                      }
                      allReq[cls.id] = arr;
                      localStorage.setItem('classJoinRequests', JSON.stringify(allReq));
                      const st = JSON.parse(localStorage.getItem('studentJoinStatus') || '{}');
                      st[currentUser.username] = { classId: cls.id, status: 'pending' };
                      localStorage.setItem('studentJoinStatus', JSON.stringify(st));
                      navigate(0);
                    }}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium"
                  >
                    Yeniden Başvur
                  </button>
                </div>
              </div>
            </div>
          );
        }
        return (
          <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50 flex items-center justify-center p-8">
            <div className="max-w-lg w-full bg-white rounded-2xl shadow p-6">
              <h1 className="text-2xl font-extrabold text-indigo-800 mb-2 text-center">Sınıf Koduna Katıl</h1>
              <p className="text-gray-700 mb-4 text-center">Derslere erişmek için öğretmeninizin verdiği sınıf kodunu girin.</p>
              <div className="space-y-3">
                <input
                  value={joinCode}
                  onChange={(e) => { setJoinCode(e.target.value.toUpperCase()); setJoinError(''); }}
                  placeholder="Örn: ABC123"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
                {joinError && <div className="text-red-600 text-sm">{joinError}</div>}
                <button
                  onClick={() => {
                    const code = (joinCode || '').toUpperCase().trim();
                    if (!code) { setJoinError('Lütfen sınıf kodu girin'); return; }
                    const classes = JSON.parse(localStorage.getItem('teacherClasses') || '[]');
                    const cls = classes.find(c => (c.code || '').toUpperCase() === code);
                    if (!cls) { setJoinError('Kod bulunamadı. Öğretmeninizle kontrol edin.'); return; }
                    // Create pending join request instead of immediate enrollment
                    const allReq = JSON.parse(localStorage.getItem('classJoinRequests') || '{}');
                    const arr = Array.isArray(allReq[cls.id]) ? allReq[cls.id] : [];
                    if (!arr.find(r => r.username === currentUser.username)) {
                      arr.push({ username: currentUser.username, email: currentUser.email || '', ts: Date.now(), status: 'pending' });
                    }
                    allReq[cls.id] = arr;
                    localStorage.setItem('classJoinRequests', JSON.stringify(allReq));
                    const st = JSON.parse(localStorage.getItem('studentJoinStatus') || '{}');
                    st[currentUser.username] = { classId: cls.id, status: 'pending' };
                    localStorage.setItem('studentJoinStatus', JSON.stringify(st));
                    navigate(0);
                  }}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Koda Katıl
                </button>
              </div>
            </div>
          </div>
        );
      }
    }
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-pulse">
              {t('lessons.available')}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t('lessons.chooseCoursePrompt')}
            </p>
            <div className="mt-6 flex justify-center">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">{t('eeg.trackingActive')}</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {availableCourses.map((course, index) => (
              <div 
                key={course.id} 
                className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl relative"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
                onClick={() => handleStartCourse(course.id)}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 animate-pulse"></div>
                </div>
                
                {/* Image header with overlay effects */}
                <div className="h-48 w-full overflow-hidden relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Floating badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg animate-bounce">
                      {course.duration}
                    </span>
                    <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                      {course.difficulty}
                    </span>
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 relative">
                      <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-white/30"
                          stroke="currentColor"
                          strokeWidth="3"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-white"
                          stroke="currentColor"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="75, 100"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">75%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 relative">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {course.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {course.description}
                  </p>
                  
                  {/* Interactive stats */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span>{t('lessons.moduleCountLabel', { count: Object.keys(t(`lessonsContent.${course.id}.modules`)).filter((k) => k !== 'quiz' && k !== 'video').length })}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{t('eeg.tracking')}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-600">
                      <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>{t('brainAligned.learning')}</span>
                    </div>
                  </div>
                  
                  {/* Enroll/Start Buttons */}
                  {!isEnrolled(course.id) ? (
                    <button
                      onClick={(e) => { e.stopPropagation(); enroll(course.id); }}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 transform group-hover:scale-105 shadow-lg group-hover:shadow-xl"
                    >
                      ✅ Kaydol
                    </button>
                  ) : (
                    <button
                      onClick={(e) => { e.stopPropagation(); handleStartCourse(course.id); }}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 transform group-hover:scale-105 shadow-lg group-hover:shadow-xl relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {t('lessons.start')}
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                  )}
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
        
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    );
  }
  
  // If course is selected but intro page requested (or no module), show introduction
  if (courseId && (!moduleId || isIntro)) {
    const enrolled = isEnrolled(courseId);
    return (
      <CourseIntroduction
        courseId={courseId}
        onStartCourse={() => handleStartModule(courseId)}
        isEnrolled={enrolled}
        onEnroll={() => { enroll(courseId); navigate(0); }}
      />
    );
  }

  // Details page: attention per module and AI summary (placeholder)
  if (courseId && isDetails) {
    const store = JSON.parse(localStorage.getItem('nv_attention') || '{}');
    const courseSamples = store[courseId] || {};
    const modules = Object.keys(t(`lessonsContent.${courseId}.modules`)).filter((k) => k !== 'quiz' && k !== 'video');
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Dikkat Analizi ve Özet</h1>
          <div className="space-y-6">
            {modules.map((mKey) => {
              const samples = (courseSamples[mKey] || []).slice(-50);
              const avg = samples.length ? Math.round(samples.reduce((s, a) => s + a.v, 0) / samples.length) : 0;
              return (
                <div key={mKey} className="bg-white rounded-lg shadow border border-gray-200 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-semibold text-gray-900">{t(`lessonsContent.${courseId}.modules.${mKey}.title`)}</h2>
                    <span className={`text-sm font-medium ${avg<40?'text-red-600':avg<70?'text-yellow-600':'text-green-600'}`}>{avg}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded h-2 overflow-hidden">
                    <div className={`h-2 ${avg<40?'bg-red-500':avg<70?'bg-yellow-500':'bg-green-500'}`} style={{width: `${avg}%`}}></div>
                  </div>
                </div>
              );
            })}
            <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
              <h2 className="font-semibold text-gray-900 mb-2">Yapay Zeka Özeti</h2>
              <p className="text-gray-700 text-sm">
                Bu ders için dikkat verileri ortalaması incelendi. Dikkatin düşük olduğu modüllerde daha kısa paragraflar ve görsel içerikler önerilir. Yüksek dikkat görülen kısımlarda ise kavram pekiştirme soruları etkili olacaktır.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // If both course and module are selected, show lesson content
  // Validate moduleId exists; if not, redirect to first module
  const firstModules = { python: 'variables', web: 'html_basics', js: 'intro' };
  const courseData = t(`lessonsContent.${courseId}`);
  const validModules = courseData && courseData.modules ? Object.keys(courseData.modules) : [];
  if (!validModules.includes(moduleId)) {
    navigate(`/lessons/${courseId}/${firstModules[courseId] || validModules[0] || 'intro'}`, { replace: true });
    return null;
  }

  return <LessonContent courseId={courseId} moduleId={moduleId} />;
}

export default Lessons;
