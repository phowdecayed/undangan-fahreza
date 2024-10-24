import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const calculateTimeLeft = () => {
    const weddingDate = new Date('2024-11-09T11:00:00');
    const now = new Date();
    const difference = weddingDate.getTime() - now.getTime();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16 bg-[#004938]/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-4 text-center">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <div className="w-16 h-16 mx-auto bg-[#004938] rounded-full flex items-center justify-center">
                <div className="text-2xl font-bold text-white">{value}</div>
              </div>
              <div className="text-sm uppercase text-[#004938] font-montserrat tracking-wider">{key}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
