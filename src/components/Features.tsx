import FeatureBox from './ui/feature-box';

export default function Features() {
  return (
    <main
      id='features'
      className=' min-h-screen z-10 bg-black py-40 px-6 md:px-12 overflow-x-hidden'
    >
      <div className='boundary'>
        <h2 className='h1 mb-4'>Key Features</h2>
        <p className='text-white/50 text-lg max-w-sm mb-12'>
          We&apos;re proud to announce the features that empower creatives every
          day.
        </p>

        <section className='hidden md:block'>
          <div className='flex-between'>
            <FeatureBox />
            <FeatureBox />
          </div>

          <div className='flex-center'>
            <FeatureBox />
          </div>
          <div className='flex-between'>
            <h1 className='text-2xl lg:text-4xl max-w-sm lg:max-w-xl leading-10 text-white/50'>
              Creative people worldwide rely on this app to craft ideas <br />{' '}
              into
              <span>digital magic</span>
            </h1>
            <FeatureBox />
          </div>
          <div className='flex gap-4 mt-2'>
            <FeatureBox />
            <FeatureBox />
          </div>
        </section>

        {/* for mobile screens */}
        <section className='md:hidden '>
          <div className='flex gap-2 flex-nowrap scroll-container overflow-x-auto '>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className='flex-shrink-0 scroll-snap-start'>
                <FeatureBox />
              </div>
            ))}
          </div>
          <div className=' mt-8'>
            <h1 className='text-[22px] max-w-sm lg:max-w-xl leading-8 text-white/50'>
              Creative people worldwide <br /> rely on this app to craft ideas{' '}
              <br />
              into
              <span>digital magic</span>
            </h1>
          </div>
        </section>
      </div>
    </main>
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
