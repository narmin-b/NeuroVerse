import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Benefits() {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">{t('benefits.header')}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center">
          <div className="text-5xl mb-4">🎓</div>
          <h3 className="text-xl font-semibold mb-2">{t('benefits.studentsTitle')}</h3>
          <p className="text-gray-600">{t('benefits.studentsDesc')}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center">
          <div className="text-5xl mb-4">👩‍🏫</div>
          <h3 className="text-xl font-semibold mb-2">{t('benefits.teachersTitle')}</h3>
          <p className="text-gray-600">{t('benefits.teachersDesc')}</p>
        </div>
      </div>
    </section>
  );
} 