'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Ribbon from './Ribbon';
import NavLinks from './ui/links';
import Logo from './ui/logo';

const Navbar = () => {
  const ribbonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ribbonEl = ribbonRef.current;

    // GSAP hide ribbon on scroll down, show on scroll up
    let lastScrollY = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (!ribbonEl) return;

      if (currentScroll > lastScrollY && currentScroll > 100) {
        // scrolling down
        gsap.to(ribbonEl, { y: -50, duration: 0.4, ease: 'power3.out' });
      } else {
        // scrolling up
        gsap.to(ribbonEl, { y: 0, duration: 0.4, ease: 'power3.out' });
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When clicking the logo, scrolls to hero → ribbon delayed reappear
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
      if (ribbonRef.current) {
        gsap.to(ribbonRef.current, { y: -50, duration: 0.3 }); // hide immediately
        gsap.to(ribbonRef.current, {
          y: 0,
          delay: 1, // reappear after smooth scroll
          duration: 0.5,
          ease: 'power3.out',
        });
      }
    }
  };

  return (
    <main className='sticky top-0'>
      {/* Ribbon above navbar */}
      <div ref={ribbonRef} className='relative z-20'>
        <Ribbon />
      </div>

      {/* Navbar stays sticky */}
      <nav className='boundary h-20 flex-between sticky top-0 z-30 shadow'>
        {/* logo */}
        <div onClick={handleLogoClick} className='cursor-pointer'>
          <Logo />
        </div>

        {/* links */}
        <NavLinks />

        <button>Try Now</button>
      </nav>
    </main>
  );
};

export default Navbar;
