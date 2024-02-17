import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const App = () => {
  const [menuActive, setMenuactive] = useState(false);
  const [my_swiper, set_my_swiper] = useState({});
  const [currentSlide, setCurrentslide] = useState(1); // Correctly initialize as a number
  const [totalslide, settotalSlide] = useState(null);
  const [year, setYear] = useState(new Date().getFullYear())
  useEffect(() => {
    if (my_swiper && my_swiper.slides) { // Check if my_swiper and my_swiper.slides exist
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

  return (
    <>
      <section className='relative overflow-hidden bg-black'>
        <nav className='absolute w-full z-40 py-4 px-5'>
          <div className='relative flex flex-wrap items-center justify-between'>
            <a href="#" className='max-w-28 text-[rgba(0,0,0,0.9)] inline-block py-[.3125rem] mr-4 text-lg '>
              <img src="/Res/Logo.png" alt="" />
            </a>
            <div className='flex gap-x-3 items-center justify-between'>
              <div>
                <a href="#" className='bg-pink-600 font-semibold uppercase text-white text-xs block tracking-[0.9px] px-4 pt-2 pb-2 rounded-2xl'>Enquire</a>
              </div>
              <button onClick={handleMenutoggle} className='bg-pink-600 text-white px-3 py-1'><i class="fa-solid fa-bars"></i></button>
            </div>
          </div>
        </nav>
        <aside className={`fixed bg-black h-screen max-w-72 w-full top-0 ${menuActive ? 'right-0' : '-right-96'} z-50 transition-right duration-300`}>
          <div className=' w-full h-full relative flex flex-col justify-center'>
            <button onClick={handleMenutoggle} className='bg-pink-600 text-white px-4 py-2 absolute top-0 -left-[45px]'><i class="fa-solid fa-bars"></i></button>
            <div className='text-pink-600 flex justify-center flex-col px-6 gap-y-3 font-playfair'>
              <a className='block px-3 py-2 text-2xl hover:bg-[#171717] rounded-lg font-semibold' href="#">Home</a>
              <a className='block px-3 py-2 text-2xl hover:bg-[#171717] rounded-lg font-semibold' href="#">About Us</a>
              <a className='block px-3 py-2 text-2xl hover:bg-[#171717] rounded-lg font-semibold' href="#">Services</a>
              <a className='block px-3 py-2 text-2xl hover:bg-[#171717] rounded-lg font-semibold' href="#">Portfolio</a>
              <a className='block px-3 py-2 text-2xl hover:bg-[#171717] rounded-lg font-semibold' href="#">Channels</a>
              <a className='block px-3 py-2 text-2xl hover:bg-[#171717] rounded-lg font-semibold' href="#">Salon</a>
              <a className='block px-3 py-2 text-2xl hover:bg-[#171717] rounded-lg font-semibold' href="#">Franchise</a>
            </div>
          </div>
        </aside>

        <header className='lg:w-screen w-full h-[500px] md:h-[700px] lg:h-screen relative flex justify-center items-center z-10 px-4'>
          <video src='/Res/Main-Banner.mp4' className='w-full h-full object-cover object-center absolute top-0 left-0 -z-10' autoPlay={true} loop='loop' />
          <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.3)] -z-[9]'></div>
          <div className=''>
            <h1 className='lg:text-[13rem] md:text-[9rem] sm:text-8xl text-6xl text-pink-600 opacity-80 font-playfair font-bold italic'>SALON</h1>
            <div className='absolute left-1/2 -translate-x-1/2 bottom-[10%] md:text-base text-sm flex flex-col gap-y-1 md:gap-y-2 max-w-[700px] w-full'>
              <p className='text-white tracking-widest uppercase text-center'>THE ONE AND ONLY DESTINATION FOR</p>
              <h3 className='text-xl sm:text-2xl md:text-3xl text-center lg:text-4xl font-bold text-white tracking-widest'><span className='text-pink-600'>GROOMING</span> AND <span className='text-pink-600'>STYLING</span></h3>
              <h2 className='font-light text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest text-white'>WITH Baylen!</h2>
            </div>
          </div>
        </header>

        <section className='py-28 flex justify-center items-center px-4 flex-col'>
          <div className='relative flex flex-col justify-center items-center py-10 gap-y-1 md:gap-2'>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-white'></div>
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-white'></div>
            <p className='text-white tracking-widest uppercase text-center'>THE ONE AND ONLY DESTINATION FOR</p>
            <h3 className='text-lg md:text-xl text-center lg:text-3xl font-semibold text-pink-600 tracking-widest'>FASHION GROOMING & STYLING SALON</h3>
            <h2 className='font-light text-center text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-widest text-white'>BY Baylen</h2>
          </div>
          <div className='mt-10 max-w-[1100px] flex justify-center items-center md:flex-row flex-col'>
            <div className='max-w-[900px]'>
              <img src="/Res/intro_sec.jpg" alt="" />
            </div>
            <div className='w-full md:w-auto'>
              <h2 className='stock-heading relative left-0 md:-left-16 lg:text-[4rem] text-[3rem]'>Introduction</h2>
              <p className='text-pink-600 lg:text-base text-sm max-w-[600px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ratione reprehenderit tempore beatae dolor consequuntur blanditiis nostrum dolores molestiae ipsam!</p>
              <a className='bg-pink-600 block py-2 px-6 text-white w-fit mt-5' href="#">Explore Now</a>
            </div>
          </div>
        </section>

        <section className='flex flex-col justify-center items-center py-16 gap-y-10 px-4'>
          <h2 className='text-5xl lg:text-7xl font-semibold text-pink-600'>Gallery</h2>
          <div className='max-w-[1200px] max-h-[700px] h-full w-full overflow-hidden'>
            <Swiper className="mySwiper max-h-[650px] h-full" slidesPerView={1}
              onInit={(ev) => {
                set_my_swiper(ev)
              }}>
              <SwiperSlide><img className='w-full h-full object-cover' src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
              <SwiperSlide><img className='w-full h-full object-cover' src="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></SwiperSlide>
              <SwiperSlide><img className='w-full h-full object-cover' src="https://images.pexels.com/photos/3992875/pexels-photo-3992875.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></SwiperSlide>
            </Swiper>
            <div className='flex justify-center items-center gap-x-6 py-5'>
              <button className='text-pink-600 text-2xl' onClick={preSlide}><i class="fa-solid fa-arrow-left-long"></i></button>
              <p className='text-pink-600'>{currentSlide} / {totalslide}</p>
              <button className='text-pink-600 text-2xl' onClick={nextSlide}><i class="fa-solid fa-arrow-right-long"></i></button>
            </div>
          </div>
        </section>

        <section className='flex flex-col justify-center items-center py-10 gap-y-10 px-4'>
          <div className="container relative z-10">
            <div className='w-full lg:w-fit'>
              <h2 className='stock-heading sm:text-[4rem] text-[2.75rem] lg:text-left text-center w-full lg:w-fit absolute -z-10 sm:-top-[2.5rem] -top-[1.75rem] sm:-left-[2.5rem]'>Baylen de louis</h2>
              <h2 className='text-[2.75rem] sm:text-[4rem] lg:text-left text-center text-white font-bold'>Celibraty Salon</h2>
              <p className='text-center max-w-[450px] mx-auto text-pink-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eaque odio voluptates, accusamus maiores error aperiam aliquid pariatur. Quibusdam, corporis.</p>
            </div>
            <div className='flex justify-center items-center mt-20 relative flex-wrap'>
              <div className='px-6 py-6 w-full md:w-1/2 lg:w-1/3'>
                <div className='w-full h-[550px]'>
                  <video src='/Res/Main-Banner.mp4' className='w-full h-full object-cover object-center' autoPlay={true} loop='loop' />
                </div>
                <div className='px-6'>
                  <div className='border border-pink-600 border-t-0 px-3 pb-4 pt-2 flex flex-col gap-y-5'>
                    <h3 className='text-pink-600 text-2xl font-medium'>
                      BEAUTY AND SKIN TREATMENTS</h3>
                    <p className='text-pink-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores expedita architecto accusamus nesciunt adipisci nostrum.</p>
                    <a className='text-pink-600 font-bold text-lg' href="#">Explore Now</a>
                  </div>
                </div>
              </div>
              <div className='px-6 py-6 w-full md:w-1/2 lg:w-1/3 relative lg:-top-16'>
                <div className='w-full h-[550px]'>
                  <video src='/Res/Main-Banner.mp4' className='w-full h-full object-cover object-center' autoPlay={true} loop='loop' />
                </div>
                <div className='px-6'>
                  <div className='border border-pink-600 border-t-0 px-3 pb-4 pt-2 flex flex-col gap-y-5'>
                    <h3 className='text-pink-600 text-2xl font-medium'>
                      BEAUTY AND SKIN TREATMENTS</h3>
                    <p className='text-pink-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores expedita architecto accusamus nesciunt adipisci nostrum.</p>
                    <a className='text-pink-600 font-bold text-lg' href="#">Explore Now</a>
                  </div>
                </div>
              </div>
              <div className='px-6 py-6 w-full md:w-1/2 lg:w-1/3'>
                <div className='w-full h-[550px]'>
                  <video src='/Res/Main-Banner.mp4' className='w-full h-full object-cover object-center' autoPlay={true} loop='loop' />
                </div>
                <div className='px-6'>
                  <div className='border border-pink-600 border-t-0 px-3 pb-4 pt-2 flex flex-col gap-y-5'>
                    <h3 className='text-pink-600 text-2xl font-medium'>
                      BEAUTY AND SKIN TREATMENTS</h3>
                    <p className='text-pink-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores expedita architecto accusamus nesciunt adipisci nostrum.</p>
                    <a className='text-pink-600 font-bold text-lg' href="#">Explore Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className='lg:w-screen w-full h-[500px] md:h-[700px] lg:h-screen relative flex justify-center items-center z-10 px-4'>
          <video src='/Res/Main-Banner.mp4' className='w-full h-full object-cover object-center absolute top-0 left-0 -z-10' autoPlay={true} loop='loop' />
          <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.3)] -z-[9]'></div>
          <div className='absolute -bottom-[4rem] md:left-[4rem]'>
            <p className='max-w-[600px] text-[2rem] md:text-[3rem] lg:text-[5rem] text-white font-black text-center lg:leading-[5rem] md:leading-[3rem] leading-[2rem] w-full'>Lorem ipsum dolor sit amet consectetur.</p>
            <h2 className='text-[2rem] md:text-[3rem] lg:text-[7rem] text-pink-600 text-center font-bold lg:leading-[1] md:leading-[1.2] leading-[1.5]'>Baylen</h2>
          </div>
        </section>

        <section className='flex flex-col justify-center items-center py-16 gap-y-10 px-4'>
          <div className='max-w-[1100px] w-full mt-10 flex items-center justify-center flex-col'>
              <p className='text-sm text-pink-600 font-semibold tracking-wider'>SUBSCRIBE TO OUR NEWSLETTER</p>
              <div className='mt-6 py-2 px-5 rounded-full flex items-center justify-center bg-pink-600 text-white max-w-[400px] w-full'>
                <span><i class="fa-regular fa-envelope"></i></span>
                <input className='bg-transparent w-full px-3 outline-none border-none placeholder:text-white' type="email" placeholder='Enter your email id...' />
                <span><i class="fa-solid fa-arrow-right"></i></span>
              </div>
              <div className='border my-10 w-full opacity-50'></div>
              <div className='flex justify-center items-center flex-col gap-y-8 sm:text-base text-sm text-center'>
                <div className='flex justify-center items-center sm:gap-x-5 gap-x-3'>
                  <a className='text-white hover:text-pink-600 transition-all duration-300 font-medium uppercase' href="#">careers</a>
                  <a className='text-white hover:text-pink-600 transition-all duration-300 font-medium uppercase' href="#">contact us</a>
                  <a className='text-white hover:text-pink-600 transition-all duration-300 font-medium uppercase' href="#">privacy policy</a>
                  <a className='text-white hover:text-pink-600 transition-all duration-300 font-medium uppercase' href="#">terms & conditions</a>
                </div>
                <div className='flex justify-center items-center gap-x-5'>
                  <p className='text-white hover:text-pink-600 transition-all duration-300 font-medium uppercase'>+91 7873566666 - <span><i class="fa-solid fa-clock"></i></span> Mon to Fri: 9:30am - 8:00pm</p>
                </div>
                <div className='flex justify-center items-center gap-x-5'>
                <a className='bg-white flex justify-center items-center text-xl text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full' href="#"><i class="fa-brands fa-facebook"></i></a>
                <a className='bg-white flex justify-center items-center text-xl text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full' href="#"><i class="fa-brands fa-youtube"></i></a>
                <a className='bg-white flex justify-center items-center text-xl text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full' href="#"><i class="fa-brands fa-instagram"></i></a>
                <a className='bg-white flex justify-center items-center text-xl text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full' href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                <a className='bg-white flex justify-center items-center text-xl text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300 font-medium uppercase w-9 h-9 rounded-full' href="#"><i class="fa-brands fa-x-twitter"></i></a>
                </div>
                <div className='flex justify-center items-center gap-x-5'>
                  <p className='text-white hover:text-pink-600 transition-all duration-300 font-medium uppercase'>Copyright © {year}. All Rights Reserved</p>
                </div>
              </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default App