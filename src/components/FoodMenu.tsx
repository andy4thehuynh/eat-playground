const FoodMenu = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex flex-wrap items-center justify-around content-between">
        <a
          href="menu/pink-tiger-tacos/"
          className="w-20 m-2">
          <img
            src="/images/pink-tiger-tacos-logo.png"
            className="block"
            alt="pink tiger tacos logo"/>
        </a>
        <a
          href="menu/kimbap/"
          className="w-20 m-2">
          <img
            src="/images/kimbap-logo.avif"
            className="block"
            alt="kimbap logo"/>
        </a>
        <a
          href="menu/bonfire/"
          className="w-20 m-2">
          <img
            src="/images/bonfire-logo.png"
            className="block"
            alt="bonfire logo"/>
        </a>
        <a
          href="menu/buddha-belly/"
          className="w-20 m-2">
          <img
            src="/images/buddha-belly-logo.png"
            className="block"
            alt="buddha belly logo"/>
        </a>
        <a
          href="menu/gem-pan-asian/"
          className="w-20 m-2">
          <img
            src="/images/gem-pan-asian-logo.png"
            className="block"
            alt="gem pan asian logo"/>
        </a>
        <a
          href="menu/bok-bok/"
          className="w-20 m-2">
          <img
            src="/images/bok-bok-logo.png"
            className="block"
            alt="bok bok logo"/>
        </a>
      </div>
    </section>
  )
}

export default FoodMenu;
