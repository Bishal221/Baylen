import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Home = () => {
  const [my_swiper, set_my_swiper] = useState({});
  const [currentSlide, setCurrentslide] = useState(1); // Correctly initialize as a number
  const [totalslide, settotalSlide] = useState(null);
  const [toggleExplore, setToggleexplore] = useState(false);

  useEffect(() => {
    if (my_swiper && my_swiper.slides) {
      // Check if my_swiper and my_swiper.slides exist
      settotalSlide(my_swiper.slides.length);
    }
  }, [my_swiper]);

  const nextSlide = () => {
    my_swiper.slideNext();
    setCurrentslide((my_swiper.activeIndex + 1).toString()); // Use toString method correctly
  };
  const preSlide = () => {
    my_swiper.slidePrev();
    setCurrentslide((my_swiper.activeIndex + 1).toString()); // Use toString method correctly
  };

  const handleToggleExplore = () => {
    setToggleexplore(!toggleExplore);
  };

  return (
    <>
      <Header />

      <header className="lg:w-screen w-full h-[500px] md:h-[700px] lg:h-screen relative flex justify-center items-center z-10 px-4 overflow-hidden">
        <video
          muted
          src="/Res/Main-Banner.mp4"
          className="w-full h-full object-cover object-center absolute top-0 left-0 -z-10"
          autoPlay={true}
          loop="loop"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.3)] -z-[9]"></div>
        <div className="">
          <h1 className="lg:text-[13rem] md:text-[9rem] sm:text-8xl text-6xl text-pink-600 opacity-100 font-playfair font-bold italic">
            SALON
          </h1>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[10%] md:text-base text-sm flex flex-col gap-y-1 md:gap-y-2 max-w-[700px] w-full">
            <p className="text-white tracking-widest uppercase text-center">
              THE ONE AND ONLY DESTINATION FOR
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl text-center lg:text-4xl font-bold text-white tracking-widest">
              <span className="text-pink-600">GROOMING</span> AND{" "}
              <span className="text-pink-600">STYLING</span>
            </h3>
            <h2 className="font-light text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest text-white">
              WITH Baylen!
            </h2>
          </div>
        </div>
      </header>

      <section className="py-28 flex justify-center items-center px-4 flex-col">
        <div className="relative flex flex-col justify-center items-center py-10 gap-y-1 md:gap-2">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-white"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-white"></div>
          <p className="text-white tracking-widest uppercase text-center">
            THE ONE AND ONLY DESTINATION FOR
          </p>
          <h3 className="text-lg md:text-xl text-center lg:text-3xl font-semibold text-pink-600 tracking-widest">
            FASHION GROOMING & STYLING SALON
          </h3>
          <h2 className="font-light text-center text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-widest text-white">
            BY Baylen
          </h2>
        </div>
        <div className="mt-10 max-w-[1100px] flex justify-center items-center md:flex-row flex-col">
          <div className="max-w-[900px]">
            <img src="/Res/intro_sec.jpg" alt="" />
          </div>
          <div className="w-full md:w-auto min-h-[440px]">
            <h2 className="stock-heading relative left-0 md:-left-16 lg:text-[4rem] text-[3rem]">
              Introduction
            </h2>
            <p className="text-pink-600 lg:text-base text-sm max-w-[800px] mb-5">
              Baylen De Louis sets a new standard in the realm of celebrity
              family salons across India, boasting a remarkable seven-star
              experience. Our salon offers an extensive array of services
              tailored to cater to the diverse needs of individuals and families
              alike. From trendy haircuts to rejuvenating spa treatments, we
              pride ourselves on delivering top-notch services using premium
              products and the latest techniques.
            </p>
            {toggleExplore && (
              <p className="text-pink-600 lg:text-base text-sm max-w-[600px] mb-5">
                At Baylen De Louis, we prioritize not just style, but also
                comfort and relaxation. Our luxurious ambiance creates a
                welcoming atmosphere where clients can unwind and indulge in
                self-care. With a team of highly skilled and trained
                professionals, we ensure that each client receives personalized
                attention and leaves feeling pampered and satisfied.
              </p>
            )}
            <button
              onClick={handleToggleExplore}
              className="bg-pink-600 py-2 px-6 text-white w-fit flex justify-center items-center gap-x-3"
              href="#"
            >
              Explore Now{" "}
              <span className={`text-sm ${toggleExplore ? "rotate-90" : ""}`}>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center py-16 gap-y-10 px-4">
        <h2 className="text-5xl lg:text-7xl font-semibold text-pink-600">
          Gallery
        </h2>
        <div className="max-w-[1200px] max-h-[700px] h-full w-full overflow-hidden hover:before:border-pink-600 before:transition-all before:duration-300 z-10 relative before:absolute before:w-[97.5%] before:h-[90%] before:border-4 before:bg-transparent before:animate-updown before:left-4 before:border-white before:z-20">
          <Swiper
            className="mySwiper max-h-[650px] h-full"
            slidesPerView={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop
            modules={[Autoplay]}
            onInit={(ev) => {
              set_my_swiper(ev);
            }}
          >
            <SwiperSlide className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="/Res/FILE-7912 2.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="/Res/BCBFDEC0-8F6B-433F-BBD3-A05E200210F1.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="/Res/1708259140142.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="/Res/1708259199357.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="/Res/1708259312324.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="/Res/1708259367867.webp"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-center items-center gap-x-6 py-5">
            <button className="text-pink-600 text-2xl" onClick={preSlide}>
              <i className="fa-solid fa-arrow-left-long"></i>
            </button>
            <p className="text-pink-600">
              {currentSlide} / {totalslide}
            </p>
            <button className="text-pink-600 text-2xl" onClick={nextSlide}>
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center py-10 gap-y-10 px-4">
        <div className="container relative z-10">
          <div className="w-full lg:w-fit md:pl-5 pl-0">
            <h2 className="stock-heading sm:text-[4rem] text-[2.75rem] lg:text-left text-center w-full lg:w-fit absolute -z-10 sm:-top-[2.5rem] -top-[1.75rem] sm:-left-[.5rem]">
              Baylen de louis
            </h2>
            <h2 className="text-[2.75rem] sm:text-[4rem] lg:text-left text-center text-white font-bold">
              Celebrity Salon
            </h2>
            <p className="text-center max-w-[450px] mx-auto text-pink-600">
              Baylen de Louis offers a wide array of services, including
              haircuts, styling, coloring, manicures, pedicures, and facials,
              clients are pampered and rejuvenated. Their expert stylists use
              premium products to ensure every customer leaves feeling confident
              and refreshed.
            </p>
          </div>
          <div className="flex justify-center items-center mt-20 relative flex-wrap">
            <div className="px-6 py-6 w-full md:w-1/2 lg:w-1/3 animate-bounce_slow_reserse">
              <div className="w-full h-[400px] lg:h-[500px]">
                <video
                  muted
                  src="/Res/MAKEUP_SERVICES.mp4"
                  className="w-full h-full object-cover object-center"
                  autoPlay={true}
                  loop="loop"
                />
              </div>
              <div className="px-6">
                <div className="border border-pink-600 border-t-0 px-3 pb-4 pt-2 flex flex-col gap-y-5">
                  <h3 className="text-white text-2xl font-medium from-black">
                    MAKEUP SERVICES
                  </h3>
                  <p className="text-white">
                    Indulge in top-tier makeup services provided by our
                    world-class makeup artists for a refined and polished look.
                  </p>
                  <a
                    className="text-white bg-pink-600 px-4 py-2 hover:bg-white hover:text-pink-600 transition-all duration-300 w-fit font-semibold text-lg"
                    href="#"
                  >
                    Explore Now
                  </a>
                </div>
              </div>
            </div>
            <div className="px-6 py-6 w-full md:w-1/2 lg:w-1/3 relative lg:-top-16 animate-bounce_slow">
              <div className="w-full h-[400px] lg:h-[500px]">
                <video
                  muted
                  src="/Res/MAKEOVER_SESSIONS.mp4"
                  className="w-full h-full object-cover object-center"
                  autoPlay={true}
                  loop="loop"
                />
              </div>
              <div className="px-6">
                <div className="border border-pink-600 border-t-0 px-3 pb-4 pt-2 flex flex-col gap-y-5">
                  <h3 className="text-white text-2xl font-medium">
                    MAKEOVER SESSIONS
                  </h3>
                  <p className="text-white">
                    Experience a remarkable change as our transformation
                    specialists guide you through our exclusive makeover
                    sessions.
                  </p>
                  <a
                    className="text-white bg-pink-600 px-4 py-2 hover:bg-white hover:text-pink-600 transition-all duration-300 w-fit font-semibold text-lg"
                    href="#"
                  >
                    Explore Now
                  </a>
                </div>
              </div>
            </div>
            <div className="px-6 py-6 w-full md:w-1/2 lg:w-1/3 animate-bounce_slow_reserse">
              <div className="w-full h-[400px] lg:h-[500px]">
                <video
                  muted
                  src="/Res/HAIRDRESSING_AND_STYLING.mp4"
                  className="w-full h-full object-cover object-center"
                  autoPlay={true}
                  loop="loop"
                />
              </div>
              <div className="px-6">
                <div className="border border-pink-600 border-t-0 px-3 pb-4 pt-2 flex flex-col gap-y-5">
                  <h3 className="text-white text-2xl font-medium">
                    HAIRDRESSING AND STYLING
                  </h3>
                  <p className="text-white">
                    Let our skilled team of hairstyling magicians work their
                    magic on your locks, delivering enchanting hair
                    transformations using indulgent treatments.
                  </p>
                  <a
                    className="text-white bg-pink-600 px-4 py-2 hover:bg-white hover:text-pink-600 transition-all duration-300 w-fit font-semibold text-lg"
                    href="#"
                  >
                    Explore Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:w-screen w-full h-[500px] md:h-[700px] lg:h-screen relative flex justify-center items-center z-10 px-4">
        <video
          muted
          src="/Res/Footer.mp4"
          className="w-full h-full object-cover object-center absolute top-0 left-0 -z-10"
          autoPlay={true}
          loop="loop"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)] -z-[9]"></div>
        <div className="absolute -bottom-[4rem] md:left-[4rem]">
          <p className="max-w-[600px] text-[2rem] md:text-[3rem] lg:text-[5rem] text-white font-black text-center lg:leading-[5rem] md:leading-[3rem] leading-[2rem] w-full ">
            Leaves <br />
            A Lasting <br />
            IMPRESSION
          </p>
          <h2 className="text-[2rem] md:text-[3rem] lg:text-[7rem] text-pink-600 text-center font-bold lg:leading-[1] md:leading-[1.2] font-playfair leading-[1.5]">
            Baylen
          </h2>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
