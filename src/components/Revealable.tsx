import "../styles/navbarlink.css"

const Revealable = (props) => {
  return (
    <section class="revealable">
      {props.children}
    </section>
  )
}

export default Revealable;
