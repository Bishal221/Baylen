import React, { useState } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [mapSrc, setMapSrc] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.981438938617!2d85.3248989!3d23.352687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1bcbbc40e23%3A0xa6aea8192f8f434!2sBAYLEN%20d%C3%A9%20Louis%2C%20Best%20Salon%20of%20Main%20Road%2C%20Ranchi!5e0!3m2!1sen!2sin!4v1708253359769!5m2!1sen!2sin"
  );

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

  const PhoneButton = ({ phoneNumber, text }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
      setIsClicked(!isClicked);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <div className="flex gap-x-4">
        <button
          className="flex gap-x-2 relative group transition-all duration-300"
          onClick={handleButtonClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="text-white">
            <i className="fa-solid fa-phone"></i>
          </span>
          <p className="text-pink-600 font-semibold text-[1.1rem]">{text}</p>
          {(isHovered || isClicked) && (
            <a
              href={`tel:${phoneNumber}`}
              className="absolute block transition-all duration-300 top-[105%] shadow-lg w-fit px-4 py-1 bg-[rgba(255,255,255)] rounded-md font-semibold text-pink-600 left-1/2 -translate-x-1/2"
            >
              {phoneNumber}
            </a>
          )}
        </button>
      </div>
    );
  };

  return (
    <>
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
                  <PhoneButton phoneNumber="8877001122" text="Salon" />
                  <PhoneButton phoneNumber="8877001123" text="Academy" />
                  <PhoneButton phoneNumber="8877001130" text="Franchise" />
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
    </>
  );
};

export default Footer;
