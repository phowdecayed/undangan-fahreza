import React from 'react';
import { Heart } from 'lucide-react';

export default function Couple() {
  return (
    <section id="couple" className="py-20 bg-white text-[#004938]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animatedParent" data-sequence="500">
          <img src="/images/basmallah.png" alt="Basmallah" className="w-48 mx-auto mb-4 animated growIn slower" data-id="1" />
          <p className="font-montserrat text-sm tracking-wide animated growIn slower" data-id="2">
            Assalamu'alaikum Wr. Wb.<br /><br />
            Atas nama Allah SWT yang Maha Pengasih dan Maha Penyayang, kami dengan senang hati untuk mengundang anda dan berbagi kegembiraan di pernikahan kami
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 ml-[205px]">
          <div className="flex flex-col items-center space-y-2 animatedParent" data-sequence="500">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 animatedParent" data-sequence="500">
              <div className="text-center md:text-right">
                <h3 className="font-cormorant text-2xl mb-1 animated growIn slower" data-id="2">Adilla Nuraini</h3>
                <p className="text-[#004938] italic text-xs mb-1 animated growIn slower" data-id="3">Putri Tercinta</p>
                <p className="text-[#004938] text-xs animated growIn slower" data-id="4">
                  Bapak Hartoyo Cokro<br />
                  Ibu Nurlaelasari (Alm)
                </p>
              </div>
              <div className="animated growIn" data-id="1">
                <img src="/images/bride.png" alt="Bride" className="w-48 h-48 object-cover rounded-full ring-4 ring-[#004938]" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2 animatedParent ml-[0px]" data-sequence="500">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 animatedParent" data-sequence="500">
              <div className="animated growIn" data-id="1">
                <img src="/images/groom.png" alt="Groom" className="w-48 h-48 object-cover rounded-full ring-4 ring-[#004938]" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-cormorant text-2xl mb-1 animated growIn slower" data-id="2">Fahreza Ramadhan Nur Pratama</h3>
                <p className="text-[#004938] italic text-xs mb-1 animated growIn slower" data-id="3">Putra Tercinta</p>
                <p className="text-[#004938] text-xs animated growIn slower" data-id="4">
                  Bapak Heru Triatmoko<br />
                  Ibu Susan Agustina
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 space-y-8 animatedParent" data-sequence="500">
          <img src="/images/bungaAA.png" alt="Flower" className="w-24 mx-auto bg-[#004938] animated growIn slower" data-id="1" />
          <div className="animated growIn slower" data-id="2">
            <p className="font-cormorant text-2xl uppercase mb-2">Sabtu</p>
            <p className="font-cormorant text-xl">09 November 2024</p>
          </div>
          <img src="/images/bungaBB.png" alt="Flower" className="w-20 mx-auto bg-[#004938] animated growIn slower" data-id="3" />
          <p className="font-montserrat text-sm text-gray-600 max-w-2xl mx-auto animated growIn slower" data-id="4">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan Doa restu kepada kedua mempelai
          </p>
          <div className="animated growIn slower" data-id="5">
            <a 
              href="https://calendar.google.com/calendar/r/eventedit?text=Adilla Fahreza Wedding Day&dates=20241109T110000/20241109T140000&ctz=Asia/Jakarta&details=Kami akan sangat gembira ketika kita bisa bertemu di acara kami.<br><br>salam hangat<br>Adilla - Fahreza&location=Seskoad Grand Ballroom&pli=1&uid=1521339627addtocalendar&sf=true&output=xml" 
              className="inline-block bg-[#004938] text-white px-6 py-3 rounded-md font-montserrat text-sm tracking-wider hover:bg-[#004938]/90 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              SIMPAN TANGGAL
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#004938] text-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="animatedParent" data-sequence="500">
            <img src="/images/Annahl72.png" alt="Quran Verse" className="w-full max-w-2xl mx-auto mb-8 animated growIn slower" data-id="1" />
            <p className="font-montserrat text-sm tracking-wide text-center max-w-3xl mx-auto animated growIn slower" data-id="2">
              Allah menjadikan bagimu pasangan (suami atau istri) dari jenis kamu sendiri, menjadikan bagimu dari pasanganmu anak-anak dan cucu-cucu, serta menganugerahi kamu rezeki yang baik-baik. Mengapa terhadap yang batil mereka beriman, sedangkan terhadap nikmat Allah mereka ingkar?
              <br /><br />QS An-Nahl : 72
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
