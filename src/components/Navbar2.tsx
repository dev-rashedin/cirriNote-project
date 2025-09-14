'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Ribbon from './Ribbon';
import NavLinks from './ui/links';
import Logo from './ui/logo';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const ribbonRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const ribbonEl = ribbonRef.current;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (!ribbonEl) return;

      if (scrollY > 0) {
        setHasScrolled(true);
        gsap.to(ribbonEl, { y: -50, duration: 0.4, ease: 'power3.out' });
      } else if (scrollY === 0 && hasScrolled) {
        gsap.to(ribbonEl, { y: 0, duration: 0.5, ease: 'power3.out' });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      if (ribbonRef.current) {
        gsap.to(ribbonRef.current, { y: 0, duration: 0.5, ease: 'power3.out' });
      }
    }, 100);
  };

  return (
    <main className='sticky -top-5 z-50 h-24 bg-black/50 shadow-3xl'>
      {/* Ribbon absolutely positioned to avoid layout shift */}
      <div ref={ribbonRef} className='absolute top-0 left-0 right-0 z-20'>
        <Ribbon />
      </div>

      {/* Sticky navbar content */}
      <nav className='boundary h-16 pt-12 flex-between z-30 '>
        <div onClick={handleLogoClick} className='cursor-pointer'>
          <Logo />
        </div>
        <NavLinks />
        <button>Try Now</button>
      </nav>
    </main>
  );
};

export default Navbar;
