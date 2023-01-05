const LocationBanner = () => {
  return (
    <div className="bg-red-500 flex justify-center">
      <div className="block mx-4 my-1 w-full md:w-auto md:h-7">
        <a
          className="bg-white block text-xs text-center font-extralight no-underline tracking-widest py-1 md:px-4 md:mr-4 md:inline"
          href="https://www.google.com/maps?q=950+Broadway,+Denver,+CO+80203,+USA&ftid=0x876c7f29c79cc459:0x331c561681c06022"
          target="_blank">
          950 BROADWAY, DENVER, CO 80203
        </a>

        <a className="hidden text-xs font-light tracking-widest md:inline-block" href="tel:+3033350368">
          (303) 335-0368
        </a>
      </div>
    </div>
  )
}

export default LocationBanner;
