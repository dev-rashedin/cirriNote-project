'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import heroImage from '../assets/hero-image.png';
import Image from 'next/image';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textLeftRef = useRef<HTMLHeadingElement>(null);
  const textRightRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top center', // animation starts when hero top hits middle of viewport
            toggleActions: 'play none none none', // play once
          },
          defaults: { duration: 1, ease: 'power3.out' },
        });

    tl.from(imageRef.current, {
      y: 80, // pop up from below
      opacity: 0,
    })
      .from(
        textLeftRef.current,
        {
          x: 50, // shift left
          opacity: 0,
        },
        '-=0.9' // overlap with image animation
      )
      .from(
        textRightRef.current,
        {
          x: -50, // shift right
          opacity: 0,
        },
        '-=1.1' // overlap more smoothly
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className='h-screen relative'
      style={{ backgroundImage: "url('/Vector.png')", backgroundSize: 'cover' }}
    >
      <Image
        ref={imageRef}
        src={heroImage}
        alt='hero'
        width={1260}
        height={360}
        className='absolute  left-1/2 transform -translate-x-1/2'
      />
      <div className=' flex gap-4 text-6xl'>
        <h1
          ref={textLeftRef}
          className='absolute top-63 left-1/3 transform -translate-x-40 -translate-y-1/2'
        >
          Note Taking
        </h1>
        <h1
          ref={textRightRef}
          className='absolute top-90 right-50 transform -translate-x-1/2 -translate-y-1/2 text-brand'
        >
          Redefined
        </h1>
      </div>
    </section>
  );
};

export default Hero;

// const Hero = () => {
//   return <section id='hero' className='min-h-screen flex-center' style={{backgroundImage: "url('/Vector.png')", backgroundSize: "cover"}}>Hero</section>;
// }
// export default Hero
