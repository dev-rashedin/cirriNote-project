'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from '../assets/hero-image.png';
import vector from '../assets/Vector.png';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textLeftRef = useRef<HTMLHeadingElement>(null);
  const textRightRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // Initial state: invisible & offset
    gsap.set([imageRef.current, textLeftRef.current, textRightRef.current], {
      opacity: 0,
    });
    gsap.set(imageRef.current, { y: 50 });
    gsap.set(textLeftRef.current, { x: 80 });
    gsap.set(textRightRef.current, { x: -80 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top center',
        toggleActions: 'play none none none',
      },
      defaults: { duration: 1.1, ease: 'power3.out' },
    });

    tl.to(imageRef.current, { y: 0, opacity: 1 })
      .to(textLeftRef.current, { x: 0, opacity: 1 }, '-=1')
      .to(textRightRef.current, { x: 0, opacity: 1 }, '-=1');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      className='h-[calc(100vh-80px)]'
      style={{ backgroundImage: `url(${vector.src})`, backgroundSize: 'cover' }}
    >
      {/* medium and large screen hero content with animation */}
      <div
        ref={heroRef}
        className='relative max-w-6xl mx-auto h-full inset-0 hidden md:flex flex-col items-center justify-center'
      >
        <Image
          ref={imageRef}
          src={heroImage}
          alt='hero'
          width={1000}
          height={400}
          className=' opacity-0'
        />
        <div className='flex-center gap-4 h1'>
          <h1
            ref={textLeftRef}
            className='absolute top-60 left-10 lg:top-65 lg:left-10 xl:top-1/3 xl:left-0   transform -translate-y-1/3 opacity-0'
          >
            Note Taking
          </h1>
          <h1
            ref={textRightRef}
            className='text-brand absolute top-95 right-12 lg:right-20 xl:top-95  xl:right-15 transform -translate-y-1/3 opacity-0'
          >
            Redefined
          </h1>
        </div>
      </div>

      {/* small screen hero content without animation */}
      <div className='md:hidden relative w-full h-screen flex flex-col  justify-start overflow-hidden'>
        <div className='pt-24 pl-16 text-5xl tracking-tight space-y-2'>
          <h1>Note Taking</h1>
          <h1 className='text-brand'>Redefined</h1>
        </div>

        <div className='absolute bottom-28 -left-20 w-[800px] h-[450px]'>
          <Image
            src={heroImage}
            alt='hero'
            fill
            sizes='(max-width: 768px) 100vw, 800px'
            className='object-cover object-right-bottom'
            priority
          />
        </div>
      </div>
    </section>
  );
};


export default Hero;

    