import React, { useState } from 'react';

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'BERANDA', href: '#home' },
    { label: 'MEMPELAI', href: '#couple' },
    { label: 'DETAIL ACARA', href: '#events' },
    { label: 'KISAH KAMI', href: '#love-story' },
    { label: 'GALERI', href: '#gallery' },
    { label: 'R.S.V.P', href: '#rsvp' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="menu fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-[url('/images/bg-01.png')] opacity-20"></div>
      <div className="menu_content container mx-auto px-4 flex justify-between items-center py-4 relative z-10">
        <a href="#home" className="logo_menu font-montserrat text-white text-lg no-underline" data-scroll>
          The Wedding of Adilla and Fahreza
        </a>
        <nav className={`nav-collapse ${isMenuOpen ? 'open' : ''}`}>
          <ul className="flex space-x-6">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="font-montserrat text-sm text-white hover:text-white/70 transition-colors no-underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </div>
  );
};

export default NavigationMenu;
