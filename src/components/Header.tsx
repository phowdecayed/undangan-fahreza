import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export default function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/images/cover-image.png', '/images/hero-image.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header id="header" className="relative h-screen overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-2000 ease-in-out"
          style={{
            opacity: index === currentImageIndex ? 1 : 0,
            zIndex: index === currentImageIndex ? 10 : 0,
          }}
        >
          <img
            src={src}
            alt={`Wedding background ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/30 z-20" />
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white space-y-8 z-30">
        <div className="space-y-4 animate-fadeIn">
          <span className="font-montserrat text-sm tracking-widest uppercase italic">
            UNDANGAN PERNIKAHAN
          </span>
          <div className="space-y-2">
            <h1 className="font-cormorant text-7xl -mb-4">Adilla &</h1>
            <h1 className="font-cormorant text-7xl">Fahreza</h1>
          </div>
          <div className="mt-8">
            <span className="font-montserrat text-xl tracking-wider block uppercase italic">
              Sabtu, 09 November 2024
            </span>
          </div>
        </div>
        <div className="mt-16 animate-pulse">
          <a href="#couple" className="text-white">
            <span className="block transform rotate-[405deg] w-6 h-6 border-t-2 border-l-2 mx-auto mb-2"></span>
            <span className="block transform rotate-[405deg] w-6 h-6 border-t-2 border-l-2 mx-auto mb-2"></span>
            <span className="block transform rotate-[405deg] w-6 h-6 border-t-2 border-l-2 mx-auto"></span>
          </a>
          <span className="font-quattrocento italic text-xs tracking-wider block mt-4">
            GESER KE ATAS
          </span>
        </div>
      </div>
    </header>
  );
}
