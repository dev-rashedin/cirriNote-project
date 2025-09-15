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


    gsap.set([imageRef.current, textTopRef.current, textBottomRef.current], {
      opacity: 0,
    });
    gsap.set(imageRef.current, { y: -800 });
    gsap.set(textTopRef.current, { x: 80 });
    gsap.set(textBottomRef.current, { x: -80 });

     const tl = gsap.timeline({
       scrollTrigger: {
         trigger: aboutRef.current,
         start: 'top center',
         toggleActions: 'play none none none',
       },
       defaults: { duration: 0.5, delay: 0.1 },
     });
    
    tl.to(imageRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.1,
      delay: 0.3,
      ease: 'bounce.out', 
    })
      .to(
        textTopRef.current,
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '+=0.3'
      )
      .to(
        textBottomRef.current,
        { x: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: 'power3.out' },
        '-=0.6'
      );
    
   
  }, []);

  return (
    <section
      ref={aboutRef}
      id='about'
      className='min-h-screen flex-col-center gap-16 bg-white/10 -z-10'
    >
      <h1 ref={textTopRef} className='text-5xl text-center leading-14'>
        An extraordinary note
        <br />
        for
        <span className='text-brand pl-3'>makers, creators..</span>
      </h1>
      <Image
        ref={imageRef}
        src={paperIcon}
        alt='paper icon'
        width={150}
        height={150}
        className='z-10'
      />
      <p ref={textBottomRef} className='text-center text-[17px] max-w-md lg:max-w-lg opacity-90'>
        Creators around the planet use this app
        <br />
        for creating{' '}
        <span className='text-brand'>magic</span>
      </p>
    </section>
  );
};
export default About;
