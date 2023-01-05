import "../styles/navbarlink.css"

const NavbarLink = (props) => {
  return (
    <li className="inline-block mr-4">
      <a href={props.url} className="link-underline-animation block text-black font-extrabold leading-loose tracking-widest text-sm">
        {props.text}
      </a>
    </li>
  )
}

export default NavbarLink;
