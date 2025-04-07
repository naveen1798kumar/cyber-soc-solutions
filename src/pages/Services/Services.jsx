import { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import PartnersCarousel from "../../components/PartnersCarousel";
import ServiceList from "../../pages/Services/ServiceList";
import ServiceCategory from "../../pages/Services/ServiceCategory";

import servicesBanner from "../../assets/banners/services-banner.jpg";
import webIcon from "../../assets/icons/web-development.png";
import digitalMarketingIcon from "../../assets/icons/digital-marketing.png";
import networkingIcon from "../../assets/icons/networking-security.png";
import automationIcon from "../../assets/icons/home-automation.png";

const Services = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const handleCategorySelect = (selectedCategory) => {
    setOpenCategory(selectedCategory);
  };

  // ✅ Move this function **above** return
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (openCategory) {
      setTimeout(() => {
        const element = document.getElementById("service-id");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [openCategory]);

  const icons = {
    webDevelopment: webIcon,
    digitalMarketing: digitalMarketingIcon,
    networking: networkingIcon,
    automation: automationIcon,
  };

  const iconStyle = "h-10 w-10 transition-transform duration-300 hover:scale-115"; ;

  return (
    <div className=" bg-gradient-to-r from-[#d9e5fe] via-[#f5f6f8] to-[#d9e5fe] ">
      <Banner
        backgroundImage={servicesBanner}
        title="Services We Offer"
        description="We provide cutting-edge cybersecurity and automation solutions to protect businesses from modern threats and enhance operational efficiency."
      />

      <div className="relative px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 lg:px-16 lg:py-12  overflow-x-hidden">
        {!openCategory ? (
          <ServiceList onCategorySelect={handleCategorySelect} />
        ) : (
          <ServiceCategory category={openCategory} onClose={() => setOpenCategory(null)} />
        )}

        {/* ✅ Sidebar for quick navigation */}
<aside className="fixed top-1/2  right-0 -translate-y-1/2 bg-black/50 text-white p-3 rounded-md shadow-lg scale-55 md:scale-75 hover:scale-100 transition-transform duration-300 ease-in-out">
  <ul className="space-y-4">
    {/* Web Development */}
    <li>
      <div className="relative group flex items-center">
        <button onClick={() => { scrollToSection("websites-and-softwares"), setOpenCategory(null); }} className="hover:text-blue-400">
          <img src={icons.webDevelopment} alt="Web Dev" className={iconStyle} />
        </button>
        <span className="absolute right-12 bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 transform translate-x-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
          Web Development
        </span>
      </div>
    </li>

    {/* Digital Marketing */}
    <li>
      <div className="relative group flex items-center">
        <button onClick={() => { scrollToSection("digital-marketing"), setOpenCategory(null); }} className="hover:text-blue-400">
          <img src={icons.digitalMarketing} alt="Digital Marketing" className={iconStyle} />
        </button>
        <span className="absolute right-12 bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 transform translate-x-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
          Digital Marketing
        </span>
      </div>
    </li>

    {/* Networking */}
    <li>
      <div className="relative group flex items-center">
        <button onClick={() => { scrollToSection("networking"), setOpenCategory(null); }} className="hover:text-blue-400">
          <img src={icons.networking} alt="Networking" className={iconStyle} />
        </button>
        <span className="absolute right-12 bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 transform translate-x-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
          Networking
        </span>
      </div>
    </li>

    {/* Automation */}
    <li>
      <div className="relative group flex items-center">
        <button onClick={() => { scrollToSection("automation"), setOpenCategory(null); }} className="hover:text-blue-400">
          <img src={icons.automation} alt="Automation" className={iconStyle} />
        </button>
        <span className="absolute right-12 bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 transform translate-x-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
          Automation
        </span>
      </div>
    </li>
  </ul>
</aside>
      <PartnersCarousel />
      </div>


    </div>
  );
};

export default Services;



  {/* 
<button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
  Learn More
</button>
  */}

  {/* <div className="bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full mx-auto w-24 h-24 flex items-center justify-center transition-all duration-300">
  <i className={`${icon} text-white text-2xl group-hover:scale-115`} />
  </div> 
  */}