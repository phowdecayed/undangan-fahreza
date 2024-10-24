import React, { useState } from 'react';

const GuestBook = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, message });
    // Reset form fields
    setName('');
    setMessage('');
  };

  return (
    <section id="guest-book" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-cormorant text-center text-[#004938] mb-16">Guest Book</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full p-2 border border-[#004938] rounded"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className="w-full p-2 border border-[#004938] rounded h-32"
            required
          ></textarea>
          <button type="submit" className="w-full p-2 bg-[#004938] text-white rounded hover:bg-[#004938]/90">
            Leave a Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default GuestBook;
