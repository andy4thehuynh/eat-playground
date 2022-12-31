const NavbarLink = (props) => {
  return (
    <li className="inline-block mr-4">
      <a href={props.url} className="block text-black font-semibold tracking-widest text-sm">
        {props.text}
      </a>
    </li>
  )
}

export default NavbarLink;
