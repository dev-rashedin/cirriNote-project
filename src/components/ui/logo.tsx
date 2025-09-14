import Image from 'next/image';


export const Logo = () => {
  return (
    <div
      className={`flex-center gap-1`}
    >
      <Image
        src='/favicon.ico'
        width={28}
        height={28}
        alt='logo'
        className='lg:hidden'
      />
      <Image
        src='/favicon.ico'
        width={35}
        height={35}
        alt='logo'
        className='hidden lg:block'
      />
      <h3 className='text-lg lg:text-2xl mt-1'>CirriNote</h3>
    </div>
  );
};

export default Logo;


export const FooterLogo = () => {
   return (
     <div className={`flex-center gap-1`}>
       <Image
         src='/favicon.ico'
         width={40}
         height={40}
         alt='logo'
         className='md:hidden'
       />
       <Image
         src='/favicon.ico'
         width={35}
         height={35}
         alt='logo'
         className='hidden md:block'
       />
       <h3 className='text-3xl lg:text-2xl mt-1'>CirriNote</h3>
     </div>
   );
}
