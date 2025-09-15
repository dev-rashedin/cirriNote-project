'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ImArrowUpRight2 } from 'react-icons/im';
import { FiArrowUpRight } from 'react-icons/fi';
import { PiArrowUpRightBold } from 'react-icons/pi';

const features = [
  { name: 'Feature One' },
  { name: 'Feature Two' },
  { name: 'Feature Three' },
  { name: 'Feature Four' },
  { name: 'Feature Five' },
  { name: 'Feature Six' },
];

export default function Features() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const text = card.querySelector('.feature-text');
      const arrow = card.querySelector('.feature-arrow');

      const tl = gsap.timeline({ paused: true });
      tl.to(text, { x: 5, y: -5, duration: 0.3, ease: 'power3.out' }, 0);
      tl.to(
        arrow,
        { y: -8, duration: 0.2, ease: 'power2.out', yoyo: true, repeat: 1 },
        0
      );

      card.addEventListener('mouseenter', () => tl.play(0));
      card.addEventListener('mouseleave', () => {
        gsap.to(text, { x: 0, y: 0, duration: 0.3, ease: 'power3.out' });
        gsap.to(arrow, { y: 0, duration: 0.3, ease: 'power3.out' });
      });
    });
  }, []);

  return (
    <section
      id='features'
      className='min-h-screen flex-center z-10 bg-black py-16 px-6 md:px-12'
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold mb-4'>Key Features</h2>
        <p className='text-gray-400 mb-12'>
          We&apos;re proud to announce the features that empower creatives every
          day.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className='relative bg-primary w-78 h-68 border border-neutral-800 rounded-2xl p-6 cursor-pointer overflow-hidden group hover:border-[#00ffea] transition-all duration-300'
            >
              <span className='absolute bottom-4 text-2xl font-medium'>
              Feature <br /> Name
              </span>
              <FiArrowUpRight className='feature-arrow absolute top-4 right-4 text-brand w-6 h-6' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// const Features = () => {
//   return (
//     <section
//       id='features'
//       className='min-h-screen flex-center z-10 bg-black'
//     ></section>
//   );
// };
// export default Features;
