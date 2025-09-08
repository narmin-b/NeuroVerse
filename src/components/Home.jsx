import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import eegHero from '../assets/1*_6UZ0O0nMR7bLIdNf-_LyQ.jpg';

export default function Home() {
  const { t } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('currentUser');
      if (raw) {
        const parsed = JSON.parse(raw);
        setIsAuthenticated(Boolean(parsed?.isAuthenticated));
        setRole(parsed?.role || null);
      }
    } catch (_) {}
  }, []);

  if (!isAuthenticated) {
    return (
      <main className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-700 leading-tight">
                AI Destekli Akıllı Öğrenme
              </h1>
              <p className="mt-4 text-lg md:text-2xl text-gray-700">
                EEG tabanlı dikkat takibi ve uyarlanabilir içerikle her öğrenciye özel, etkileyici bir öğrenme deneyimi.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/auth" className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-800 transition">
                  Hemen Başla
                </a>
                <a href="/features" className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-50 transition">
                  Nasıl Çalışır?
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-indigo-100 transform hover:scale-[1.01] transition">
                <img
                  src={eegHero}
                  alt="EEG başlıklı bir öğrenci"
                  className="w-full h-[320px] md:h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white/80 backdrop-blur px-4 py-3 rounded-xl shadow-lg border border-indigo-100">
                <p className="text-sm text-gray-700">
                  Gerçek zamanlı dikkat verisiyle içerik dinamik olarak uyarlanır.
                </p>
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
                <h2 className="text-2xl md:text-3xl font-bold text-indigo-800">Öğrenciler için: Anında geri bildirim</h2>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Dikkat seviyeniz düştüğünde sistem otomatik olarak içerik türünü değiştirir: metinden videoya geçer,
                  kısa bir quiz önerir veya konuyu sadeleştirir. Böylece öğrenme ritminiz korunur.
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></span>Kişiselleştirilmiş modül akışı</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></span>EEG ile dikkat takibi</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></span>Anında içerik önerileri</li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-indigo-100 group relative">
                  <img
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600&auto=format&fit=crop"
                    alt="Ders içeriği ile etkileşimde bulunan öğrenci"
                    className="w-full h-72 object-cover group-hover:scale-[1.02] transition"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/90 px-3 py-1.5 rounded-full text-xs text-indigo-700 shadow">
                    Adaptif Öğrenme
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
                    alt="Bilgisayarda sınıf ilerlemesini izleyen öğretmen"
                    className="w-full h-72 object-cover group-hover:scale-[1.02] transition"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/90 px-3 py-1.5 rounded-full text-xs text-indigo-700 shadow">
                    Gerçek Zamanlı Paneller
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-indigo-800">Öğretmenler için: Sınıf analitiği</h2>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Öğrencilerin dikkat ve ilerleme verilerini tek ekranda görün. Zorlanan öğrencilere özel içerik atayın,
                  sınıf genelinde materyal dengesini ayarlayın ve etkili müdahalelerde bulunun.
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></span>Ders/öğrenci bazında raporlar</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></span>AI destekli öneriler</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></span>Kolay sınıf yönetimi</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Authenticated users - keep concise hero
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-indigo-50 to-white text-center p-10">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-indigo-700">AI Destekli Akıllı Öğrenme</h1>
      <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-2xl">Her öğrenci için kişiselleştirilmiş eğitim, gerçek zamanlı beyin dalgası analizi ve uyarlanabilir AI ile desteklenir.</p>
      <a href={role === 'student' ? '/lessons' : '/reports'} className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-800 transition">
        Devam Et
      </a>
    </section>
  );
}