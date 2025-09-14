import { links } from "@/data"
import Link from "next/link"



const NavLinks = () => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.name}>
          <Link href={link.href}>{link.name}</Link>
        </li>))}
   </ul>
  )
}
export default NavLinks