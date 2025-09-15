'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FiArrowUpRight } from 'react-icons/fi';
import arrowIcon from '../../assets/arrow.png';
import Image from 'next/image';

const FeatureBox = () => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const parent = parentRef.current;
    const arrow = arrowRef.current;
    
    if (!parent || !arrow) return;

    // Timeline for delayed border color
    const borderTl = gsap.timeline({ paused: true });
    borderTl.to(
      parent,
      {
        borderTopColor: '#00e691',
        borderLeftColor: '#00e691',
        borderRightColor: '#009961', // dimmed color
        duration: 0,
      },
      '+=0.8'
    );

    // Arrow animation timeline
    // const arrowTl = gsap.timeline({ paused: true });
    // arrowTl.to(arrow, {
    //   opacity: 1,
    //   top: '1rem',
    //   right: '1rem',
    //   duration: 0.7,
    //   ease: 'elastic.out(1, 0.7)',
    // });

    const handleMouseEnter = () => {
      borderTl.restart(); // delayed border effect
      gsap.to(arrow, {
        opacity: 1,
        top: '1rem',
        right: '1rem',
        duration: 0.6,
        ease: 'elastic.out(1, 0.7)',
        overwrite: 'auto', // cancels any running tween
      }); // smooth single bounce
    };

  const handleMouseLeave = () => {
    // Animate arrow back to original position and hide
    //  gsap.killTweensOf(arrow);

     // Animate back quickly
     gsap.to(arrow, {
       opacity: 0,
       top: '5rem', // original top-28
       right: '5rem', // original right-28
       duration: 0.2, // faster return
       ease: 'power2.out',
       overwrite: 'auto', // ensures it interrupts the forward animation
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
      className='relative bg-primary w-50 h-42 lg:w-70 lg:h-55 xl:w-90 xl:h-75 rounded-2xl p-6 cursor-pointer overflow-hidden group hover:border-[1.9px] border-[#00BB77] hover:bg-black'
    >
      <p className='absolute left-8 bottom-4 lg:bottom-6 xl:bottom-8 text-lg lg:text-xl xl:text-2xl font-medium group-hover:translate-x-2 transition-transform duration-300 ease-in-out'>
        Feature <br /> Name
      </p>

      <div ref={arrowRef} className='absolute top-40 right-40 opacity-0'>
        <Image src={arrowIcon} alt='arrow' width={75} height={75} />
        {/* <FiArrowUpRight className='text-brand text-5xl lg:text-6xl xl:text-7xl' /> */}
      </div>
    </div>
  );
};

export default FeatureBox;
