
const Carousel = () => {
  return (
    <div
    id="carouselExampleCrossfade"
    className="carousel slide carousel-fade relative"
    data-bs-ride="carousel"
  >
    <img
      src="/images/playground-carousel-logo.avif"
      className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] object-cover bg-cover z-50 max-w-[65%]" />

    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
      <button
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide-to="4"
        aria-label="Slide 5"
      ></button>
    </div>

    <div className="carousel-inner flex relative w-full overflow-hidden">
      <div className="carousel-item self-center active float-left w-full h-[75vh]">
        <img
          src="/images/ramen.jpeg"
          className="block w-full h-full object-cover bg-cover"
          alt="a bowl of food on a plate"
        />
      </div>
      <div className="carousel-item self-center float-left w-full h-[75vh]">
        <img
          src="/images/banh-mi.jpg"
          className="block w-full h-full object-cover bg-cover"
          alt="a sandwich sitting on top of a wooden table"
        />
      </div>
      <div className="carousel-item self-center float-left w-full h-[75vh]">
        <img
          src="/images/chicken-wings.jpg"
          className="block w-full h-full object-cover bg-cover"
          alt="chicken wings"
        />
      </div>
      <div className="carousel-item self-center float-left w-full h-[75vh]">
        <img
          src="/images/bowl-of-rice.jpg"
          className="block w-full h-full object-cover bg-cover"
          alt="a bowl of food on a plate"
        />
      </div>
      <div className="carousel-item self-center float-left w-full h-[75vh]">
        <img
          src="/images/honey-chicken-wings.jpg"
          className="block w-full h-full object-cover bg-cover"
          alt="a bowl of food on a plate"
        />
      </div>
    </div>
    <button
      className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousel;
