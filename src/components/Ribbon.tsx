import Marquee from 'react-fast-marquee';

const ribbonTexts = [
  'Get one year FREE',
  '✦',
  'Only for limited users',
  '✦',
  'Join the launch event',
  '✦',
];

const Ribbon = () => {
  // Repeat array 3 times so there's no empty space
  const repeatedTexts = Array(3).fill(ribbonTexts).flat();

  return (
    <main className='w-full bg-brand py-1'>
      <Marquee direction='left' speed={80} gradient={false}>
        {repeatedTexts.map((text, index) => (
          <p
            key={index}
            className='text-white text-xs px-4 tracking-wide'
          >
            {text}
          </p>
        ))}
      </Marquee>
    </main>
  );
};

export default Ribbon;
