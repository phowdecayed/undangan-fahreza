import React from 'react';

const GiftRegistry = () => {
  return (
    <section id="gift-registry" className="py-20 bg-[#004938]/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-cormorant text-center text-[#004938] mb-16">Gift Registry</h2>
        <div className="text-center space-y-4">
          <p className="font-montserrat text-gray-600">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have created a registry for your convenience.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-2 bg-[#004938] text-white rounded hover:bg-[#004938]/90 transition-colors"
          >
            View Registry
          </a>
        </div>
      </div>
    </section>
  );
};

export default GiftRegistry;
