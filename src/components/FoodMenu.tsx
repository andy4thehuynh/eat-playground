const FoodMenu = () => {
  return (
    <section className="grid gap-10 auto-cols-auto my-20 md:gap-4 md:grid-cols-6 md:mx-36 md:my-20">
      <div className="flex items-center justify-center">
        <a
          href="menu/pink-tiger-tacos/"
          className="w-28 md:w-40">
          <img
            src="/images/pink-tiger-tacos-logo.png"
            className="block"
            alt="logo"/>
        </a>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="menu/kimbap/"
          className="w-28 md:w-40">
          <img
            src="/images/kimbap-logo.avif"
            className="block"
            alt="logo"/>
        </a>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="menu/bonfire/"
          className="w-28 md:w-40">
          <img
            src="/images/bonfire-logo.png"
            className="block"
            alt="logo"/>
        </a>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="menu/buddha-belly/"
          className="w-28 md:w-40">
          <img
            src="/images/buddha-belly-logo.png"
            className="block"
            alt="logo"/>
        </a>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="menu/gem-pan-asian/"
          className="w-28 md:w-40">
          <img
            src="/images/gem-pan-asian-logo.png"
            className="block"
            alt="logo"/>
        </a>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="menu/bok-bok/"
          className="w-28 md:w-40">
          <img
            src="/images/bok-bok-logo.png"
            className="block"
            alt="logo"/>
        </a>
      </div>
    </section>
  )
}

export default FoodMenu;
