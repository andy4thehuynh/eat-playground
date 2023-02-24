import NavbarLink from '../components/NavbarLink.js';

const Navbar = () => {
  const links = {
    "HOURS & LOCATION": "hours_and_location.html",
    "MENU": "#menu",
    "ABOUT": "about.html",
    "CATERING": "#catering",
  };

  return(
    <nav className="hidden md:flex md:justify-between mx-6 my-4">
      <div className="object-cover my-3">
        <a href="/">
          <img
            src="/images/playground-header-logo.avif"
            className="block h-[38px]"
            alt="a sandwich sitting on top of a wooden table"
          />
        </a>
      </div>
      <ul className="my-3">
        {Object.keys(links).map((key,_)=>{return(<NavbarLink text={key} url={links[key]}/>)})}
      </ul>
    </nav>
  )
}

export default Navbar;
