import React, { useState } from 'react';

export default function Suggestions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', suggestion: '' });
  };

  return (
    <section id="suggestions" className="py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-pink-400">
          Suas Sugestões São Bem-Vindas
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-pink-200">
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 block w-full rounded-md bg-gray-900 border-pink-500 text-white shadow-sm focus:border-pink-400 focus:ring focus:ring-pink-400 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-pink-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 block w-full rounded-md bg-gray-900 border-pink-500 text-white shadow-sm focus:border-pink-400 focus:ring focus:ring-pink-400 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="suggestion" className="block text-sm font-medium text-pink-200">
              Sua Sugestão
            </label>
            <textarea
              id="suggestion"
              value={formData.suggestion}
              onChange={(e) => setFormData({ ...formData, suggestion: e.target.value })}
              rows={4}
              className="mt-1 block w-full rounded-md bg-gray-900 border-pink-500 text-white shadow-sm focus:border-pink-400 focus:ring focus:ring-pink-400 focus:ring-opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 transition-colors"
          >
            Enviar Sugestão
          </button>
        </form>
      </div>
    </section>
  );
}