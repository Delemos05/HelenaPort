import React from 'react';
import { Scissors } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-black text-pink-50 py-6 px-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Scissors className="w-8 h-8 text-pink-400" />
          <span className="text-2xl font-bold">Lucamba Tranças</span>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#portfolio" className="hover:text-pink-400 transition-colors">Portfólio</a>
          <a href="#testimonials" className="hover:text-pink-400 transition-colors">Depoimentos</a>
          <a href="#suggestions" className="hover:text-pink-400 transition-colors">Sugestões</a>
          <a href="#contact" className="hover:text-pink-400 transition-colors">Contato</a>
        </div>
      </nav>
    </header>
  );
}