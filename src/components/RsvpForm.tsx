import React, { useState } from 'react';

const RsvpForm = () => {
  const [name, setName] = useState('Bidang Perbendaharaan');
  const [name2, setName2] = useState('');
  const [attending, setAttending] = useState('');
  const [person, setPerson] = useState('');
  const [wishes, setWishes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, name2, attending, person, wishes });
  };

  return (
    <section id="rsvp" className="py-10 sm:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-cormorant text-center text-[#004938] mb-2 sm:mb-4">R.S.V.P</h2>
        <h3 className="text-3xl sm:text-4xl font-cormorant italic text-center text-[#004938] mb-6 sm:mb-8">Konfirmasi Kehadiran</h3>
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-base sm:text-lg text-[#004938]">Nama Grup</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 sm:p-4 border-2 border-[#004938] rounded-md text-[#004938] text-base sm:text-lg"
              required
              disabled
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="name2" className="block text-base sm:text-lg text-[#004938]">Nama</label>
            <input
              type="text"
              id="name2"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              className="w-full p-3 sm:p-4 border-2 border-[#004938] rounded-md text-[#004938] text-base sm:text-lg"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="attending" className="block text-base sm:text-lg text-[#004938]">Konfirmasi Kehadiran</label>
            <select
              id="attending"
              value={attending}
              onChange={(e) => setAttending(e.target.value)}
              className="w-full p-3 sm:p-4 border-2 border-[#004938] rounded-md text-[#004938] text-base sm:text-lg"
              required
            >
              <option value=""></option>
              <option value="Attending">Hadir</option>
              <option value="Not Attending">Tidak Hadir</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="person" className="block text-base sm:text-lg text-[#004938]">Jumlah Hadir</label>
            <select
              id="person"
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              className="w-full p-3 sm:p-4 border-2 border-[#004938] rounded-md text-[#004938] text-base sm:text-lg"
              required
            >
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="wishes" className="block text-base sm:text-lg text-[#004938]">Ucapan dan Doa</label>
            <textarea
              id="wishes"
              value={wishes}
              onChange={(e) => setWishes(e.target.value)}
              rows={6}
              className="w-full p-3 sm:p-4 border-2 border-[#004938] rounded-md text-[#004938] text-base sm:text-lg"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full p-3 sm:p-4 bg-[#004938] text-white rounded-md hover:bg-[#004938]/90 text-base sm:text-lg font-semibold">
            KONFIRMASI
          </button>
        </form>
      </div>
    </section>
  );
};

export default RsvpForm;
