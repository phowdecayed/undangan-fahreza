import React, { useEffect } from 'react';
import './LoveStory.css'; // Make sure to create this CSS file

const LoveStory = () => {
  const timeline = [
    {
      title: 'Awal Bertemu',
      content: 'Pada taun 2021 akhir Adilla dan Fahhreza bertemu disebuah kantor di Kota Bandung dimana waktu saat itu Adilla sedang menjalankan tugas magang dan Fahreza sedang ditugas di kantor Adilla magang. Meski hanya singkat, Adilla dan Fahreza merasa saling tertarik dan saling ingin mengenal lebih lanjut satu sama lain.'
    },
    {
      title: 'Membangun Hubungan',
      content: 'Sejak itu, Adilla dan Fahreza mulai semakin dekat sampai pada taun 2022 Adilla dan Fahreza berkomitmen untuk membangun hubungan yang sangat erat. Dan di taun 2023 Adilla dan Fahreza memutuskan bertunangan untuk mengikat satu sama lain nya.'
    },
    {
      title: 'Melangkah ke Pernikahan',
      content: 'Di tahun 2024 ini juga Adilla dan Fahreza memutuskan untuk melanjutkan langkah terbesar dalam hidup kita yaitu melaksanakan janji suci dalam ikatan pernikahan. Semoga cinta Adilla dan Fahreza terus berkembang dan saling menjaga satu sama lain nya, perjalanan yang akan Adilla dan Fahreza tempuh berdua nanti nya seumur hidup dengan saling cinta dan dukungan satu sama lainnya.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.timeline-item').forEach(item => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="love-story" className="py-20 bg-[#004938]/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-cormorant text-center text-[#004938] mb-16">Our Love Story</h2>
        <div className="timeline-container">
          {timeline.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-img">
                  <img src="https://grinvitation.com/master/master/template/grinvi01 (Indonesia - Muslim)/images/cycle-love3.png" alt="Checkpoint" />
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-body">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='story_end flex justify-center mt-8'>
          <div className='bg-[#004938] rounded-full p-4'>
            <i className='fa fa-heart text-white text-2xl'></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
