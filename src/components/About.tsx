'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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
