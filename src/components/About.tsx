"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    const aboutRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!aboutRef.current) return;

      gsap.to(aboutRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 28px', // start pinning when top of about hits 28px from top
          end: () => `bottom top`, // unpin when bottom of section hits top of viewport
          pin: true,
          pinSpacing: false, // if true, keeps space, false lets next sections scroll over
        },
      });
    }, []);

  return (
    <section ref={aboutRef}
      id='about'
      className='relative min-h-[80vh] flex-center bg-white/10 md:sticky md:top-20 -z-10'
    >
      About
    </section>
  );
};
export default About;
