'use client';

import { useEffect, useRef } from 'react';
import { PiArrowUpRightBold } from 'react-icons/pi';
import gsap from 'gsap';

const FeatureBox = () => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const parent = parentRef.current;
    const arrow = arrowRef.current;

    if (!parent || !arrow) return;

    let tl = gsap.timeline({ paused: true });

    // arrow bounce
    tl.to(arrow, {
      opacity: 1,
      top: '1rem',
      right: '1rem',
      duration: 0.8,
      ease: 'bounce.out',
    });

    // border-top + border-right after delay
    tl.to(
      parent,
      {
        borderTopColor: '#00e691',
        borderLeftColor: '#00cc81',
        borderRightColor: '#009961', // dimmed color
        duration: 0,
      },
      '+=0.3'
    );

    const handleMouseEnter = () => {
      // initial border: handled by Tailwind
      tl.play();
    };

    const handleMouseLeave = () => {
      tl.pause(0); // reset to initial state
      parent.style.borderRightColor = ''; // remove inline style so Tailwind works again
    };

    parent.addEventListener('mouseenter', handleMouseEnter);
    parent.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      parent.removeEventListener('mouseenter', handleMouseEnter);
      parent.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={parentRef}
      className='relative bg-primary w-50 h-42 lg:w-70 lg:h-55 xl:w-90 xl:h-75 rounded-2xl p-6 cursor-pointer overflow-hidden group hover:border-1 border-[#00BB77]'
    >
      <p className='absolute left-8 bottom-4 lg:bottom-6 xl:bottom-8 text-lg lg:text-xl xl:text-2xl font-medium'>
        Feature <br /> Name
      </p>

      <div ref={arrowRef} className='absolute top-28 right-28 opacity-0'>
        <PiArrowUpRightBold className='text-brand text-4xl lg:text-5xl xl:text-6xl' />
      </div>
    </div>
  );
};

export default FeatureBox;
