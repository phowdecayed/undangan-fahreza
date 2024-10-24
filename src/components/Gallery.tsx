import React from 'react';

export default function Gallery() {
  const images = [
    'https://grinvitation.com/00.asset/images/fahrezaadillawedding/galery_560_1_11-43-04.jpg',
    'https://grinvitation.com/00.asset/images/fahrezaadillawedding/galery_560_2_11-43-04.jpg',
    'https://grinvitation.com/00.asset/images/fahrezaadillawedding/galery_560_3_11-43-04.jpg',
    'https://grinvitation.com/00.asset/images/fahrezaadillawedding/galery_560_4_11-43-04.jpg',
    'https://grinvitation.com/00.asset/images/fahrezaadillawedding/galery_560_5_11-43-04.jpg',
    'https://grinvitation.com/00.asset/images/fahrezaadillawedding/galery_560_6_11-43-04.jpg',
    'https://grinvitation.com/00.asset/images/fahrezaadillawedding/galery_560_7_11-43-04.jpg',
    'https://grinvitation.com/00.asset/images/fahrezaadillawedding/galery_560_8_11-43-04.jpg',
    'https://grinvitation.com/00.asset/images/fahrezaadillawedding/galery_560_9_11-43-04.jpg',
    'https://grinvitation.com/00.asset/images/fahrezaadillawedding/galery_560_10_11-43-04.jpg',
    'https://grinvitation.com/00.asset/images/fahrezaadillawedding/galery_560_11_11-43-04.jpg',
    'https://grinvitation.com/00.asset/images/fahrezaadillawedding/galery_560_12_11-43-04.jpg',
    'https://grinvitation.com/00.asset/images/fahrezaadillawedding/galery_560_13_11-43-04.jpg',
    'https://grinvitation.com/00.asset/images/fahrezaadillawedding/galery_560_14_11-43-04.jpg',
    'https://grinvitation.com/00.asset/images/fahrezaadillawedding/galery_560_15_11-43-04.jpg',
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="space1"></div>
        <div className="content" id="photo">
          <div className="animatedParent" data-sequence="500">
            <div className="happy_couple">
              <p className="animated growIn slower font-cormorant text-4xl mb-4" id="font_digital_2" data-id="1">
                Galeri
              </p>
            </div>
            <div className="container">
              <div className="animated fadeInUp" data-id="2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {images.map((src, index) => (
                    <div key={index} className="mb-5">
                      <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
                    </div>
                  ))}
                </div>
                <div className="clear"></div>
                <div className="videoWrapper w-full mt-8">
                  <iframe 
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/F1d-6ZXvnl0?wmode=opaque" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="space1"></div>
      </div>
    </section>
  );
}
