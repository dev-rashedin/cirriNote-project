'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import arrowIcon from '../../assets/arrow.png';
import Image from 'next/image';

const FeatureBox = () => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const parent = parentRef.current;
    const arrow = arrowRef.current;
    
    if (!parent || !arrow) return;

    const borderTl = gsap.timeline({ paused: true });
    borderTl.to(
      parent,
      {
        borderTopColor: '#00e691',
        borderLeftColor: '#00e691',
        borderRightColor: '#009961',
        duration: 0,
      },
      '+=0.8'
    );

    const handleMouseEnter = () => {
      borderTl.restart(); 
      gsap.to(arrow, {
        opacity: 1,
        top: '1rem',
        right: '1rem',
        duration: 0.6,
        ease: 'elastic.out(1, 0.7)',
        overwrite: 'auto',
      });
    };

  const handleMouseLeave = () => {
     gsap.to(arrow, {
       opacity: 0,
       top: '5rem', 
       right: '5rem', 
       duration: 0.2, 
       ease: 'power2.out',
       overwrite: 'auto',
     });

    // Reset border colors
    borderTl.pause(0);
    parent.style.borderRightColor = '';
    parent.style.borderTopColor = '';
    parent.style.borderLeftColor = '';
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
      className='relative bg-primary w-65 h-65 md:w-50  md:h-42 lg:w-70 lg:h-55 xl:w-90 xl:h-75 rounded-2xl p-6 cursor-pointer overflow-hidden group hover:border-[1.9px] border-[#00BB77] hover:bg-black'
    >
      <p className='absolute left-8 bottom-8 text-2xl font-medium group-hover:translate-x-2 transition-transform duration-300 ease-in-out'>
        Feature <br /> Name
      </p>

      <div ref={arrowRef} className='absolute top-40 right-40 opacity-0'>
        <Image src={arrowIcon} alt='arrow' width={75} height={75} />
      </div>
    </div>
  );
};

export default FeatureBox;
