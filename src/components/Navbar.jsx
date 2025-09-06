import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-indigo-700 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">NeuroVerse</h1>
      <div className="space-x-4">
        <a href="#features">Features</a>
        <a href="#team">Team</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}