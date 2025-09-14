import { socials } from "@/data"
import Logo from "./ui/logo"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="h-40 boundary">
      {/* logo and socials */}
      <section className="flex-between">
        <Logo />
        
        <div className="flex-center gap-4">
     {socials.map((social) => (
       <Link href={social.href} key={social.name} target="_blank">
         <social.icon className={social.className} />
       </Link>
     ))}
        </div>
      </section>
    </footer>
  )
}
export default Footer