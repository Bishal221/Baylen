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
        <section className="border border-white">
            <div className="container mx-auto flex justify-center items-center gap-x-6 gap-y-5">
                <div className="w-full md:w-1/2 relative z-10">
                    <h2 className="stock-heading sm:text-[6rem] text-[2.75rem] lg:text-left text-center w-full lg:w-fit absolute -z-10 sm:-top-[3.5rem] -top-[1.75rem] sm:-left-[.5rem]">
                        Baylen de louis
                    </h2>
                    <h2 className="text-[3.75rem] sm:text-[6rem] lg:text-left text-center text-white font-bold">
                        SERVICES
                    </h2>
                    <p className="text-white">Our clientele is picky about everything – and rightly so. <br /><br />

                        In the world of primping and grooming, given the overwhelming abundance of options, picking the salon that will guarantee flawless skin, silky locks or neatly lacquered nails could lead to a whole lot of trouble. <br /><br />

                        Ditch the trial-and-error because our experts have rounded up the ‘cream of the crop’ services to ensure your next beautifying venture yields nothing less than perfect results.</p>
                </div>
                <div className="w-full md:w-1/2">
                    <img className="w-[80%] h-[600px] z-10 relative after:absolute" src="https://images.unsplash.com/photo-1594647210801-5124307f3d51?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
        </section>

        <section id="section1">
            <section className="py-28">
                <div className="container mx-auto flex justify-center items-center gap-x-6 gap-y-5 padding" style={{ padding: "5px", margin: "6px" }}>
                    <div className="w-full md:w-1/2 padding p-6 m-4">
                        <img className="w-[80%] h-[550px] z-10 relative after:absolute" src="https://images.unsplash.com/photo-1594647210801-5124307f3d51?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="w-full md:w-1/2 relative z-10">
                        <div className="hairdressing">
                            <h2 className="text-[2rem] sm:text-[4.2rem] lg:text-left text-center text-pink-600 font-bold">
                                Hair Dressing & Hair Styling
                            </h2>
                        </div>

                        <p className="text-white">Our clientele is picky about everything – and rightly so. <br /><br />

                            In the world of primping and grooming, given the overwhelming abundance of options, picking the salon that will guarantee flawless skin, silky locks or neatly lacquered nails could lead to a whole lot of trouble. <br /><br />

                            Ditch the trial-and-error because our experts have rounded up the ‘cream of the crop’ services to ensure your next beautifying venture yields nothing less than perfect results.</p>
                    </div>
                </div>
            </section>
        </section>
        <section id="section2">
            <section className=" py-28">
                <div className="container mx-auto flex justify-center items-center gap-x-6 gap-y-5">
                    <div className="w-full md:w-1/2 relative z-10">
                        <h2 className="text-[3.75rem] sm:text-[6rem] lg:text-left text-center text-white font-bold">
                            Beauty & Skin Treatments
                        </h2>
                        <p className="text-white">Our clientele is picky about everything – and rightly so. <br /><br />

                            In the world of primping and grooming, given the overwhelming abundance of options, picking the salon that will guarantee flawless skin, silky locks or neatly lacquered nails could lead to a whole lot of trouble. <br /><br />

                            Ditch the trial-and-error because our experts have rounded up the ‘cream of the crop’ services to ensure your next beautifying venture yields nothing less than perfect results.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img className="w-[80%] h-[600px] z-10 relative after:absolute" src="https://images.unsplash.com/photo-1594647210801-5124307f3d51?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </div>
            </section>
        </section>

        <section id="section3">
            <section className="py-28">
                <div className="container mx-auto flex justify-center items-center gap-x-6 gap-y-5 padding" style={{ padding: "5px", margin: "6px" }}>
                    <div className="w-full md:w-1/2 padding p-6 m-4">
                        <img className="w-[80%] h-[550px] z-10 relative after:absolute" src="https://images.unsplash.com/photo-1594647210801-5124307f3d51?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="w-full md:w-1/2 relative z-10">
                        <div className="hairdressing">
                            <h2 className="text-[2rem] sm:text-[4.2rem] lg:text-left text-center text-pink-600 font-bold">
                            Pre-Bridal & Bridal Packages
                            </h2>
                        </div>

                        <p className="text-white">Our clientele is picky about everything – and rightly so. <br /><br />

                            In the world of primping and grooming, given the overwhelming abundance of options, picking the salon that will guarantee flawless skin, silky locks or neatly lacquered nails could lead to a whole lot of trouble. <br /><br />

                            Ditch the trial-and-error because our experts have rounded up the ‘cream of the crop’ services to ensure your next beautifying venture yields nothing less than perfect results.</p>
                    </div>
                </div>
            </section>
        </section>

        <section id="section4">
        <section className=" py-28">
                <div className="container mx-auto flex justify-center items-center gap-x-6 gap-y-5">
                    <div className="w-full md:w-1/2 relative z-10">
                        <h2 className="text-[3.75rem] sm:text-[6rem] lg:text-left text-center text-pink-600 font-bold">
                        Makeup Services
                        </h2>
                        <p className="text-white">Our clientele is picky about everything – and rightly so. <br /><br />

                            In the world of primping and grooming, given the overwhelming abundance of options, picking the salon that will guarantee flawless skin, silky locks or neatly lacquered nails could lead to a whole lot of trouble. <br /><br />

                            Ditch the trial-and-error because our experts have rounded up the ‘cream of the crop’ services to ensure your next beautifying venture yields nothing less than perfect results.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img className="w-[80%] h-[600px] z-10 relative after:absolute" src="https://images.unsplash.com/photo-1594647210801-5124307f3d51?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </div>
            </section>
        </section>
        <Footer />
    </>;
};

export default AboutUs;
