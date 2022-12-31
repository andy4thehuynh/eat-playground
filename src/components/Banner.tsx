const Banner = () => {
  return (
    <div className="bg-red-500 flex justify-center">
      <div className="py-2 tracking-widest">
        <a
          className="bg-white text-sm font-extralight no-underline px-4 py-1 mr-4"
          href="https://www.google.com/maps?q=950+Broadway,+Denver,+CO+80203,+USA&ftid=0x876c7f29c79cc459:0x331c561681c06022"
          target="_blank">
          950 BROADWAY, DENVER, CO 80203
        </a>

        <a className="hidden text-sm font-normal md:inline" href="tel:+3033350368">
          (303) 335-0368
        </a>
      </div>
    </div>
  )
}

export default Banner;
