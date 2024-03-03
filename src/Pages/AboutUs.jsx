import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const AboutUs = () => {
    return <>
        <Header />
        <section className="pt-28 pb-8 px-6">
            <ul className="text-pink-500 text-lg flex-wrap flex justify-center items-center list-disc gap-x-8 gap-y-3 max-w-[1500px] mx-auto font-medium">
                <li className="px-2 pb-6 border-b border-[rgba(255,255,255,0.6)] hover:border-pink-600 hover:border-b-2 transition-all duration-300"><a href="#section1">Hair Dressing & Hair Styling</a></li>
                <li className="px-2 pb-6 border-b border-[rgba(255,255,255,0.6)] hover:border-pink-600 hover:border-b-2 transition-all duration-300"><a href="#section2">Beauty & Skin Treatments</a></li>
                <li className="px-2 pb-6 border-b border-[rgba(255,255,255,0.6)] hover:border-pink-600 hover:border-b-2 transition-all duration-300"><a href="#section3">Pre-Bridal & Bridal Packages</a></li>
                <li className="px-2 pb-6 border-b border-[rgba(255,255,255,0.6)] hover:border-pink-600 hover:border-b-2 transition-all duration-300"><a href="#section4">Makeup Services</a></li>
            </ul>
        </section>
        <section id="section1" className="px-6 py-16">
            <div className="container mx-auto flex-col md:flex-row flex justify-center items-center gap-x-6 gap-y-5">
                <div className="w-full md:w-1/2 relative z-10">
                    <h2 className="stock-heading text-[2.75rem] lg:text-[4.5rem] 2xl:text-[6rem] md:text-left text-center w-full lg:w-fit absolute -z-10 -top-[1.75rem] lg:-top-[3.5rem]">
                        Baylen de louis
                    </h2>
                    <h2 className="text-[2.75rem] lg:text-[4.5rem] 2xl:text-[6rem] text-white text-center md:text-left font-bold">
                        SERVICES
                    </h2>
                    <p className="text-white">Our clientele is picky about everything – and rightly so. <br /><br />

                        In the world of primping and grooming, given the overwhelming abundance of options, picking the salon that will guarantee flawless skin, silky locks or neatly lacquered nails could lead to a whole lot of trouble. <br /><br />

                        Ditch the trial-and-error because our experts have rounded up the ‘cream of the crop’ services to ensure your next beautifying venture yields nothing less than perfect results.</p>
                </div>
                <div className="pr-1 w-full md:w-1/2 z-10 relative before:absolute before:w-full before:h-full before:border-4 before:bg-transparent before:top-4 before:left-4 before:border-pink-600 before:z-20">
                    <img className="" src="https://images.unsplash.com/photo-1594647210801-5124307f3d51?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
        </section>
        <section className="px-6 py-16">
            <div className="container mx-auto flex-col md:flex-row flex justify-center items-center gap-x-6 gap-y-5">
                <div className="w-full md:w-1/2">
                    <img className="" src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="text-white flex items-center gap-x-4 pl-6 justify-center md:justify-start"><span className="w-[100px] h-[2px] bg-white"></span><p className="font-bold">01</p></div>
                    <h2 className="text-[2.75rem] mb-10 lg:text-[3.5rem] text-pink-600 leading-[1.1] text-center md:text-left font-bold">
                        BEAUTY AND SKIN TREATMENTS
                    </h2>
                    <p className="text-white">A hair job well done can boost overall appearance significantly.<br /><br />

                        Allow our team of magic wand wielders to expertly manoeuvre around your tresses to give you the most magical hair makeovers with the help of luxurious treatments, intensive therapies & customised hair care rituals.</p>
                </div>
            </div>
        </section>

        <section id="section2" className="px-6 py-16">
            <div className="container mx-auto flex-col md:flex-row flex justify-center items-center gap-x-6 gap-y-5">
                <div className="w-full md:w-1/2">
                    <div className="text-white flex items-center gap-x-4 pl-6 justify-center md:justify-start"><span className="w-[100px] h-[2px] bg-white"></span><p className="font-bold">02</p></div>
                    <h2 className="text-[2.75rem] mb-10 lg:text-[3.5rem] text-pink-600 leading-[1.1] text-center md:text-left font-bold">
                        BEAUTY AND SKIN TREATMENTS
                    </h2>
                    <p className="text-white">Once you are inside the FTV Salon, it’s easy to feel at home & certainly hard to leave.<br /><br />

                        With a plethora of pampering packages and premium products, our internationally acclaimed make-up artists and aestheticians ensure you keep looking glamorous.</p>
                </div>
                <div className="w-full md:w-1/2">
                    <img className="" src="https://images.unsplash.com/photo-1531299244174-d247dd4e5a66?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
        </section>

        <section id="section3" className="px-6 py-16">
            <div className="container mx-auto flex-col md:flex-row flex justify-center items-center gap-x-6 gap-y-5">
                <div className="w-full md:w-1/2">
                    <img className="" src="https://images.unsplash.com/photo-1610047614256-023d7c028d0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJpZGFsfGVufDB8fDB8fHww" alt="" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="text-white flex items-center gap-x-4 pl-6 justify-center md:justify-start"><span className="w-[100px] h-[2px] bg-white"></span><p className="font-bold">03</p></div>
                    <h2 className="text-[2.75rem] mb-10 lg:text-[3.5rem] text-pink-600 leading-[1.1] text-center md:text-left font-bold">
                        PRE-BRIDAL AND BRIDAL PACKAGES
                    </h2>
                    <p className="text-white">Whether you’re walking down the aisle or attending your best friend’s wedding we can make you flawless and drop dead gorgeous.<br /><br />

                        Trust us to deliver striking, statement-making looks for every bridal entourage.</p>
                </div>
            </div>
        </section>

        <section id="section4" className="px-6 py-16">
            <div className="container mx-auto flex-col md:flex-row flex justify-center items-center gap-x-6 gap-y-5">
                <div className="w-full md:w-1/2">
                    <div className="text-white flex items-center gap-x-4 pl-6 justify-center md:justify-start"><span className="w-[100px] h-[2px] bg-white"></span><p className="font-bold">04</p></div>
                    <h2 className="text-[2.75rem] mb-10 lg:text-[3.5rem] text-pink-600 leading-[1.1] text-center md:text-left font-bold">
                        OUR MAKEUP SERVICES
                    </h2>
                    <p className="text-white">Someone once wisely remarked, “Makeup is self-confidence applied directly to the face.”<br /><br />

                        The craft of make-up artistry is one we value and uphold with immense respect. Your face is our canvas & our professional aestheticians & artists are trained to only create masterpieces.</p>
                </div>
                <div className="w-full md:w-1/2">
                    <img className="" src="https://images.unsplash.com/photo-1605813807548-0f9bd3cf043a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
        </section>

        <section className="px-6 py-16">
            <div className="container mx-auto">
                <div className="text-white flex items-center gap-x-4 pl-6 justify-center md:justify-start"><span className="w-[100px] h-[2px] bg-white"></span><p className="font-bold">05</p></div>
                <h2 className="text-[2.5rem] mb-5 lg:text-[3.5rem] text-pink-600 leading-[1.1] text-center md:text-left font-black">
                    OUR MAKEUP SERVICES
                </h2>
                <div className="relative z-10">
                    <img className="absolute top-[10%] w-[500px] left-0 -z-[1] min-h-[715px]" src="./Res/square1.png" alt="" />
                    <div className="pl-20 sm:pl-28 text-white z-10">
                        <h1 className="font-playfair text-white text-[1.75rem] sm:text-[2.5rem] md:text-[3rem] font-semibold leading-[1.2]">Here Are Our Various <br />
                            Makeover Sessions As Per <br />
                            Our Customer’s Needs.</h1>
                        <div className="flex sm:items-center gap-x-10 mt-10 sm:mt-20 flex-col sm:flex-row gap-y-5">
                            <div className="flex items-start gap-x-10 max-w-[300px] w-full flex-col">
                                <h1 className="font-bold text-lg text-pink-600">GLAM UP</h1>
                                <ul className="mt-5 flex flex-col text-sm list-disc gap-y-1">
                                    <li>MAKEOVER HAIRCUT</li>
                                    <li>DIMENSIONAL COLOR</li>
                                    <li>WAVY BLOW DRY & STYLING</li>
                                    <li>MANICURE & PEDICURE</li>
                                    <li>LIGHT MAKEUP</li>
                                </ul>
                            </div>
                            <div className="flex items-start gap-x-10 max-w-[300px] w-full flex-col">
                                <h1 className="font-bold text-lg text-pink-600">GLAM UP</h1>
                                <ul className="mt-5 flex flex-col text-sm list-disc gap-y-1">
                                    <li>MAKEOVER HAIRCUT</li>
                                    <li>DIMENSIONAL COLOR</li>
                                    <li>WAVY BLOW DRY & STYLING</li>
                                    <li>MANICURE & PEDICURE</li>
                                    <li>LIGHT MAKEUP</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-10 mt-5 md:mt-20">
                            <div className="flex items-start gap-x-10 max-w-[300px] w-full flex-col">
                                <h1 className="font-bold text-lg text-pink-600">GLAM UP</h1>
                                <ul className="mt-5 flex flex-col text-sm list-disc gap-y-1">
                                    <li>MAKEOVER HAIRCUT</li>
                                    <li>DIMENSIONAL COLOR</li>
                                    <li>WAVY BLOW DRY & STYLING</li>
                                    <li>MANICURE & PEDICURE</li>
                                    <li>LIGHT MAKEUP</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="pt-32 px-4">
            <div className="container mx-auto max-h-[400px] h-auto overflow-hidden">
                <img className="w-full object-cover max-h-[500px] h-auto object-center" src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFpciUyMHdhc2h8ZW58MHwwfDB8fHww" alt="" />
            </div>
        </section>

        <Footer />
    </>;
};

export default AboutUs;
