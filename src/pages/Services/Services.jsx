import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
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
      {/*  */}
      <Helmet>
        <title>Our Services | Cyber Security, Automation & Web Development</title>
        <meta
          name="description"
          content="Explore CyberSoc's wide range of services, including Networking, LAN, CCTV, Automation, Cyber Security, Web and Software Development, and Digital Marketing."
        />
        <meta
          name="keywords"
          content="Cyber Security, Automation, Networking, LAN, CCTV, Web Development, Software Development, Digital Marketing, Coimbatore"
        />
        <meta name="author" content="CyberSoc" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.cybersoc.com/services" />

         {/* Structured Data for Services Page */}
         <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Services - CyberSoc Solutions",
              "url": "https://www.cybersocsolutions.com/services",
              "description": "Explore the cybersecurity, automation, and IT services offered by CyberSoc Solutions to protect your business.",
              "mainEntityOfPage": "https://www.cybersocsolutions.com/services"
            }
          `}
        </script>
      </Helmet>

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
  