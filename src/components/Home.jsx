import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-indigo-50 to-white text-center p-10">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-indigo-700">AI Destekli Akıllı Öğrenme</h1>
      <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-2xl">Her öğrenci için kişiselleştirilmiş eğitim, gerçek zamanlı beyin dalgası analizi ve uyarlanabilir AI ile desteklenir.</p>
      <a href="/features" className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-800 transition">Nasıl Çalıştığını Öğren</a>
    </section>
  );
}