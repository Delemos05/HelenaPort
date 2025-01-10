import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Suggestions from './components/Suggestions';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Testimonials />
        <Suggestions />
        <Contact />
      </main>
      <footer className="bg-black text-pink-50 py-6 text-center border-t border-pink-900">
        <p>&copy; 2024 Helena Tranças. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;