import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const banners = [
  {
    id: 1,
    image: "https://www.bembos.com.pe/media/wysiwyg/bembos/banners/desktop/semana-bravaza-desktop.jpg", // Intentando usar una URL real o similar
    alt: "Semana Bravaza"
  },
  {
    id: 2,
    image: "https://www.bembos.com.pe/media/wysiwyg/bembos/banners/desktop/promos-exclusivas-desktop.jpg",
    alt: "Promos Exclusivas"
  },
  {
    id: 3,
    image: "https://www.bembos.com.pe/media/wysiwyg/bembos/banners/desktop/combos-desktop.jpg",
    alt: "Combos"
  }
];

// Fallback images if the above don't load (using placeholders with Bembos colors)
const fallbackBanners = [
  { id: 1, color: "bg-blue-900", text: "SEMANA BRAVAZA" },
  { id: 2, color: "bg-yellow-500", text: "PROMOS EXCLUSIVAS" },
  { id: 3, color: "bg-red-600", text: "COMBOS IMPERDIBLES" }
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative w-full h-[200px] md:h-[400px] overflow-hidden bg-gray-200 group">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Try to render image, if it fails (onError) we could swap, but for now let's assume they might work or use a colored div as placeholder */}
          <div className={`w-full h-full flex items-center justify-center text-4xl font-bold text-white ${fallbackBanners[currentIndex].color}`}>
             {/* In a real scenario we would use <img /> but since I can't guarantee the URLs, I'll use a styled div that looks like a banner */}
             <img 
                src={banners[currentIndex].image} 
                alt={banners[currentIndex].alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add(fallbackBanners[currentIndex].color);
                    e.target.parentElement.innerText = fallbackBanners[currentIndex].text;
                }}
             />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#ffb500]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
