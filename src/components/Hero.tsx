import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="f1.png"
          alt="African braids background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Arte em Cada Trança
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">
          Transformando cabelos e resgatando a beleza ancestral através das tranças africanas
        </p>
        <a
          href="https://wa.me/5548988796332"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg transition-colors"
        >
          Agende seu Horário
        </a>
      </div>
    </section>
  );
}