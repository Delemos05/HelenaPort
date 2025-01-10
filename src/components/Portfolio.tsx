import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: "Knotless Braids",
    mainImage: "f15.jpg",
    images: [
      "f15.jpg",
      "f12.jpg",
      "f18.jpg"
    ]
  },
  {
    id: 2,
    title: "Nagô",
    mainImage: "f25.jpg",
    images: [
      "f25.jpg",
      "f26.jpg",
      "f23.jpg"
    ]
  },
  {
    id: 3,
    title: "Box Braids",
    mainImage: "f9.jpg",
    images: [
      "f9.jpg",
      "f8.jpg"
    
    ]
  },
  {
    id: 4,
    title: "Boho Curls",
    mainImage: "f30.jpg",
    images: [
      "f30.jpg",
      "f27.jpg"
    ]
  },
  {
    id: 5,
    title: "Nagô cruzada",
    mainImage: "f29.jpg",
    images: [
      "f29.jpg",
      "f31.jpg"
    ]
  },
  {
    id: 6,
    title: "Nagô Huambo",
    mainImage: "f33.jpg",
    images: [
      "f33.jpg",
      "f34.jpg"
    ]
  },
];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openCarousel = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
  };

  const closeCarousel = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-pink-400">
          Meus Trabalhos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 cursor-pointer"
              onClick={() => openCarousel(item)}
            >
              <img
                src={item.mainImage}
                alt={item.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-pink-200 text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Carousel */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={closeCarousel}
              className="absolute -top-12 right-0 text-pink-50 hover:text-pink-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative">
              <img
                src={selectedItem.images[currentImageIndex]}
                alt={`${selectedItem.title} ${currentImageIndex + 1}`}
                className="w-full h-[80vh] object-contain"
              />
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-pink-50 hover:text-pink-400 transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-pink-50 hover:text-pink-400 transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
            
            <div className="text-center mt-4">
              <h3 className="text-pink-400 text-2xl font-semibold">{selectedItem.title}</h3>
              <p className="text-pink-50 mt-2">
                Imagem {currentImageIndex + 1} de {selectedItem.images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}