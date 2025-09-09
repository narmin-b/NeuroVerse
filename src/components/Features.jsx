import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation();
  const items = t('features.items');
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">{t('features.header')}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((f, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">{['🧠','🤖','⚡','📊','✅'][i]}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}