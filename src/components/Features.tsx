import { ImArrowUpRight2 } from 'react-icons/im';
import { FiArrowUpRight } from 'react-icons/fi';
import { PiArrowUpRightBold } from 'react-icons/pi';

const FeatureBox = () => (
      <div className='relative bg-primary w-50 h-42 lg:w-70 lg:h-55 xl:w-90 xl:h-75  rounded-2xl p-6 cursor-pointer overflow-hidden group hover-border'>
      <p className='absolute bottom-4 text-lg lg:text-xl xl:text-2xl font-medium'>
        Feature <br /> Name
      </p>
      <FiArrowUpRight className='feature-arrow absolute top-4 right-4 text-brand w-6 h-6' />
    </div>
)

export default function Features() {
 

  return (
    <section
      id='features'
      className=' min-h-screen z-10 bg-black py-16 px-6 md:px-12'
    >
      <div className='boundary'>
        <h2 className='text-4xl font-bold mb-4'>Key Features</h2>
        <p className='text-gray-400 mb-12'>
          We&apos;re proud to announce the features that empower creatives every
          day.
        </p>

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
