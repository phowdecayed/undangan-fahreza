import React from 'react';

const LivestreamInfo = () => {
  return (
    <section id="livestream" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-cormorant text-center text-[#004938] mb-16">Livestream Information</h2>
        <div className="text-center space-y-4">
          <p className="font-montserrat text-gray-600">
            For those unable to attend in person, we will be livestreaming our ceremony.
          </p>
          <p className="font-montserrat text-gray-600">
            The livestream will begin at 11:00 AM WIB on November 09, 2024.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-2 bg-[#004938] text-white rounded hover:bg-[#004938]/90 transition-colors"
          >
            Join Livestream
          </a>
        </div>
      </div>
    </section>
  );
};

export default LivestreamInfo;
