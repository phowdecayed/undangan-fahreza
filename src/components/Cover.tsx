import React from 'react';
import { Heart } from 'lucide-react';

interface CoverProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function Cover({ onOpen, isOpen }: CoverProps) {
  return (
    <div className={`fixed inset-0 bg-black/80 z-50 transition-transform duration-1000 ${
      isOpen ? 'translate-y-full' : 'translate-y-0'
    } overflow-hidden`}>
      <img 
        src="/images/cover-image.png" 
        alt="Cover" 
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-8">
          {/* <Heart className="w-16 h-16 text-white mx-auto animate-pulse" /> */}
          <div className="space-y-4">
            <span className="block text-white font-montserrat text-sm tracking-widest uppercase">
              The Wedding of
            </span>
            <h2 className="text-white font-cormorant text-5xl">Adilla & Fahreza</h2>
          </div>
          <div className="space-y-2">
            <span className="block text-white font-montserrat text-sm tracking-widest uppercase">
              Kepada Yth.
            </span>
            <span className="block text-white font-montserrat font-bold text-lg uppercase">
              Bidang Perbendaharaan
            </span>
          </div>
          <div className="space-y-4">
            <button onClick={onOpen} className="px-8 py-3 bg-white text-[#004938] hover:bg-white/90 transition-colors rounded-full font-montserrat text-sm tracking-wider">
              BUKA UNDANGAN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
