import Image from "next/image"
import NavLinks from "./ui/links"


const Navbar = () => {
  return (
    <nav>
      {/* logo */}
      <section className="flex-center gap-4">
        <Image src="/favicon.ico" width={20} height={20} alt="logo" />
        <Image src="/Wordmark.png" width={100} height={100} alt="logo" />
      </section>

      {/* links */}

      <NavLinks/>
    </nav>
  )
}
export default Navbar