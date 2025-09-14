import Image from "next/image";
import Link from "next/link";


const Logo = () => {
  return (
    <Link href='#home' className='flex-center gap-1 cursor-pointer'>
      <Image src='/favicon.ico' width={35} height={35} alt='logo' />
      <Image src='/Wordmark.png' width={100} height={100} alt='logo' />
    </Link>
  );
}
export default Logo