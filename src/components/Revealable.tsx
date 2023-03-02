import "../styles/navbarlink.css";

const Revealable = (props) => {
  return (
    <section className="revealable">
      {props.children}
    </section>
  )
}

export default Revealable;
