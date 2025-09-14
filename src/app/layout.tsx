import type { Metadata } from 'next';
import React, { JSX } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'CirriNote – Note Taking Redefined',
  description:
    'CirriNote is a modern note-taking app designed to redefine productivity with a clean interface, fast performance, and seamless organization of your ideas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${inter.className} antialiased [scrollbar-gutter:stable]`}
    >
      <Navbar/>
      <body className='boundary'>
        {children}
      </body>
      <Footer />
    </html>
  );
}
