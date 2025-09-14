import NavLinks from "./ui/links"
import Logo from "./ui/logo"


const Navbar = () => {
  return (
    <nav className="boundary h-20 flex-between sticky top-0">
      {/* logo */}
     <Logo/>

      {/* links */}

      <NavLinks />
      
      <button>Try Now</button>
    </nav>
  )
}
export default Navbar