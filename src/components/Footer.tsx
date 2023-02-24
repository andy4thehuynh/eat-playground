import SocialLinks from '../components/SocialLinks.js';
const Footer = () => {
  return(
    <footer>
      <div class="md:hidden">
        <a href="#" class="bg-white border-black border-4 text-lg text-center font-syncopate w-full px-4 py-2 font-black inline-block transition ease-in-out hover:text-white hover:bg-black md:hidden">CONTACT</a>
        <a href="#" class="bg-white border-black border-4 text-lg text-center font-syncopate w-full px-4 py-2 font-black inline-block transition ease-in-out hover:text-white hover:bg-black md:hidden">EVENTS</a>
        <a href="#" class="bg-white border-black border-4 text-lg text-center font-syncopate w-full px-4 py-2 font-black inline-block transition ease-in-out hover:text-white hover:bg-black md:hidden">EMAIL SIGNUP</a>
      </div>
      <SocialLinks/>
    </footer>
  )
}

export default Footer;
