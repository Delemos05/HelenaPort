import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    text: "A Helena é incrível! Fez minhas box braids exatamente como eu queria. Super profissional e atenciosa.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ana Santos",
    text: "Melhor trancista que já conheci. Trabalho impecável e ambiente super acolhedor.",
    rating: 5,
  },
  {
    id: 3,
    name: "Júlia Oliveira",
    text: "As tranças ficaram perfeitas e duraram muito tempo. Recomendo demais!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-pink-400">
          O que Minhas Clientes Dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-black p-6 rounded-lg shadow-lg border border-pink-900"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-pink-400 text-pink-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-pink-400">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}