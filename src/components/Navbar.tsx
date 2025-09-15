'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Ribbon from './Ribbon';
import NavLinks from './ui/links';
import Logo from './ui/logo';
import { FiShoppingCart } from "react-icons/fi";
import MobileMenu from './ui/mobile-menu';

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
    <main className='sticky -top-6 z-50 h-26 bg-black/50 shadow-3xl'>
      <div ref={ribbonRef} className='hidden md:block absolute top-0 left-0 right-0 z-20'>
        <Ribbon />
      </div>

      <nav className='boundary h-8 pt-12 md:pt-16 flex-between z-30 '>
        <div onClick={handleLogoClick} className='cursor-pointer'>
          <Logo />
        </div>
        <NavLinks />
        <div className='flex-center gap-2 h-26'>
          <button className='w-28 lg:w-30 rounded-full flex items-center relative p-[2px]  bg-white text-black text-sm group cursor-pointer transition-transform duration-300 ease-in-out'>
            <span className=' bg-black w-7 h-7 lg:w-9 lg:h-9 p-3 rounded-full flex-center transition-all duration-300 ease-in-out group-hover:w-full relative'>
              <FiShoppingCart className='absolute top-2 left-1.5 lg:top-3 lg:left-2.5 text-green-500 font-bold text-xs lg:text-[13px] group-hover:scale-120 transition-all duration-300 ease-in-out' />
            </span>
            <span className='absolute right-3 lg:right-4 lg:top-2.5 group-hover:text-white'>
              Try Now
            </span>
          </button>
          <MobileMenu />
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
