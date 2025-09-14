import { socials } from "@/data"
import Logo from "./ui/logo"
import Link from "next/link"

const Footer = () => {
  return (
    <main className='h-54  border-t border-gray-800'>
      <footer className=' boundary flex flex-col gap-10 pt-18'>
        {/* logo and socials */}
        <section className='flex-between'>
          <Logo />

          <div className='flex-center gap-4 lg:gap-6'>
            {socials.map((social) => (
              <Link href={social.href} key={social.name} target='_blank'>
                <social.icon className={social.className} />
              </Link>
            ))}
          </div>
        </section>
        {/* copyright */}
        <section className='flex-between text-xs text-gray-500 tracking-tighter'>
          <p>&copy; CirriNote 2025</p>
          <p>Crafted with passion by CreoWis</p>
        </section>
      </footer>
    </main>
  );
}
export default Footer