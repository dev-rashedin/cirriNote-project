import { RiLinkedinFill } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


export const links = [
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'FAQs', href: '#footer' },
  { name: 'Contact', href: '#footer' },
];

export const socials = [
  {
    name: 'Linkedin',
    icon: RiLinkedinFill,
    className: 'text-4xl md:text-2xl',
    href: 'https://www.linkedin.com/company/creowis',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    className: 'text-3xl md:text-xl',
    href: 'https://www.instagram.com/creowis/',
  },
  {
    name: 'Twitter',
    icon: FaXTwitter,
    className: 'text-3xl md:text-xl',
    href: 'https://x.com/creowistech',
  },
];
