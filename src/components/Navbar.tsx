const Navbar = () => {
  return(
    <nav className="flex bg-white p-6">
      <div className="block lg:invisible">
        <button className="flex items-center px-3 py-2 border rounded text-black border-teal-400  hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>


      <div className="w-full font-bold tracking-widest block text-center flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black  mr-4">
            HOURS & LOCATION
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black  mr-4">
            MENU
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black  mr-4">
            ABOUT
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black ">
            CATERING
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
