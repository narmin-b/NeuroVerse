import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Routes, Route, useSearchParams } from 'react-router-dom';
import LiveCharts from './LiveCharts.jsx';
import { useTranslation } from 'react-i18next';

// Get classes data from localStorage (same as ManageClasses)
function getClassesData() {
  const savedClasses = localStorage.getItem('teacherClasses');
  if (savedClasses) {
    const classes = JSON.parse(savedClasses);
    // Transform the data to match Reports format (add avatars and active status)
    return classes.map(cls => ({
      ...cls,
      students: cls.students.map(student => ({
        ...student,
        avatar: `https://randomuser.me/api/portraits/${student.id.length % 2 === 0 ? 'women' : 'men'}/${(student.id.charCodeAt(0) % 50) + 1}.jpg`,
        active: student.status === 'active'
      }))
    }));
  }
  
  // Fallback to default data if no classes exist
  return [
    {
      id: 'classA',
      name: 'Computer Science 101',
      description: 'Introduction to programming concepts',
      students: [
        { id: 'alice', name: 'Alice Johnson', email: 'alice@student.com', status: 'active', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', active: true },
        { id: 'bob', name: 'Bob Smith', email: 'bob@student.com', status: 'active', avatar: 'https://randomuser.me/api/portraits/men/46.jpg', active: true },
        { id: 'charlie', name: 'Charlie Brown', email: 'charlie@student.com', status: 'active', avatar: 'https://randomuser.me/api/portraits/men/47.jpg', active: true },
        { id: 'diana', name: 'Diana Prince', email: 'diana@student.com', status: 'active', avatar: 'https://randomuser.me/api/portraits/women/45.jpg', active: true },
        { id: 'edward', name: 'Edward Norton', email: 'edward@student.com', status: 'active', avatar: 'https://randomuser.me/api/portraits/men/48.jpg', active: true },
        { id: 'fiona', name: 'Fiona Gallagher', email: 'fiona@student.com', status: 'active', avatar: 'https://randomuser.me/api/portraits/women/46.jpg', active: true },
        { id: 'george', name: 'George Washington', email: 'george@student.com', status: 'inactive', avatar: 'https://randomuser.me/api/portraits/men/49.jpg', active: false },
        { id: 'hannah', name: 'Hannah Montana', email: 'hannah@student.com', status: 'active', avatar: 'https://randomuser.me/api/portraits/women/47.jpg', active: true },
        { id: 'ian', name: 'Ian McKellen', email: 'ian@student.com', status: 'inactive', avatar: 'https://randomuser.me/api/portraits/men/50.jpg', active: false },
        { id: 'julia', name: 'Julia Roberts', email: 'julia@student.com', status: 'active', avatar: 'https://randomuser.me/api/portraits/women/48.jpg', active: true },
        { id: 'kevin', name: 'Kevin Hart', email: 'kevin@student.com', status: 'active', avatar: 'https://randomuser.me/api/portraits/men/51.jpg', active: true },
        { id: 'lisa', name: 'Lisa Simpson', email: 'lisa@student.com', status: 'inactive', avatar: 'https://randomuser.me/api/portraits/women/49.jpg', active: false }
      ]
    },
    {
      id: 'classB',
      name: 'Advanced Programming',
      description: 'Advanced programming techniques and algorithms',
      students: [
        { id: 'alice', name: 'Alice Johnson', email: 'alice@student.com', status: 'active', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', active: true },
        { id: 'bob', name: 'Bob Smith', email: 'bob@student.com', status: 'active', avatar: 'https://randomuser.me/api/portraits/men/46.jpg', active: true },
        { id: 'charlie', name: 'Charlie Brown', email: 'charlie@student.com', status: 'active', avatar: 'https://randomuser.me/api/portraits/men/47.jpg', active: true },
        { id: 'diana', name: 'Diana Prince', email: 'diana@student.com', status: 'active', avatar: 'https://randomuser.me/api/portraits/women/45.jpg', active: true },
        { id: 'edward', name: 'Edward Norton', email: 'edward@student.com', status: 'active', avatar: 'https://randomuser.me/api/portraits/men/48.jpg', active: true },
        { id: 'fiona', name: 'Fiona Gallagher', email: 'fiona@student.com', status: 'active', avatar: 'https://randomuser.me/api/portraits/women/46.jpg', active: true },
        { id: 'george', name: 'George Washington', email: 'george@student.com', status: 'inactive', avatar: 'https://randomuser.me/api/portraits/men/49.jpg', active: false },
        { id: 'hannah', name: 'Hannah Montana', email: 'hannah@student.com', status: 'active', avatar: 'https://randomuser.me/api/portraits/women/47.jpg', active: true },
        { id: 'ian', name: 'Ian McKellen', email: 'ian@student.com', status: 'inactive', avatar: 'https://randomuser.me/api/portraits/men/50.jpg', active: false },
        { id: 'julia', name: 'Julia Roberts', email: 'julia@student.com', status: 'active', avatar: 'https://randomuser.me/api/portraits/women/48.jpg', active: true },
        { id: 'kevin', name: 'Kevin Hart', email: 'kevin@student.com', status: 'active', avatar: 'https://randomuser.me/api/portraits/men/51.jpg', active: true },
        { id: 'lisa', name: 'Lisa Simpson', email: 'lisa@student.com', status: 'inactive', avatar: 'https://randomuser.me/api/portraits/women/49.jpg', active: false }
      ]
    }
  ];
}

function getRandomEEG() {
  return Math.max(20, Math.floor(Math.random() * 100));
}

function getRandomProgress() {
  return Math.floor(Math.random() * 101);
}

function getRandomQuizStats() {
  return { success: Math.floor(Math.random() * 10), fail: Math.floor(Math.random() * 5) };
}

function getRandomHistory() {
  return Array(10).fill(0).map(getRandomEEG);
}

function getLastNDates(n) {
  const dates = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    dates.push(d.toLocaleDateString());
  }
  return dates;
}

function ReportsMain({ selectedClassId }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [classes, setClasses] = useState(getClassesData());
  const selectedClass = classes.find(c => c.id === selectedClassId) || classes[0];
  
  // Sort students: active first
  const students = [...selectedClass.students].sort((a, b) => b.active - a.active);

  // Simulate live EEG and progress for active students
  const [liveData, setLiveData] = useState(() =>
    Object.fromEntries(
      students.map(s => [s.id, {
        eeg: getRandomEEG(),
        progress: getRandomProgress(),
        quiz: getRandomQuizStats(),
      }])
    )
  );

  // Listen for changes in localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      setClasses(getClassesData());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => {
        const updated = { ...prev };
        students.forEach(s => {
          updated[s.id] = {
            eeg: getRandomEEG(),
            progress: getRandomProgress(),
            quiz: getRandomQuizStats(),
          };
        });
        return updated;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [selectedClassId, students]);

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{selectedClass.name} - {t('reports.students')}</h2>
        <button
          onClick={() => navigate(`/manage-classes?editClassId=${selectedClass.id}`)}
          className="text-sm px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors"
        >
          {t('manage.editClass')}
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map(student => (
          <div
            key={student.id}
            className="bg-white rounded-xl shadow p-6 flex items-center cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate(`/reports/${selectedClass.id}/${student.id}`)}
          >
            <img src={student.avatar} alt={student.name} className="w-16 h-16 rounded-full mr-4 border-4 border-indigo-100 shadow" />
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <span className="text-lg font-bold mr-2">{student.name}</span>
                <span className={`w-3 h-3 rounded-full ${student.active ? 'bg-green-500' : 'bg-gray-400'}`}></span>
              </div>
              {student.active ? (
                <>
                  <div className="text-sm text-gray-500 mb-1">{t('reports.active')}</div>
                  <div className="flex items-center text-sm">
                    <span className="mr-2">{t('reports.eeg')}:</span>
                    <span className="font-semibold text-indigo-700">{liveData[student.id]?.eeg}%</span>
                  </div>
                </>
              ) : (
                <div className="text-sm text-gray-500">{t('reports.inactive')}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StudentPage() {
  const { classId, studentId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [classes, setClasses] = useState(getClassesData());
  const selectedClass = classes.find(c => c.id === classId) || classes[0];
  const student = selectedClass.students.find(s => s.id === studentId);
  const [eeg, setEEG] = useState(getRandomEEG());
  const [progress, setProgress] = useState(getRandomProgress());
  const [quiz, setQuiz] = useState(getRandomQuizStats());
  const [history, setHistory] = useState(getRandomHistory());
  const historyDates = getLastNDates(10);
  const [material, setMaterial] = useState({ text: 50, video: 30, quiz: 20 });
  const [aiAnalysis, setAIAnalysis] = useState('Attention trend: improving. Prefers video content.');

  // Listen for changes in localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      setClasses(getClassesData());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Mock: assign a course to each student by id for demo
  const studentCourses = {
    alice: 'Intro to C',
    bob: 'Intro to Python',
    charlie: 'Intro to Java',
    diana: 'Intro to Python',
    edward: 'Intro to C',
    fiona: 'Intro to Java',
    george: 'Intro to Python',
    hannah: 'Intro to C',
    ian: 'Intro to Java',
    julia: 'Intro to Python',
    kevin: 'Intro to C',
    lisa: 'Intro to Java',
  };
  const currentCourse = student ? studentCourses[student.id] || t('reports.noCourseAssigned') : '';

  useEffect(() => {
    if (student?.active) {
      const interval = setInterval(() => {
        setEEG(getRandomEEG());
        setProgress(getRandomProgress());
        setQuiz(getRandomQuizStats());
        setHistory(getRandomHistory());
        setAIAnalysis(Math.random() > 0.5 ? 'Attention trend: improving. Prefers video content.' : 'Attention trend: fluctuating. Needs more quizzes.');
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [student]);

  if (!student) return <div className="p-10 text-center text-red-600">{t('reports.studentNotFound')}</div>;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-10 px-2 md:px-8">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl p-4 md:p-10 relative animate-fadeIn">
        {/* Navigation button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => navigate('/reports')}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium"
          >
            ← {t('reports.goBack')}
          </button>
        </div>
        {/* Header: Avatar and Name */}
        <div className="flex items-center mb-8 gap-4">
          <img src={student.avatar} alt={student.name} className="w-20 h-20 rounded-full border-4 border-indigo-100 shadow" />
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-2xl font-bold">{student.name}</h3>
              <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-semibold">{currentCourse}</span>
            </div>
            <div className="text-sm text-gray-500">{student.active ? t('reports.active') : t('reports.inactive')}</div>
          </div>
        </div>
        {/* Live Charts Section */}
        <div className="mb-8">
          <LiveCharts studentId={studentId} isActive={student.active} eeg={eeg} setEEG={setEEG} />
        </div>

        {/* Additional Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AI Analysis */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col border-l-4 border-indigo-200">
            <span className="font-semibold mb-2">{t('reports.aiAnalysis')}</span>
            <div className="mt-1 text-gray-700">
              {aiAnalysis.split('. ').map((part, idx) => {
                if (part.toLowerCase().includes('attention trend')) {
                  return <div key={idx} className="mb-1"><span className="font-bold text-indigo-700">{part.split(':')[0]}:</span> <span className="font-semibold">{part.split(':')[1]}</span></div>;
                } else if (part.toLowerCase().includes('prefers') || part.toLowerCase().includes('needs')) {
                  return <div key={idx} className="mb-1"><span className="font-bold text-green-700">{part}</span></div>;
                } else {
                  return <div key={idx}>{part}</div>;
                }
              })}
            </div>
          </div>
          
          {/* Quiz Stats */}
          <div className="bg-indigo-50 rounded-xl shadow p-6 flex flex-col">
            <span className="font-extrabold mb-4 text-lg">{t('reports.quizSuccessFail')}</span>
            <div className="mt-2 text-xl font-bold flex items-center gap-4">
              <span className="text-green-700">{t('reports.success')}: <span className="text-green-600 font-extrabold">{quiz.success}</span></span>
              <span className="text-gray-400 font-extrabold text-2xl">/</span>
              <span className="text-red-700">{t('reports.fail')}: <span className="text-red-600 font-extrabold">{quiz.fail}</span></span>
            </div>
          </div>
        </div>

        {/* Material Balance Controls */}
        <div className="mt-6">
          <div className="bg-white rounded-xl shadow p-6 border border-indigo-100">
            <span className="font-semibold mb-4 text-lg">{t('reports.modifyMaterialBalance')}</span>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-2">
              <label className="flex flex-col items-center text-base font-bold w-full">
                {t('reports.text')}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={material.text}
                  onChange={e => setMaterial({ ...material, text: Number(e.target.value) })}
                  className="w-full h-3 rounded-lg appearance-none bg-indigo-200 accent-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 mt-2 mb-1"
                  style={{ accentColor: '#6366f1' }}
                />
                <span className="text-indigo-700 text-lg font-extrabold">{material.text}%</span>
              </label>
              <label className="flex flex-col items-center text-base font-bold w-full">
                {t('reports.video')}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={material.video}
                  onChange={e => setMaterial({ ...material, video: Number(e.target.value) })}
                  className="w-full h-3 rounded-lg appearance-none bg-indigo-200 accent-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 mt-2 mb-1"
                  style={{ accentColor: '#6366f1' }}
                />
                <span className="text-indigo-700 text-lg font-extrabold">{material.video}%</span>
              </label>
              <label className="flex flex-col items-center text-base font-bold w-full">
                {t('reports.quiz')}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={material.quiz}
                  onChange={e => setMaterial({ ...material, quiz: Number(e.target.value) })}
                  className="w-full h-3 rounded-lg appearance-none bg-indigo-200 accent-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 mt-2 mb-1"
                  style={{ accentColor: '#6366f1' }}
                />
                <span className="text-indigo-700 text-lg font-extrabold">{material.quiz}%</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reports() {
  const { t } = useTranslation();
  const [classes, setClasses] = useState(getClassesData());
  const [searchParams, setSearchParams] = useSearchParams();
  const classIdFromUrl = searchParams.get('classId');
  const [selectedClassId, setSelectedClassId] = useState(() => {
    // If there's a classId in the URL, use it; otherwise use the first class
    if (classIdFromUrl && classes.find(c => c.id === classIdFromUrl)) {
      return classIdFromUrl;
    }
    return classes[0]?.id || 'classA';
  });

  // Update selected class when URL changes (e.g., when navigating back from student page)
  useEffect(() => {
    if (classIdFromUrl && classes.find(c => c.id === classIdFromUrl)) {
      setSelectedClassId(classIdFromUrl);
    }
  }, [classIdFromUrl, classes]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      // Force a re-read of the search params when browser navigation occurs
      const currentClassId = new URLSearchParams(window.location.search).get('classId');
      if (currentClassId && classes.find(c => c.id === currentClassId)) {
        setSelectedClassId(currentClassId);
      } else if (!currentClassId && classes.length > 0) {
        // If no classId in URL, default to first class
        setSelectedClassId(classes[0].id);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [classes]);

  // Listen for changes in localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const updatedClasses = getClassesData();
      setClasses(updatedClasses);
      // Update selected class if current one doesn't exist anymore
      if (!updatedClasses.find(c => c.id === selectedClassId)) {
        setSelectedClassId(updatedClasses[0]?.id || 'classA');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [selectedClassId]);

  // Update URL when selected class changes
  useEffect(() => {
    if (selectedClassId) {
      setSearchParams({ classId: selectedClassId });
    }
  }, [selectedClassId, setSearchParams]);

  return (
    <Routes>
      <Route path="/" element={
        <div className="flex h-screen bg-gray-50">
          {/* Sidebar */}
          <div className="w-64 bg-white shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6">{t('reports.classes')}</h2>
            <div className="space-y-2">
              {classes.map(cls => (
                <button
                  key={cls.id}
                  onClick={() => setSelectedClassId(cls.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedClassId === cls.id
                      ? 'bg-indigo-100 text-indigo-700 font-medium'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="font-medium">{cls.name}</div>
                  <div className="text-sm text-gray-500">{cls.students.length} {t('reports.studentsCount')}</div>
                </button>
              ))}
            </div>
          </div>
          {/* Main Content */}
          <ReportsMain selectedClassId={selectedClassId} />
        </div>
      } />
      <Route path="/:classId/:studentId" element={<StudentPage />} />
    </Routes>
  );
} 