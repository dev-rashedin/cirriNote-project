import { socials } from "@/data"
import { FooterLogo } from "./ui/logo"
import Link from "next/link"

const Footer = () => {
  return (
    <main id="footer" className='h-80 mt-20 md:h-54 border-t border-gray-800 pl-8 md:pl-0'>
      <footer className=' boundary flex flex-col gap-10 pt-18'>
        {/* logo and socials */}
        <section className='flex flex-col md:flex-row items-start md:justify-between md:items-center gap-8 md:gap-0 '>
          <FooterLogo />

          <div className='flex-center gap-6'>
            {socials.map((social) => (
              <Link href={social.href} key={social.name} target='_blank'>
                <social.icon className={social.className} />
              </Link>
            ))}
          </div>
        </section>
        {/* copyright */}
        <section className='flex flex-col md:flex-row items-start md:justify-between md:items-center gap-2 md:gap-0 text-sm md:text-xs text-gray-500 tracking-tighter'>
          <p>&copy; CirriNote 2025</p>
          <p>Crafted with passion by CreoWis</p>
        </section>
      </footer>
    </main>
  );
}
export default Footer