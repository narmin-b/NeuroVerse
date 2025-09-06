import React from 'react';
import { useTranslation } from 'react-i18next';

const features = [
  {
    icon: '🧠',
    title: 'EEG Veri Toplama',
    desc: 'Dikkat ve bilişsel yükü ölçmek için gerçek zamanlı beyin dalgası verilerini yakalayın.'
  },
  {
    icon: '🤖',
    title: 'AI Analizi',
    desc: 'Derin öğrenme modelleri (LSTM/CNN) katılım ve öğrenme ihtiyaçları için EEG desenlerini analiz eder.'
  },
  {
    icon: '⚡',
    title: 'Uyarlanabilir İçerik',
    desc: 'Öğrenci odaklanmasına göre ders formatını dinamik olarak ayarlayın—etkileşimli, video veya ses.'
  },
  {
    icon: '📊',
    title: 'Öğretmen Paneli',
    desc: 'Öğrenci katılımını takip etmek için eğitimcilere gerçek zamanlı analitik ve raporlama.'
  },
  {
    icon: '✅',
    title: 'Geri Bildirim ve Doğrulama',
    desc: 'Öğrenci geri bildirimi ve doğrulama yoluyla sürekli iyileştirme.'
  },
];

export default function Features() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">Platform Özellikleri</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}