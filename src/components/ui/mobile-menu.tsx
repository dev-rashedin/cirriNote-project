"use client";

import { useState } from 'react';
import { links } from '../../data';
// import AnimatedBorder from './animated-border';

import { IoMdMenu } from 'react-icons/io';
import { RxCross1 } from 'react-icons/rx';
import Link from 'next/link';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative md:hidden'>
      {/* Hamburger button */}
      <button
        className='flex items-center justify-center p-2'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <RxCross1 size={27} className='text-gray-400' />
        ) : (
          <IoMdMenu size={27} className='text-gray-400' />
        )}
      </button>

      {/* Mobile menu panel */}
      <div
        className={`bg-black w-48 rounded-md px-4 py-6 space-y-4 flex flex-col absolute top-12 -right-4
        transform transition-transform duration-300 ease-in-out z-50
        ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <ul className='flex flex-col justify-between items-start pl-8 gap-8 pb-8 text-sm md:hidden'>
          {links.map((link) => (
            <Link href={link.href} className='hover:text-green-600'>
              {link.name}
            </Link>
          ))}
        </ul>

        {/* <ContactDropdown screen='small' /> */}
      </div>
    </div>
  );
};

export default MobileMenu;
