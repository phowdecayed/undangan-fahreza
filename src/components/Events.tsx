import React, { useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Events() {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  return (
    <section id="events" className="py-20 bg-[#004938]/5 text-[#004938]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-cormorant text-center text-[#004938] mb-16">Wedding Events</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md space-y-4">
            <Calendar className="w-12 h-12 text-[#004938] mx-auto" />
            <h3 className="text-2xl font-cormorant text-center">Akad Nikah</h3>
            <div className="text-center text-gray-600 space-y-2">
              <p className="font-semibold">Saturday, November 09, 2024</p>
              <p>08:00 - 10:00 WIB</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md space-y-4">
            <Calendar className="w-12 h-12 text-[#004938] mx-auto" />
            <h3 className="text-2xl font-cormorant text-center">Wedding Reception</h3>
            <div className="text-center text-gray-600 space-y-2">
              <p className="font-semibold">Saturday, November 09, 2024</p>
              <p>11:00 - 14:00 WIB</p>
            </div>
          </div>
        </div>
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md text-center space-y-4">
          <MapPin className="w-12 h-12 text-[#004938] mx-auto" />
          <h3 className="text-2xl font-cormorant">Venue</h3>
          <div className="text-gray-600 space-y-2">
            <p className="font-semibold">Seskoad Grand Ballroom</p>
            <p>Jl. Gatot Subroto No.96, Lkr. Sel., Kec. Lengkong</p>
            <p>Kota Bandung, Jawa Barat 40263</p>
          </div>
          <button
            onClick={() => setIsMapModalOpen(true)}
            className="mt-4 px-6 py-2 bg-[#004938] text-white rounded-md hover:bg-[#003926] transition-colors"
          >
            View Map
          </button>
        </div>
      </div>

      {isMapModalOpen && (
        <MapModal onClose={() => setIsMapModalOpen(false)} />
      )}
    </section>
  );
}

function MapModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg w-full max-w-3xl">
        <h3 className="text-2xl font-cormorant mb-4">Venue Location</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7089215239384!2d107.62692547551246!3d-6.925355793074408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e70d9dea99e9%3A0xe5beac0e6548acc2!2sHIS%20SESKOAD!5e0!3m2!1sen!2sid!4v1729779325996!5m2!1sen!2sid" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-[#004938] text-white rounded-md hover:bg-[#003926] transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
