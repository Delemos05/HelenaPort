import React from 'react';
import { Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-pink-400">
          Entre em Contato
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 text-pink-50">
            <h3 className="text-2xl font-semibold mb-4">Informações de Contato</h3>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-pink-400" />
              <span>(48) 988796332</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-pink-400" />
              <span>helenalucamba@outlook.com</span>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/lucamba_trancas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="https://wa.me/5548988796332"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                <MessageCircle className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="bg-black p-8 rounded-lg shadow-lg border border-pink-900">
            <h3 className="text-2xl font-semibold mb-6 text-pink-400">Horário de Funcionamento</h3>
            <div className="space-y-4 text-pink-50">
              <p className="flex justify-between">
                <span className="font-medium">Segunda - Sexta</span>
                <span>08:00 - 19:00</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">Sábado</span>
                <span>08:00 - 19:00</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">Domingo</span>
                <span>08:00 - 15:00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}