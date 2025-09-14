import { links } from '@/data';
import Link from 'next/link';

const NavLinks = () => {
  return (
    <ul className='flex-center gap-6 lg:gap-9 xl:gap-12 text-sm'>
      {links.map((link) => (
        <li key={link.name}>
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};
export default NavLinks;
