import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Franchise = () => {
    return (
        <>
        <Header />
            <section id="tabs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <nav>
                                <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                    <a
                                        className="nav-item nav-link"
                                        id="nav-profile-tab"
                                        data-toggle="tab"
                                        href="#frkit"
                                        role="tab"
                                        aria-controls="nav-profile"
                                        aria-selected="false"
                                    >
                                        Franchise Kit
                                    </a>
                                    <a
                                        className="nav-item nav-link"
                                        id="nav-contact-tab"
                                        data-toggle="tab"
                                        href="#beauty-skin"
                                        role="tab"
                                        aria-controls="nav-contact"
                                        aria-selected="false"
                                    >
                                        Our Modules
                                    </a>
                                    <a
                                        className="nav-item nav-link"
                                        id="nav-about-tab"
                                        data-toggle="tab"
                                        href="#enquire-now"
                                        role="tab"
                                        aria-controls="nav-about"
                                        aria-selected="false"
                                    >
                                        Enquire Now
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="tab-content py-3 px-3 px-sm-0 service" id="nav-tabContent">
                    <div
                        className="tab-pane fade ptb-60"
                        id="hair-dressing"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                    >
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-1" />
                                <div className="col-md-10">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="left-content">
                                                <div className="big-heading">
                                                    <h1 className="no franchiseTag">Franchise</h1>
                                                </div>
                                                <div className="cnt">
                                                    <p>
                                                        We believe in providing the world-class salon experience
                                                        to the people across India, hence we are partnering with
                                                        our premium franchisee.
                                                    </p>
                                                </div>
                                                <div id="frkit" className="big-heading second">
                                                    <h1 className="no kitFran">
                                                        Franchise <span>Kit</span>
                                                    </h1>
                                                    <div className="download">
                                                        <a
                                                            className="d-link"
                                                            target="_blank"
                                                            download=""
                                                            href="https://frn.s3.ftvassets.in/saleskits/franchise/hnb/ftv-salon-saleskit.pdf"
                                                        >
                                                            FTV Salon Franchise Kit <br />
                                                            for <span>Download.</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="ser-img">
                                                <img src="images/franchise-intro.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade ptb-60"
                        id="beauty-skin"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                    >
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-1" />
                                <div className="col-md-10">
                                    <div className="row m-0 p-0">
                                        <div className="col-lg-12">
                                            <div className="big-title colorSet1">
                                                <h2>Modules</h2>
                                            </div>
                                            <div className="cnts">
                                                <p>
                                                    There are 3 modules in the FTV Salon
                                                    <br /> Franchise to choose from.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row  m-0 p-0">
                                        <div className="col-lg-4 moduleLuxury ml-md-0 mr-md-0 pr-md-0 pl-md-0 mt-4 mb-md-5">
                                            <span className="numModule">01</span>
                                            <div className="module-box">
                                                <div className="inner-box top-120">
                                                    <h3>LITE MODULE</h3>
                                                    <ul>
                                                        <li>
                                                            FRANCHISE FEES <br />
                                                            <span>Rs. 15 LACS </span>
                                                        </li>
                                                        <li>
                                                            AREA UP TO <br />
                                                            <span>750 to 1000 Sq. Ft.</span>
                                                        </li>
                                                        <li>
                                                            TOTAL INVESTMENT <br />
                                                            <span>Rs. 60 to 80 LACS</span>
                                                        </li>
                                                        <li>
                                                            Royalty <br />
                                                            <span>10%</span>
                                                        </li>
                                                        <li>
                                                            ROI <br />
                                                            <span>60% (approx in 1 year)</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 regularModule ml-md-0 mr-md-0 pr-md-0 pl-md-0 mb-md-5">
                                            <span className="numModule">02</span>
                                            <div className="module-box">
                                                <div className="inner-box top-240 ">
                                                    <h3>REGULAR MODULE</h3>
                                                    <ul>
                                                        <li>
                                                            FRANCHISE FEES <br />
                                                            <span>Rs. 25 Lacs </span>
                                                        </li>
                                                        <li>
                                                            AREA UP TO <br />
                                                            <span>1000 to 1500 Sq. Ft.</span>
                                                        </li>
                                                        <li>
                                                            TOTAL INVESTMENT <br />
                                                            <span>Rs. 80 Lacs to 1 CR</span>
                                                        </li>
                                                        <li>
                                                            Royalty <br />
                                                            <span>10%</span>
                                                        </li>
                                                        <li>
                                                            ROI <br />
                                                            <span>60% (approx in 1.5 year)</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 ml-md-0 mr-md-0 pr-md-0 pl-md-0 liteModule mb-md-5">
                                            <span className="numModule">03</span>
                                            <div className="module-box">
                                                <div className="inner-box ">
                                                    <h3>LUXURY MODULE</h3>
                                                    <ul>
                                                        <li>
                                                            FRANCHISE FEES <br />
                                                            <span>Rs. 35 Lacs</span>
                                                        </li>
                                                        <li>
                                                            AREA UP TO <br />
                                                            <span>1500 to 3000 Sq. Ft.</span>
                                                        </li>
                                                        <li>
                                                            TOTAL INVESTMENT <br />
                                                            <span>Rs. 1 CR. to 1.25 CR.</span>
                                                        </li>
                                                        <li>
                                                            Royalty <br />
                                                            <span>10%</span>
                                                        </li>
                                                        <li>
                                                            ROI <br />
                                                            <span>60% (approx in 2 year)</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade ptb-60"
                        id="enquire-now"
                        role="tabpanel"
                        aria-labelledby="nav-about-tab"
                    >
                        <div className="container-fluid">
                            <div className="row ">
                                <div className="col-lg-7">
                                    <div className="thumb-img">
                                        <img src="images/franchise-form.png" />
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="form">
                                        <div className="title colorSet2">
                                            <h1>
                                                Enquire <br />
                                                <span>Now</span>
                                            </h1>
                                        </div>
                                        <form
                                            method="post"
                                            action="/api/enquireForm.php"
                                            id="enquiryForm"
                                        >
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Your Name"
                                                required=""
                                                autoComplete="off"
                                            />
                                            <select
                                                className="js-example-basic-single form-control"
                                                name="state"
                                                id="stateSelect"
                                                required=""
                                                autoComplete="off"
                                            >
                                                <option disabled="" selected="">
                                                    Select State
                                                </option>
                                            </select>
                                            <select
                                                className="js-example-basic-single form-control"
                                                name="city"
                                                id="citySelect"
                                                required=""
                                                autoComplete="off"
                                            >
                                                <option disabled="" selected="">
                                                    Select City
                                                </option>
                                            </select>
                                            <select
                                                className="js-example-basic-single form-control"
                                                name="investment_capacity"
                                                required=""
                                                autoComplete="off"
                                            >
                                                <option value="default">Investment Capacity</option>
                                                <option value="Lite- 80Lac">Lite- 80Lac</option>
                                                <option value="Regular- 1Cr">Regular- 1Cr</option>
                                                <option value="Luxury- 1.25Cr">Luxury- 1.25Cr</option>
                                            </select>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Email Address"
                                                required=""
                                                autoComplete="off"
                                            />
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                placeholder="Contact Number "
                                                minLength={10}
                                                maxLength={10}
                                                oninput="this.value = this.value.replace(/[^0-9.]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');"
                                                required=""
                                                autoComplete="off"
                                            />
                                            <textarea
                                                name="message"
                                                id="message"
                                                placeholder="Message"
                                                defaultValue={""}
                                            />
                                            <input
                                                type="submit"
                                                className="sub"
                                                name="submit"
                                                defaultValue="Submit"
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade ptb-100"
                        id="future"
                        role="tabpanel"
                        aria-labelledby="nav-about-tab"
                    >
                        <div className="container-fluid">
                            <div className="row">
                                <div className="FBtmImg">
                                    <img className="img-fluid" src="images/franchise-bottom-bg.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default Franchise