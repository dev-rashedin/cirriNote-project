import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ place = 'footer' }) => {
  return (
    <div className={`flex-center gap-1 ${place === 'nav' ? 'cursor-pointer' : ''}`}>
      <Image src='/favicon.ico' width={35} height={35} alt='logo' />
      <h3 className='text-2xl mt-1'>CirriNote</h3>
    </div>
  );
};

export default Logo;
