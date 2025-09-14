'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!aboutRef.current) return;

    // use gsap.matchMedia (replaces ScrollTrigger.matchMedia)
    const mm = gsap.matchMedia();

    mm.add(
      {
        // desktop only (min-width: 768px, Tailwind's md:)
        isDesktop: '(min-width: 768px)',
        // mobile only
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        let { conditions } = context;

        if (conditions?.isDesktop) {
          ScrollTrigger.create({
            trigger: aboutRef.current,
            start: 'top 0px', // offset for navbar
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
          });
        }

        // if mobile → do nothing, just scroll naturally
      }
    );

    return () => mm.revert(); // cleanup when component unmounts
  }, []);

  return (
    <section
      ref={aboutRef}
      id='about'
      className='relative min-h-[80vh] flex-center bg-white/10 -z-10'
    >
      About
    </section>
  );
};
export default About;
