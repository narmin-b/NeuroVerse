import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-16 px-4 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">Bizimle İletişime Geçin</h2>
      {submitted ? (
        <div className="bg-green-100 text-green-800 p-6 rounded text-center font-semibold">Mesajınız için teşekkürler!</div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-8 flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Adınız"
            value={form.name}
            onChange={handleChange}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-posta Adresiniz"
            value={form.email}
            onChange={handleChange}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <textarea
            name="message"
            placeholder="Mesajınız"
            value={form.message}
            onChange={handleChange}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            rows={5}
            required
          />
          <button type="submit" className="bg-indigo-700 text-white px-6 py-2 rounded font-semibold hover:bg-indigo-800 transition">Mesaj Gönder</button>
        </form>
      )}
    </section>
  );
}