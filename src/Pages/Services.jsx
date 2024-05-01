import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const Services = () => {
    return <>
        <Header />
        <section className="pt-28 pb-8 px-6">
            <ul className="text-lg flex-wrap flex justify-center items-center list-disc gap-x-8 gap-y-3 max-w-[1500px] mx-auto font-normal">
                <li className="px-2 text-white hover:text-pink-600 pb-6 border-b border-[rgba(255,255,255,0.6)] hover:border-pink-600 hover:border-b-2 transition-all duration-300"><a href="#section1">Hair Dressing & Hair Styling</a></li>
                <li className="px-2 text-white hover:text-pink-600 pb-6 border-b border-[rgba(255,255,255,0.6)] hover:border-pink-600 hover:border-b-2 transition-all duration-300"><a href="#section2">Beauty & Skin Treatments</a></li>
                <li className="px-2 text-white hover:text-pink-600 pb-6 border-b border-[rgba(255,255,255,0.6)] hover:border-pink-600 hover:border-b-2 transition-all duration-300"><a href="#section3">Pre-Bridal & Bridal Packages</a></li>
                <li className="px-2 text-white hover:text-pink-600 pb-6 border-b border-[rgba(255,255,255,0.6)] hover:border-pink-600 hover:border-b-2 transition-all duration-300"><a href="#section4">Makeup Services</a></li>
            </ul>
        </section>
        <section id="section1" className="px-6 py-16">
            <div className="container mx-auto flex-col md:flex-row flex justify-center gap-x-6 gap-y-5">
                <div className="w-full md:w-1/2 relative z-10 md:pt-10">
                    <h2 className="stock-heading text-[2.75rem] lg:text-[4.5rem] 2xl:text-[6rem] md:text-left text-center w-full lg:w-fit absolute -z-10 -top-[1.75rem] lg:-top-[1.75rem]">
                        Baylen de louis
                    </h2>
                    <h2 className="text-[2.75rem] lg:text-[4.5rem] 2xl:text-[6rem] text-white text-center md:text-left font-bold">
                        SERVICES
                    </h2>
                    <p className="text-white text-lg">Our customers are discerning in every aspect – and deservedly. <br /><br />

                        In the realm of beauty care and pampering, amidst the plethora of choices, selecting the salon that promises impeccable skin, smooth hair, or impeccably painted nails might result in significant challenges.<br /><br />

                        Abandon the experimentation as our professionals have curated the pinnacle of services to assure that your upcoming beautification endeavor delivers nothing short of impeccable outcomes.</p>
                    <img className="xl:max-w-[500px] animate-pulse max-w-[300px] opacity-10 absolute hidden lg:block top-1/2 left-1/2 z-50" src="./Res/watermark-icon.png" alt="" />
                </div>
                <div className="pr-1 hover:before:border-pink-600 before:transition-all before:duration-300 w-full md:w-1/2 relative before:absolute before:w-full before:h-full before:border-4 before:bg-transparent before:animate-updown before:left-4 before:border-white before:z-20">
                    <img className="" src="./Res/services-makeup.jpg" alt="" />
                </div>
            </div>
        </section>
        <section className="px-6 py-16">
            <div className="container mx-auto flex-col md:flex-row flex justify-center gap-x-6 gap-y-5">
                <div className="pr-1 hover:before:border-pink-600 before:transition-all before:duration-300 w-full md:w-1/2 z-10 relative before:absolute before:w-full before:h-full before:border-4 before:bg-transparent before:animate-updown before:right-4 before:border-white before:z-20">
                    <img className="" src="./Res/services-haircut.jpg" alt="" />
                </div>
                <div className="w-full md:w-1/2 relative z-10">
                    <div className="text-white flex items-center gap-x-4 pl-6 justify-center md:justify-start"><span className="w-[100px] h-[2px] bg-white"></span><p className="font-bold">01</p></div>
                    <h2 className="text-[2.75rem] mb-10 lg:text-[3.5rem] text-pink-600 leading-[1.1] text-center md:text-left font-bold uppercase">
                        Hairdressing and hair styling
                    </h2>
                    <p className="text-white text-lg">A successfully executed hair transformation can greatly enhance one's overall look.<br /><br />

                        Let our team of skilled artisans deftly navigate through your locks to provide you with the most enchanting hair transformations using lavish treatments, intensive therapies, and tailored hair care regimens.</p>
                    <h2 className="stock-heading-white text-[2.75rem] lg:text-[4.5rem] 2xl:text-[6rem] md:text-left text-center w-full lg:w-fit absolute -z-10 top-1/2">
                        Baylen de louis
                    </h2>
                </div>
            </div>
        </section>

        <section id="section2" className="px-6 py-16">
            <div className="container mx-auto flex-col md:flex-row flex justify-center gap-x-6 gap-y-5">
                <div className="w-full md:w-1/2 relative">
                    <div className="text-white flex items-center gap-x-4 pl-6 justify-center md:justify-start"><span className="w-[100px] h-[2px] bg-white"></span><p className="font-bold">02</p></div>
                    <h2 className="text-[2.75rem] mb-10 lg:text-[3.5rem] text-pink-600 leading-[1.1] text-center uppercase md:text-left font-bold">
                        Beauty and skin care services
                    </h2>
                    <p className="text-white text-lg">Once you step into the Baylen Salon, it’s effortless to feel at ease & certainly challenging to depart.<br /><br />

                        With an array of indulgent offerings and top-tier products, our globally renowned makeup artists and aestheticians guarantee you maintain a glamorous appearance.</p>
                    <img className="xl:max-w-[225px] max-w-[100px] opacity-60 animate-pulse absolute w-full hidden lg:block top-1/2 left-[35%] z-50" src="./Res/Baylen-b.png" alt="" />
                </div>
                <div className="pr-1 hover:before:border-pink-600 before:transition-all before:duration-300 w-full md:w-1/2 relative before:absolute before:w-full before:h-full before:border-4 before:bg-transparent before:animate-updown before:left-4 before:border-white before:z-20">
                    <img className="" src="./Res/services-beauty.jpg" alt="" />
                </div>
            </div>
        </section>

        <section id="section3" className="px-6 py-16">
            <div className="container mx-auto flex-col md:flex-row flex justify-center gap-x-6 gap-y-5">
                <div className="pr-1 hover:before:border-pink-600 before:transition-all before:duration-300 w-full md:w-1/2 z-10 relative before:absolute before:w-full before:h-full before:border-4 before:bg-transparent before:animate-updown before:right-4 before:border-white before:z-20">
                    <img className="object-cover w-full" src="./Res/services-bridal.jpg" alt="" />
                </div>
                <div className="w-full md:w-1/2 relative z-10">
                    <div className="text-white flex items-center gap-x-4 pl-6 justify-center md:justify-start"><span className="w-[100px] h-[2px] bg-white"></span><p className="font-bold">03</p></div>
                    <h2 className="text-[2.75rem] mb-10 lg:text-[3.5rem] text-pink-600 leading-[1.1] uppercase text-center md:text-left font-bold">
                        Pre-bridal and bridal services
                    </h2>
                    <p className="text-white text-lg">Whether you're preparing to walk down the aisle or attending your closest friend's wedding, we can ensure you appear flawless and stunning.<br /><br />

                        Count on us to provide captivating, attention-grabbing looks for each bridal party.</p>
                    <h2 className="stock-heading-white text-[2.75rem] 2xl:text-[4rem] md:text-left text-center w-full lg:w-fit absolute -z-10 top-1/2">
                        Celebrety Family Salon
                    </h2>
                    <a href="/book-appointment" className="text-white flex items-center justify-between max-w-[230px] pl-6 bg-[rgba(219,39,119,0.3)] border rounded-md text-xl border-pink-600 md:text-left text-center w-full absolute -z-10 top-[60%]">
                        <p>Book Now</p>
                        <span><i className="fa-solid fa-arrow-right-long py-4 px-6 bg-[rgba(219,39,119,0.4)] text-base"></i></span>
                    </a>
                </div>
            </div>
        </section>

        <section id="section4" className="px-6 py-16">
            <div className="container mx-auto flex-col md:flex-row flex justify-center gap-x-6 gap-y-5">
                <div className="w-full md:w-1/2 relative">
                    <div className="text-white flex items-center gap-x-4 pl-6 justify-center md:justify-start"><span className="w-[100px] h-[2px] bg-white"></span><p className="font-bold">04</p></div>
                    <h2 className="text-[2.75rem] mb-10 lg:text-[3.5rem] text-pink-600 leading-[1.1] text-center uppercase md:text-left font-bold">
                        Our makeup offerings
                    </h2>
                    <p className="text-white text-lg">As someone wisely noted, "Makeup is self-confidence applied directly to the face."<br /><br />

                        The art of makeup application is one we hold in high regard. Your face serves as our canvas, and our expert aestheticians and artists are dedicated to crafting only masterpieces.</p>
                    <img className="xl:max-w-[500px] animate-pulse max-w-[300px] opacity-10 absolute hidden lg:block top-1/2 left-1/2 z-50" src="./Res/watermark-icon.png" alt="" />
                </div>
                <div className="pr-1 hover:before:border-pink-600 before:transition-all before:duration-300 w-full md:w-1/2 z-10 relative before:absolute before:w-full before:h-full before:border-4 before:bg-transparent before:animate-updown before:left-4 before:border-white before:z-20">
                    <img className="" src="./Res/services-makeup-new.jpg" alt="" />
                </div>
            </div>
        </section>

        <section className="px-6 py-16">
            <div className="container flex mx-auto">
                <div>
                    <div className="text-white flex items-center gap-x-4 pl-6 justify-center md:justify-start"><span className="w-[100px] h-[2px] bg-white"></span><p className="font-bold">05</p></div>
                    <h2 className="text-[2.5rem] mb-5 lg:text-[3.5rem] text-pink-600 leading-[1.1] text-center md:text-left font-black">
                        OUR MAKEUP SERVICES
                    </h2>
                    <div className="relative z-10">
                        <img className="absolute top-[10%] w-[500px] left-0 -z-[1] min-h-[800px]" src="./Res/square1.png" alt="" />
                        <div className="pl-20 sm:pl-28 text-white z-10">
                            <h1 className="font-playfair text-white text-[1.75rem] sm:text-[2.5rem] md:text-[3rem] font-semibold leading-[1.2]">Discover Our Array <br />
                                Of Makeover Sessions <br />
                                Our Customer’s Desires.</h1>
                            <div className="flex sm:items-center gap-x-10 mt-10 sm:mt-20 flex-col sm:flex-row gap-y-5">
                                <div className="flex items-start gap-x-10 max-w-[300px] w-full flex-col">
                                    <h1 className="font-bold text-lg text-pink-600 uppercase">Elegance Elevate</h1>
                                    <ul className="mt-5 flex flex-col text-sm list-disc gap-y-1">
                                        <li>Revamp Trim</li>
                                        <li>Multifaceted Hue</li>
                                        <li>Curly Blowout & Design</li>
                                        <li>Hand & Foot Grooming</li>
                                        <li>Subtle Cosmetics</li>
                                    </ul>
                                </div>
                                <div className="flex items-start gap-x-10 max-w-[300px] w-full flex-col">
                                    <h1 className="font-bold text-lg text-pink-600 uppercase">Catwalk-Ready</h1>
                                    <ul className="mt-5 flex flex-col text-sm list-disc gap-y-1">
                                        <li>Makeover Trim</li>
                                        <li>Shaded Streaks</li>
                                        <li>Polished Updo</li>
                                        <li>Hair Therapy</li>
                                        <li>Refined Hand & Foot Care</li>
                                        <li>Hair Removal</li>
                                        <li>Cosmetics</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-10 mt-5 md:mt-20">
                                <div className="flex items-start gap-x-10 max-w-[300px] w-full flex-col">
                                    <h1 className="font-bold text-lg text-pink-600 uppercase">Celebrity-Approved</h1>
                                    <ul className="mt-5 flex flex-col text-sm list-disc gap-y-1">
                                    <li>Makeover Trim</li>
                                        <li>Overall Dye</li>
                                        <li>Shaded Streaks</li>
                                        <li>Hair Therapy</li>
                                        <li>Elaborate Coiffure</li>
                                        <li>Refined Hand & Foot Care</li>
                                        <li>Complexion Therapy</li>
                                        <li>Hair Removal</li>
                                        <li>Nighttime Cosmetics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[500px] lg:block hidden h-auto w-full relative">
                    <img className="rotate-90 object-contain absolute w-[600px] bottom-1/2 py-10 opacity-30 animate-right_left" src="./Res/watermark-name.png" alt="" />
                </div>
            </div>
        </section>

        <section className="pt-32 px-4">
            <div className="container mx-auto max-h-[400px] h-auto overflow-hidden">
                <img className="w-full object-cover max-h-[500px] h-auto object-center" src="./Res/services-footer.jpg" alt="" />
            </div>
        </section>

        <Footer />
    </>;
};

export default Services;
