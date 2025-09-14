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
    <main className='absolute top-0 p-1 w-full bg-[#166E4E]'>
      <Marquee direction='right' speed={30} gradient={false}>
        {repeatedTexts.map((text, index) => (
          <span
            key={index}
            className='text-white text-xs px-4 tracking-wide'
          >
            {text}
          </span>
        ))}
      </Marquee>
    </main>
  );
};

export default Ribbon;
