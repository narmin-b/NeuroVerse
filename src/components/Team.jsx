import React from 'react';

export default function Team() {
  const members = [
    { role: 'Advisor', grade: 'PhD' },
    { role: 'AI Engineer (Captain)', grade: 'Undergrad 2' },
    { role: 'Front-end Developer', grade: 'Undergrad 3' },
    { role: 'Back-end Developer', grade: 'Undergrad 4' },
  ];

  return (
    <section id="team" className="p-10">
      <h3 className="text-2xl font-semibold mb-4">Team</h3>
      <ul className="space-y-2">
        {members.map((m, idx) => (
          <li key={idx} className="bg-white shadow p-4 rounded">
            {m.role} — <span className="italic">{m.grade}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}