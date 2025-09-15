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

    // Arrow bounce animation
    tl.to(arrow, {
      opacity: 1,
      top: '1rem', // matches top-4
      right: '1rem', // matches right-4
      duration: 0.6,
      ease: 'bounce.out',
    });

    // Border shift with 300ms delay
    tl.to(
      parent,
      {
        borderRightWidth: '2px',
        borderTopWidth: '2px',
        duration: 0.3,
        ease: 'power2.out',
      },
      '+=0.3'
    );

    // Hover triggers
    const play = () => tl.play();
    const reverse = () => tl.reverse();

    parent.addEventListener('mouseenter', play);
    parent.addEventListener('mouseleave', reverse);

    return () => {
      parent.removeEventListener('mouseenter', play);
      parent.removeEventListener('mouseleave', reverse);
    };
  }, []);

  return (
    <div
      ref={parentRef}
      className='relative bg-primary w-50 h-42 lg:w-70 lg:h-55 xl:w-90 xl:h-75 
                 rounded-2xl p-6 cursor-pointer overflow-hidden group 
                 border border-l-2 border-b-2 border-[#00BB77]'
    >
      <p className='absolute bottom-4 text-lg lg:text-xl xl:text-2xl font-medium'>
        Feature <br /> Name
      </p>

      <div ref={arrowRef} className='absolute top-28 right-28 opacity-0'>
        <PiArrowUpRightBold className='text-brand text-4xl lg:text-5xl xl:text-6xl' />
      </div>
    </div>
  );
};

export default FeatureBox;
