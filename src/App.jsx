import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const App = () => {
  const [menuActive, setMenuactive] = useState(false);
  const [my_swiper, set_my_swiper] = useState({});
  const [currentSlide, setCurrentslide] = useState(1); // Correctly initialize as a number
  const [totalslide, settotalSlide] = useState(null);
  const [year, setYear] = useState(new Date().getFullYear());
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [mapSrc, setMapSrc] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.981438938617!2d85.3248989!3d23.352687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1bcbbc40e23%3A0xa6aea8192f8f434!2sBAYLEN%20d%C3%A9%20Louis%2C%20Best%20Salon%20of%20Main%20Road%2C%20Ranchi!5e0!3m2!1sen!2sin!4v1708253359769!5m2!1sen!2sin"
  );
  const [toggleExplore, setToggleexplore] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const scrollCallback = () => {
      const scrolledFromTop = window.scrollY;
      setShown(() => scrolledFromTop > 1000);
    };

    window.addEventListener("scroll", scrollCallback);

    scrollCallback();

    // clean-up function
    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, []);

  const ScrollToTopButton = () => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    return (
      <button
        onClick={handleScrollToTop}
        aria-label="scroll to top"
        className={`${
          shown ? "scale-100" : "scale-0"
        } w-12 h-12 bg-pink-600 text-white z-50 transition-all duration-500 flex fixed right-10 bottom-10 bg-primary rounded-full shadow-lg shadow-gray-900 justify-center items-center`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    );
  };

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

  const handleMenutoggle = () => {
    setMenuactive(!menuActive);
  };

  const categories = [
    { name: "Ahemdabad", subCategories: ["4D Squre Mall"] },
    {
      name: "Ranchi",
      subCategories: [
        "Doranda",
        "Main Road",
        "Kokar",
        "Kanke",
        "Lalpur Academy",
        "Lalpur Salon",
        "EBH HO LALPUR",
      ],
    },
    { name: "Lohardaga", subCategories: ["Lohardaga"] },
    { name: "Hazaribagh", subCategories: ["Hazaribagh"] },
    { name: "Patna", subCategories: ["M-15 Kidwaipuri", "Anandpuri"] },
  ];

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    // Reset subCategory when category changes
    setSubCategory("");
  };

  // Event handler for subCategory selection
  const handleSubCategoryChange = (e) => {
    const selectedSubCategory = e.target.value;
    setSubCategory(selectedSubCategory);

    // Replace this logic with your actual map links for each subcategory
    // Example:
    const mapLinks = {
      "4D Squre Mall":
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.8457879500224!2d72.5954076!3d23.1027404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83580ce20103%3A0x400194d79eb4cd3!2sBAYLEN%20De%20Louis%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1708253295587!5m2!1sen!2sin",
      Doranda:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.1719710092148!2d85.3235031!3d23.3457834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1b07b6f4731%3A0xc3704b8d6f14502a!2sBAYLEN%20d%C3%A9%20Louis%2C%20Best%20Salon%20of%20Doranda%20Kadru%2C%20Ranchi!5e0!3m2!1sen!2sin!4v1708253332294!5m2!1sen!2sin",
      "Main Road":
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.981438938617!2d85.3248989!3d23.352687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1bcbbc40e23%3A0xa6aea8192f8f434!2sBAYLEN%20d%C3%A9%20Louis%2C%20Best%20Salon%20of%20Main%20Road%2C%20Ranchi!5e0!3m2!1sen!2sin!4v1708253359769!5m2!1sen!2sin",
      Kokar:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.3066370641595!2d85.3597903!3d23.377121799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e31077688441%3A0x56c20cb78234bdcc!2sBAYLEN%20d%C3%A9%20Louis-Best%20Salon%20of%20Ranchi%2CKokar!5e0!3m2!1sen!2sin!4v1708253400346!5m2!1sen!2sin",
      Kanke:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.7925499076428!2d85.31442299999999!3d23.395720900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1517d70dc4b%3A0xc9aebdae72ea5dfe!2sBAYLEN%20d%C3%A9%20Louis%2C%20Best%20Salon%20in%20Kanke%20Ranchi!5e0!3m2!1sen!2sin!4v1708253457472!5m2!1sen!2sin",
      "Lalpur Academy":
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.4444612510715!2d85.338267!3d23.3721331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1792a0bee4b%3A0xb679211787b0a472!2sBaylen%20D%C3%A9%20Louis%20Academy!5e0!3m2!1sen!2sin!4v1708453847528!5m2!1sen!2sin",
      "Lalpur Salon":
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14649.777845004286!2d85.338267!3d23.3721331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1295bab510d%3A0x1a97987f9a99a29c!2sBAYLEN%20d%C3%A9%20Louis%20Salon%2C%20Mall%20Decor%2C%20Lalpur%20Chowk!5e0!3m2!1sen!2sin!4v1708453962990!5m2!1sen!2sin",
      "EBH HO LALPUR":
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.4447319710425!2d85.33827099999999!3d23.3721233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1b898eef271%3A0x8dfbe8b16311ea48!2sEuropian%20Beauty%20and%20Healtcare%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1708253548156!5m2!1sen!2sin",
      Lohardaga:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24625.371525471906!2d84.68607047099833!3d23.439412462559996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x662fe7e0d02a9151%3A0x1f670e827826f072!2sBaylen%20D%C3%A9%20Louis%20Lohardaga!5e0!3m2!1sen!2sin!4v1708253638291!5m2!1sen!2sin",
      Hazaribagh:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.9805419374884!2d85.35765459999999!3d23.9964642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f49dab470bf82f%3A0xd6e0d835780b96ce!2sBaylen%20De%20Louis%20Hazaribagh!5e0!3m2!1sen!2sin!4v1708253683956!5m2!1sen!2sin",
      Anandpuri:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14390.588746985024!2d85.1136963!3d25.6166375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58258667c52b%3A0x93315691b3ecbc2!2sBaylen%20D%C3%A9%20Louis!5e0!3m2!1sen!2sin!4v1708453368593!5m2!1sen!2sin",
      "M-15 Kidwaipuri":
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14390.798740762086!2d85.126773!3d25.6148937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59013fd44405%3A0x92a535240288aee7!2sbaylen%20de%20louis!5e0!3m2!1sen!2sin!4v1708453480592!5m2!1sen!2sin",
    };
    setMapSrc(mapLinks[selectedSubCategory]);
  };

  const handleToggleExplore = () => {
    setToggleexplore(!toggleExplore);
  };

  return (
    <>
      <ScrollToTopButton />
      <section className="relative overflow-hidden bg-black">
        <nav className="absolute w-full z-40 py-4 px-5">
          <div className="relative flex flex-wrap items-center justify-between">
            <a
              href="#"
              className="max-w-32 md:max-w-40 text-[rgba(0,0,0,0.9)] inline-block py-[.3125rem] mr-4 text-lg "
            >
              <img src="/Res/Logo.png" alt="" />
            </a>
            <div className="flex gap-x-3 items-center justify-between">
              <div>
                <a
                  href="#"
                  className="bg-pink-600 font-semibold uppercase text-white text-xs block tracking-[0.9px] px-4 pt-2 pb-2 rounded-2xl"
                >
                  Book Appointment
                </a>
              </div>
              <button
                onClick={handleMenutoggle}
                className="bg-pink-600 text-white px-3 py-1"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </nav>
        <aside
          className={`fixed bg-black h-screen max-w-72 w-full top-0 ${
            menuActive ? "right-0" : "-right-96"
          } z-50 transition-right duration-300`}
        >
          <div className=" w-full h-full relative flex flex-col justify-center">
            <button
              onClick={handleMenutoggle}
              className="bg-pink-600 text-white px-4 py-2 absolute top-0 -left-[45px]"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className="text-pink-600 flex justify-center flex-col px-6 gap-y-3 font-playfair">
              <a
                className="block px-3 py-2 text-2xl hover:bg-[#171717] rounded-lg font-semibold"
                href="#"
              >
                Home
              </a>
              <a
                className="block px-3 py-2 text-2xl hover:bg-[#171717] rounded-lg font-semibold"
                href="#"
              >
                About Us
              </a>
              <a
                className="block px-3 py-2 text-2xl hover:bg-[#171717] rounded-lg font-semibold"
                href="#"
              >
                Services
              </a>
              <a
                className="block px-3 py-2 text-2xl hover:bg-[#171717] rounded-lg font-semibold"
                href="#"
              >
                Portfolio
              </a>
              <a
                className="block px-3 py-2 text-2xl hover:bg-[#171717] rounded-lg font-semibold"
                href="#"
              >
                Channels
              </a>
              <a
                className="block px-3 py-2 text-2xl hover:bg-[#171717] rounded-lg font-semibold"
                href="#"
              >
                Salon
              </a>
              <a
                className="block px-3 py-2 text-2xl hover:bg-[#171717] rounded-lg font-semibold"
                href="#"
              >
                Franchise
              </a>
            </div>
          </div>
        </aside>

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
                tailored to cater to the diverse needs of individuals and
                families alike. From trendy haircuts to rejuvenating spa
                treatments, we pride ourselves on delivering top-notch services
                using premium products and the latest techniques.
              </p>
              {toggleExplore && (
                <p className="text-pink-600 lg:text-base text-sm max-w-[600px] mb-5">
                  At Baylen De Louis, we prioritize not just style, but also
                  comfort and relaxation. Our luxurious ambiance creates a
                  welcoming atmosphere where clients can unwind and indulge in
                  self-care. With a team of highly skilled and trained
                  professionals, we ensure that each client receives
                  personalized attention and leaves feeling pampered and
                  satisfied.
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
          <div className="max-w-[1200px] max-h-[700px] h-full w-full overflow-hidden">
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
                premium products to ensure every customer leaves feeling
                confident and refreshed.
              </p>
            </div>
            <div className="flex justify-center items-center mt-20 relative flex-wrap">
              <div className="px-6 py-6 w-full md:w-1/2 lg:w-1/3">
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
                      world-class makeup artists for a refined and polished
                      look.
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
              <div className="px-6 py-6 w-full md:w-1/2 lg:w-1/3 relative lg:-top-16">
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
              <div className="px-6 py-6 w-full md:w-1/2 lg:w-1/3 ">
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

        <section className="flex justify-center items-center pt-20 pb-10 gap-y-10 px-4">
          <div className="w-full mt-10 flex md:flex-row flex-col justify-between max-w-[1500px] gap-x-5 gap-y-5">
            <div className=" w-full md:w-1/2 order-2 md:order-1">
              <p className="text-sm text-pink-600 font-semibold tracking-wider">
                SUBSCRIBE TO OUR NEWSLETTER
              </p>
              <div className="mt-6 py-2 px-5 rounded-full flex items-center justify-center bg-pink-600 text-white max-w-[400px] w-full mb-8">
                <span>
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <input
                  className="bg-transparent w-full px-3 outline-none border-none placeholder:text-white"
                  type="email"
                  placeholder="Enter your email id..."
                />
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
              <div className="flex md:items-start items-center flex-col gap-y-8 sm:text-base text-sm text-center">
                <div className="flex items-center sm:gap-x-5 gap-x-3">
                  <a
                    className="text-white hover:text-pink-600 transition-all duration-300 font-medium uppercase"
                    href="#"
                  >
                    careers
                  </a>
                  <a
                    className="text-white hover:text-pink-600 transition-all duration-300 font-medium uppercase"
                    href="#"
                  >
                    contact us
                  </a>
                  <a
                    className="text-white hover:text-pink-600 transition-all duration-300 font-medium uppercase"
                    href="#"
                  >
                    privacy policy
                  </a>
                  <a
                    className="text-white hover:text-pink-600 transition-all duration-300 font-medium uppercase"
                    href="#"
                  >
                    terms & conditions
                  </a>
                </div>
                <div className="flex items-center gap-x-5">
                  <div className="flex gap-x-4">
                    <button className="flex gap-x-2 relative group transition-all duration-300">
                      <span className="text-white">
                        <i className="fa-solid fa-phone"></i>
                      </span>
                      <p className="text-pink-600 font-semibold text-[1.1rem]">Salon</p>
                      <a href="tel:8877001122" className="absolute group-hover:block hidden transition-all duration-300 top-[105%] shadow-lg w-fit px-4 py-1 bg-[rgba(255,255,255)] rounded-md font-semibold text-pink-600 left-1/2 -translate-x-1/2">8877001122</a>
                    </button>
                    <button className="flex gap-x-2 relative group transition-all duration-300">
                      <span className="text-white">
                        <i className="fa-solid fa-phone"></i>
                      </span>
                      <p className="text-pink-600 font-semibold text-[1.1rem]">Academy</p>
                      <a href="tel:8877001123" className="absolute group-hover:block hidden transition-all duration-300 top-[105%] shadow-lg w-fit px-4 py-1 bg-[rgba(255,255,255)] rounded-md font-semibold text-pink-600 left-1/2 -translate-x-1/2">8877001123</a>
                    </button>
                    <button className="flex gap-x-2 relative group transition-all duration-300">
                      <span className="text-white">
                        <i className="fa-solid fa-phone"></i>
                      </span>
                      <p className="text-pink-600 font-semibold text-[1.1rem]">Franchise</p>
                      <a href="tel:8877001130" className="absolute group-hover:block hidden transition-all duration-300 top-[105%] shadow-lg w-fit px-4 py-1 bg-[rgba(255,255,255)] rounded-md font-semibold text-pink-600 left-1/2 -translate-x-1/2">8877001130</a>
                    </button>
                  </div>
                </div>
                <div className="flex  items-center gap-x-5">
                  <a
                    className="bg-white flex justify-center items-center text-xl text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full"
                    href="#"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    className="bg-white flex justify-center items-center text-xl text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full"
                    href="#"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a
                    className="bg-white flex justify-center items-center text-xl text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full"
                    href="#"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    className="bg-white flex justify-center items-center text-xl text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full"
                    href="#"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a
                    className="bg-white flex justify-center items-center text-xl text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full"
                    href="#"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </div>
                <div className="flex  items-center gap-x-5">
                  <p className="text-white hover:text-pink-600 transition-all duration-300 font-medium uppercase">
                    Copyright © {year}.{" "}
                    <span className="uppercase">
                      europian beauty & healthcare pvt.ltd.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full md:w-1/2 order-1 md:order-2 xl:max-w-[700px] xl:w-full gap-x-6 xl:flex-row flex-col gap-y-5">
              <div className="w-full lg:w-[40%]">
                <h2 className="text-pink-600 text-2xl font-bold uppercase">
                  our location
                </h2>
                <div className="mt-6 flex flex-col gap-y-5">
                  <div className="">
                    <label
                      htmlFor="districts"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-pink-600"
                    >
                      Select Location
                    </label>
                    <select
                      value={category}
                      onChange={handleCategoryChange}
                      id="districts"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#171717] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option disabled value="">
                        Select Location
                      </option>
                      {categories.map((cat, index) => (
                        <option key={index} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {category && (
                    <div className="">
                      <label className="block mb-2 text-sm font-medium text-pink-600">
                        Select Branch
                      </label>
                      <select
                        value={subCategory}
                        onChange={handleSubCategoryChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#171717] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option disabled value="">
                          Select Outlet
                        </option>
                        {categories
                          .find((cat) => cat.name === category)
                          .subCategories.map((subCat, index) => (
                            <option key={index} value={subCat}>
                              {subCat}
                            </option>
                          ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>
              <div className="border w-full h-full lg:w-[60%]">
                <iframe
                  className="w-full h-full border-none outline-none"
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default App;
