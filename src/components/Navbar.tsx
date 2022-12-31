import NavbarLink from '../components/NavbarLink.js';

const Navbar = () => {
  const links = {
    "HOURS & LOCATION": "#hours",
    "MENU": "#menu",
    "ABOUT": "#about",
    "CATERING": "#catering",
  };

  return(
    <nav className="hidden md:flex md:justify-center px-6 py-4">
      <ul>
        {Object.keys(links).map((key,_)=>{return(<NavbarLink text={key} url={links[key]}/>)})}
      </ul>
    </nav>
  )
}

export default Navbar;
