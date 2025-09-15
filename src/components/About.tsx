'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import paperIcon from '../assets/paper-icon.png';
import vector from '../assets/Vector.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textTopRef = useRef<HTMLHeadingElement>(null);
  const textBottomRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!aboutRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isTabOrDesktop: '(min-width: 451px)',
        isMobile: '(max-width: 450px)',
      },
      (context) => {
        let { conditions } = context;

        if (conditions?.isTabOrDesktop) {
          ScrollTrigger.create({
            trigger: aboutRef.current,
            start: 'top 0px',
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
          });
        }
      }
    );

    return () => mm.revert();
  }, []);


   useEffect(() => {
     if (!aboutRef.current) return;

     // Initial state: invisible & offset
     gsap.set([imageRef.current, textTopRef.current, textBottomRef.current], {
       opacity: 0,
     });
     gsap.set(imageRef.current, { y: 50 });
     gsap.set(textTopRef.current, { x: 80 });
     gsap.set(textBottomRef.current, { x: -80 });

     const tl = gsap.timeline({
       scrollTrigger: {
         trigger: aboutRef.current,
         start: 'top center',
         toggleActions: 'play none none none',
       },
       defaults: { duration: 1.1, ease: 'power3.out' },
     });

     tl.to(imageRef.current, { y: 0, opacity: 1 })
       .to(textTopRef.current, { x: 0, opacity: 1 }, '-=1')
       .to(textBottomRef.current, { x: 0, opacity: 1 }, '-=1');

     return () => {
       tl.kill();
     };
   }, []);


  return (
    <section
      ref={aboutRef}
      id='about'
      className=' min-h-[80vh] flex-col-center bg-white/10 -z-10'
    >
      <div className='flex gap-4 z-20'>
        <h1 ref={textTopRef} className='text-3xl'>
          An extraordinary note for{' '}
          <span className='text-brand'>makers, creators..</span>
        </h1>
        <Image
          ref={imageRef}
          src={paperIcon}
          alt='hero'
          width={100}
          height={40}
          className='z-10 opacity-0'
        />
        <p
          ref={textBottomRef}
        >
          Creators around the planet use this app for creating{' '}
          <span className='text-brand'>magic</span>
        </p>
      </div>
    </section>
  );
};
export default About;
