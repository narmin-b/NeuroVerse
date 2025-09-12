import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import eegHero from '../assets/homepageEEG.jpg';
import { generateAIResponse, getAIRecommendations } from '../services/ai.js';

export default function Home({ user }) {
  const { t, i18n } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [username, setUsername] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 'sys-1', from: 'ai', text: t('chat.greeting') }
  ]);
  const [chatBusy, setChatBusy] = useState(false);
  const [recsLoading, setRecsLoading] = useState(true);
  const [recs, setRecs] = useState([]);

  const pushMessage = (from, text) => {
    setChatMessages((prev) => [...prev, { id: `${from}-${Date.now()}`, from, text }]);
  };

  const handleSendChat = async () => {
    const trimmed = chatInput.trim();
    if (!trimmed) return;
    pushMessage('you', trimmed);
    setChatInput('');
    if (chatBusy) return;
    setChatBusy(true);

    // Try live AI first; falls back to simple hint when not configured
    const reply = await generateAIResponse(
      `${i18n.language === 'tr' ? 'Kısa ve motive edici bir öğrenme koçu gibi cevap ver.' : 'Reply briefly like a motivating learning coach.'} ${i18n.language === 'tr' ? 'Öğrenci ismi' : 'Student name'}: ${username || (i18n.language === 'tr' ? 'Öğrenci' : 'Student')}. ${i18n.language === 'tr' ? 'Soru' : 'Question'}: ${trimmed}.`
    );
    pushMessage('ai', reply);
    setChatBusy(false);
  };

  useEffect(() => {
    // Prefer prop if provided; else read from localStorage
    const source = user || (function(){ try { return JSON.parse(localStorage.getItem('currentUser') || 'null'); } catch(e){ return null; } })();
    setIsAuthenticated(Boolean(source?.isAuthenticated));
    setRole(source?.role || null);
    setUsername(source?.username || '');
  }, [user]);

  useEffect(() => {
    // Load AI recommendations when student is authenticated
    if (isAuthenticated && role === 'student') {
      const context = {
        username,
        recentActivity: {
          minutes: 180,
          completedModules: 5,
          quizSuccessRate: 0.82
        },
        interests: ['python', 'web', 'js']
      };
      (async () => {
        setRecsLoading(true);
        const { items } = await getAIRecommendations(context);
        setRecs(items && items.length ? items : [
          { title: 'Kısa Python Tekrarı', description: '10 dakikalık döngüler özeti + mini quiz.', cta: 'Başla', route: '/lessons' },
          { title: 'Video: JS Fonksiyonlar', description: '6 dakikalık odak video derse ısın.', cta: 'İzle', route: '/lessons' },
          { title: 'HTML Quiz', description: '5 soruyla hızlı ölçme ve pekiştirme.', cta: 'Quize Git', route: '/lessons' }
        ]);
        setRecsLoading(false);
      })();
    }
  }, [isAuthenticated, role, username]);

  if (!isAuthenticated) {
    return (
      <main className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-700 leading-tight">{t('home.heroTitle')}</h1>
              <p className="mt-4 text-lg md:text-2xl text-gray-700">{t('home.heroSubtitle')}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/auth" className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-800 transition">{t('home.ctaStart')}</a>
                <a href="/features" className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-50 transition">{t('home.ctaHow')}</a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-indigo-100 transform hover:scale-[1.01] transition">
                <img
                  src={eegHero}
                  alt={t('home.heroImgAlt')}
                  className="w-full h-[320px] md:h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white/80 backdrop-blur px-4 py-3 rounded-xl shadow-lg border border-indigo-100">
                <p className="text-sm text-gray-700">{t('home.heroBadge')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Explainer sections - dynamic alternating layout */}
        <section className="px-6 md:px-12 pb-20">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Student experience */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold text-indigo-800">{t('home.studentTitle')}</h2>
                <p className="mt-3 text-gray-700 leading-relaxed">{t('home.studentBody1')} {t('home.studentBody2')}</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></span>{t('home.studentBullet1')}</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></span>{t('home.studentBullet2')}</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></span>{t('home.studentBullet3')}</li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-indigo-100 group relative">
                  <img
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600&auto=format&fit=crop"
                    alt={t('home.studentImageAlt')}
                    className="w-full h-72 object-cover group-hover:scale-[1.02] transition"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/90 px-3 py-1.5 rounded-full text-xs text-indigo-700 shadow">
                    {t('home.studentImageBadge')}
                  </div>
                </div>
              </div>
            </div>

            {/* Teacher dashboard */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-indigo-100 group relative">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
                    alt={t('home.teacherImageAlt')}
                    className="w-full h-72 object-cover group-hover:scale-[1.02] transition"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/90 px-3 py-1.5 rounded-full text-xs text-indigo-700 shadow">
                    {t('home.teacherImageBadge')}
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-indigo-800">{t('home.teacherTitle')}</h2>
                <p className="mt-3 text-gray-700 leading-relaxed">{t('home.teacherBody1')} {t('home.teacherBody2')}</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></span>{t('reports.classes')} / {t('reports.students')}</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></span>AI</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></span>{t('manage.header')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Authenticated users
  if (role === 'student') {
    const myLessonsPath = i18n.language === 'tr' ? '/derslerim' : '/my-lessons';
    return (
      <main className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-[60vh]">
        <section className="pt-16 pb-8 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
              {username ? username.charAt(0).toUpperCase() : 'U'}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-indigo-800">{t('nav.welcome', { name: username || '' })}</h1>
              <p className="text-gray-700">{t('home.welcomeQuestion')}</p>
            </div>
          </div>
        </section>

        {/* Quick actions */}
        <section className="px-6 md:px-12 pb-10 max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/lessons" className="group bg-white rounded-xl p-5 shadow hover:shadow-md ring-1 ring-indigo-100 hover:ring-indigo-200 transition">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6"/></svg>
              </div>
              <h3 className="font-semibold text-indigo-800">{t('home.quickLessonsTitle')}</h3>
              <p className="text-sm text-gray-600 mt-1">{t('home.quickLessonsDesc')}</p>
            </Link>

            <Link to={myLessonsPath} className="group bg-white rounded-xl p-5 shadow hover:shadow-md ring-1 ring-indigo-100 hover:ring-indigo-200 transition">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18"/></svg>
              </div>
              <h3 className="font-semibold text-indigo-800">{t('home.quickMyLessonsTitle')}</h3>
              <p className="text-sm text-gray-600 mt-1">{t('home.quickMyLessonsDesc')}</p>
            </Link>

            <Link to="/lessons" className="group bg-white rounded-xl p-5 shadow hover:shadow-md ring-1 ring-indigo-100 hover:ring-indigo-200 transition">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V3a1 1 0 112 0v8m0 10v-4a4 4 0 10-8 0v4h8z"/></svg>
              </div>
              <h3 className="font-semibold text-indigo-800">{t('home.quickRecentTitle')}</h3>
              <p className="text-sm text-gray-600 mt-1">{t('home.quickRecentDesc')}</p>
            </Link>

            <Link to="/contact" className="group bg-white rounded-xl p-5 shadow hover:shadow-md ring-1 ring-indigo-100 hover:ring-indigo-200 transition">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 20l.8-4a8.78 8.78 0 01-.8-4c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
              </div>
              <h3 className="font-semibold text-indigo-800">{t('home.quickSupportTitle')}</h3>
              <p className="text-sm text-gray-600 mt-1">{t('home.quickSupportDesc')}</p>
            </Link>
          </div>
        </section>

        {/* Mini activity summary */}
        <section className="px-6 md:px-12 pb-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow ring-1 ring-indigo-100">
              <h4 className="font-semibold text-indigo-800">Haftalık Aktivite</h4>
              <p className="text-sm text-gray-600">Özet veriler örnektir.</p>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-indigo-700">3h</div>
                  <div className="text-xs text-gray-600">Çalışma Süresi</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-700">5</div>
                  <div className="text-xs text-gray-600">Tamamlanan Modül</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-700">82%</div>
                  <div className="text-xs text-gray-600">Quiz Başarısı</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow ring-1 ring-indigo-100">
              <img
                src={eegHero}
                alt="Çalışırken öğrenci"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>
        </section>

        {/* AI recommendations */}
        <section className="px-6 md:px-12 pb-24 max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-indigo-800 mb-4">{t('home.aiRecsTitle')}</h3>
          {recsLoading ? (
            <div className="grid md:grid-cols-3 gap-4">
              {[0,1,2].map((i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow ring-1 ring-indigo-100 animate-pulse">
                  <div className="h-4 w-24 bg-indigo-100 rounded mb-3"></div>
                  <div className="h-4 w-48 bg-indigo-100 rounded mb-2"></div>
                  <div className="h-4 w-36 bg-indigo-100 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-4">
              {recs.map((r, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 shadow ring-1 ring-indigo-100">
                  <div className="text-xs text-indigo-700 font-semibold mb-2">{t('home.aiLabel')}</div>
                  <h4 className="font-semibold text-gray-900">{r.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{r.description}</p>
                  <Link to={r.route || '/lessons'} className="inline-block mt-3 text-indigo-700 font-medium hover:underline">{r.cta || t('home.aiCtaGo')} →</Link>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Floating AI helper chat */}
        <button
          onClick={() => setChatOpen((v) => !v)}
          className="fixed bottom-6 right-6 z-40 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center"
          aria-label={t('chat.toggleAria')}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 20l.8-4a8.78 8.78 0 01-.8-4c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
        </button>

        {chatOpen && (
          <div className="fixed bottom-24 right-6 z-40 w-80 bg-white rounded-2xl shadow-2xl ring-1 ring-indigo-100 overflow-hidden">
            <div className="bg-indigo-600 text-white px-4 py-3 flex items-center justify-between">
              <div className="font-semibold">{t('chat.title')}</div>
              <button onClick={() => setChatOpen(false)} className="text-white/90 hover:text-white">✕</button>
            </div>
            <div className="h-64 overflow-y-auto px-3 py-3 space-y-2 bg-indigo-50/40">
              {chatMessages.map((m) => (
                <div key={m.id} className={`max-w-[85%] ${m.from === 'ai' ? 'bg-white text-gray-800' : 'bg-indigo-600 text-white ml-auto'} px-3 py-2 rounded-lg shadow`}>{m.text}</div>
              ))}
            </div>
            <div className="p-3 flex items-center gap-2 border-t">
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSendChat(); }}
                placeholder={t('chat.placeholder')}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <button onClick={handleSendChat} disabled={chatBusy} className={`px-3 py-2 rounded-lg text-white ${chatBusy ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}>{chatBusy ? t('chat.busy') : t('chat.send')}</button>
            </div>
          </div>
        )}
      </main>
    );
  }

  // Authenticated teacher dashboard
  if (role === 'teacher') {
    return (
      <main className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-[60vh]">
        <section className="pt-16 pb-8 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
              {username ? username.charAt(0).toUpperCase() : 'T'}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-indigo-800">{t('nav.welcome', { name: username || '' })}</h1>
              <p className="text-gray-700">{i18n.language === 'tr' ? 'Sınıflarınızı yönetin ve öğrenci ilerlemelerini takip edin.' : 'Manage your classes and track student progress.'}</p>
            </div>
          </div>
        </section>

        {/* Quick actions for teachers */}
        <section className="px-6 md:px-12 pb-10 max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/reports" className="group bg-white rounded-xl p-5 shadow hover:shadow-md ring-1 ring-indigo-100 hover:ring-indigo-200 transition">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              </div>
              <h3 className="font-semibold text-indigo-800">{i18n.language === 'tr' ? 'Raporlar' : 'Reports'}</h3>
              <p className="text-sm text-gray-600 mt-1">{i18n.language === 'tr' ? 'Öğrenci performansını görüntüle' : 'View student performance'}</p>
            </Link>

            <Link to="/manage-classes" className="group bg-white rounded-xl p-5 shadow hover:shadow-md ring-1 ring-indigo-100 hover:ring-indigo-200 transition">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/></svg>
              </div>
              <h3 className="font-semibold text-indigo-800">{i18n.language === 'tr' ? 'Sınıfları Yönet' : 'Manage Classes'}</h3>
              <p className="text-sm text-gray-600 mt-1">{i18n.language === 'tr' ? 'Sınıf oluştur ve öğrencileri yönet' : 'Create classes and manage students'}</p>
            </Link>

            <Link to="/profile" className="group bg-white rounded-xl p-5 shadow hover:shadow-md ring-1 ring-indigo-100 hover:ring-indigo-200 transition">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              </div>
              <h3 className="font-semibold text-indigo-800">{i18n.language === 'tr' ? 'Profilim' : 'My Profile'}</h3>
              <p className="text-sm text-gray-600 mt-1">{i18n.language === 'tr' ? 'Hesap ayarları ve istatistikler' : 'Account settings and statistics'}</p>
            </Link>

            <Link to="/contact" className="group bg-white rounded-xl p-5 shadow hover:shadow-md ring-1 ring-indigo-100 hover:ring-indigo-200 transition">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 20l.8-4a8.78 8.78 0 01-.8-4c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
              </div>
              <h3 className="font-semibold text-indigo-800">{i18n.language === 'tr' ? 'Destek' : 'Support'}</h3>
              <p className="text-sm text-gray-600 mt-1">{i18n.language === 'tr' ? 'Yardım ve iletişim' : 'Help and contact'}</p>
            </Link>
          </div>
        </section>

        {/* Teacher summary dashboard */}
        <section className="px-6 md:px-12 pb-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Classes & Students Summary */}
            <div className="bg-white rounded-2xl p-6 shadow ring-1 ring-indigo-100">
              <h4 className="font-semibold text-indigo-800 mb-4">{i18n.language === 'tr' ? 'Sınıf Özeti' : 'Class Overview'}</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                {(() => {
                  const classes = JSON.parse(localStorage.getItem('teacherClasses') || '[]');
                  const teacherClasses = classes.filter(c => c.teacherId === username);
                  const totalStudents = teacherClasses.reduce((sum, cls) => sum + (cls.students?.length || 0), 0);
                  const pendingRequests = Object.values(JSON.parse(localStorage.getItem('classJoinRequests') || '{}')).flat().filter(r => r.status === 'pending').length;

                  return (
                    <>
                      <div>
                        <div className="text-2xl font-bold text-indigo-700">{teacherClasses.length}</div>
                        <div className="text-xs text-gray-600">{i18n.language === 'tr' ? 'Aktif Sınıf' : 'Active Classes'}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-indigo-700">{totalStudents}</div>
                        <div className="text-xs text-gray-600">{i18n.language === 'tr' ? 'Toplam Öğrenci' : 'Total Students'}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-600">{pendingRequests}</div>
                        <div className="text-xs text-gray-600">{i18n.language === 'tr' ? 'Bekleyen İstek' : 'Pending Requests'}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">95%</div>
                        <div className="text-xs text-gray-600">{i18n.language === 'tr' ? 'Ortalama Başarı' : 'Avg Success'}</div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow ring-1 ring-indigo-100">
              <h4 className="font-semibold text-indigo-800 mb-4">{i18n.language === 'tr' ? 'Son Aktiviteler' : 'Recent Activity'}</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 bg-indigo-50 rounded-lg">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">{i18n.language === 'tr' ? 'Yeni öğrenci katılım isteği' : 'New student join request'}</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">{i18n.language === 'tr' ? 'Python dersi tamamlandı' : 'Python lesson completed'}</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">{i18n.language === 'tr' ? 'Quiz sonuçları güncellendi' : 'Quiz results updated'}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats Cards */}
        <section className="px-6 md:px-12 pb-24 max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-indigo-800 mb-4">{i18n.language === 'tr' ? 'Hızlı İstatistikler' : 'Quick Statistics'}</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 shadow ring-1 ring-indigo-100">
              <div className="text-xs text-indigo-700 font-semibold mb-2">{i18n.language === 'tr' ? 'BU HAFTA' : 'THIS WEEK'}</div>
              <h4 className="font-semibold text-gray-900">{i18n.language === 'tr' ? 'Aktif Öğrenciler' : 'Active Students'}</h4>
              <p className="text-sm text-gray-600 mt-1">{i18n.language === 'tr' ? '24 öğrenci ders tamamladı' : '24 students completed lessons'}</p>
              <div className="mt-3 text-indigo-700 font-medium">+15% {i18n.language === 'tr' ? 'artış' : 'increase'}</div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow ring-1 ring-indigo-100">
              <div className="text-xs text-indigo-700 font-semibold mb-2">{i18n.language === 'tr' ? 'ORTALAMA' : 'AVERAGE'}</div>
              <h4 className="font-semibold text-gray-900">{i18n.language === 'tr' ? 'Quiz Başarısı' : 'Quiz Success'}</h4>
              <p className="text-sm text-gray-600 mt-1">{i18n.language === 'tr' ? 'Sınıflarınızda genel başarı oranı' : 'Overall success rate in your classes'}</p>
              <div className="mt-3 text-green-600 font-medium">87% {i18n.language === 'tr' ? 'başarı' : 'success'}</div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow ring-1 ring-indigo-100">
              <div className="text-xs text-indigo-700 font-semibold mb-2">{i18n.language === 'tr' ? 'TOPLAM' : 'TOTAL'}</div>
              <h4 className="font-semibold text-gray-900">{i18n.language === 'tr' ? 'Çalışma Saati' : 'Study Hours'}</h4>
              <p className="text-sm text-gray-600 mt-1">{i18n.language === 'tr' ? 'Öğrencilerinizin toplam çalışma süresi' : 'Total study time of your students'}</p>
              <div className="mt-3 text-indigo-700 font-medium">156h {i18n.language === 'tr' ? 'bu ay' : 'this month'}</div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Authenticated users (fallback)
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-indigo-50 to-white text-center p-10">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-indigo-700">{t('home.heroTitle')}</h1>
      <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-2xl">{t('home.heroSubtitle')}</p>
      <a href={role === 'student' ? '/lessons' : '/reports'} className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-800 transition">
        {i18n.language === 'tr' ? 'Devam Et' : 'Continue'}
      </a>
    </section>
  );
}