import LocationBanner from '../components/LocationBanner.js';

const SiteHeaderMobile = () => {
  return (
    <section>
      <div className="block h-12 md:hidden">
        <div className="float-right">
          <button className="flex items-center px-3 py-2">
            <svg
              className="fill-current h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/>
            </svg>
          </button>
        </div>
      </div>

      <LocationBanner/>
    </section>
  )
}

export default SiteHeaderMobile;
