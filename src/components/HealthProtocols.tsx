import React from 'react';

const HealthProtocols = () => {
  return (
    <section id="health-protocols" className="py-20 bg-[#004938]/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-cormorant text-center text-[#004938] mb-16">Health Protocols</h2>
        <ul className="space-y-4 max-w-md mx-auto">
          <li className="flex items-center space-x-2">
            <span className="text-[#004938]">•</span>
            <span className="font-montserrat text-gray-600">Wear a mask at all times</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-[#004938]">•</span>
            <span className="font-montserrat text-gray-600">Maintain social distancing</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-[#004938]">•</span>
            <span className="font-montserrat text-gray-600">Use hand sanitizer frequently</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-[#004938]">•</span>
            <span className="font-montserrat text-gray-600">If you feel unwell, please stay home</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HealthProtocols;
