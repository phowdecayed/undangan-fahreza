import React, { useState } from 'react';
import { Music2, VolumeX } from 'lucide-react';
import Cover from './components/Cover';
import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';
import Countdown from './components/Countdown';
import Couple from './components/Couple';
import Events from './components/Events';
import Gallery from './components/Gallery';
import LoveStory from './components/LoveStory';
import RsvpForm from './components/RsvpForm';
import GiftRegistry from './components/GiftRegistry';
import LivestreamInfo from './components/LivestreamInfo';
import HealthProtocols from './components/HealthProtocols';
import GuestBook from './components/GuestBook';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handleOpenCover = () => {
    setIsOpen(true);
    setIsMuted(false);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Cover isOpen={isOpen} onOpen={handleOpenCover} />

      <main className={`transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        <NavigationMenu />
        <Header />
        <Countdown />
        <Couple />
        <Events />
        <LoveStory />
        <Gallery />
        <RsvpForm />
        <Footer />
      </main>

      <button
        onClick={() => {
          setIsMuted(!isMuted);
          if (audioRef.current) {
            if (isMuted) {
              audioRef.current.play();
            } else {
              audioRef.current.pause();
            }
          }
        }}
        className="fixed bottom-6 right-6 p-3 bg-[#004938] rounded-full hover:bg-[#004938]/90 transition-colors z-50"
      >
        {isMuted ? 
          <VolumeX className="w-6 h-6 text-white" /> : 
          <Music2 className="w-6 h-6 text-white" />
        }
      </button>

      <audio
        ref={audioRef}
        src="https://grinvitation.com/00.asset/backsound/Request Fahreza.mp3"
        loop
        muted={isMuted}
      />
    </div>
  );
}

export default App;
