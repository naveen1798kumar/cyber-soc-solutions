import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";
import ServiceList from "../../pages/Services/ServiceList";
import ServiceCategory from "../../pages/Services/ServiceCategory";

import servicesBanner from "../../assets/banners/services-banner.jpg";
import webIcon from "../../assets/icons/web-development.png";
import digitalMarketingIcon from "../../assets/icons/digital-marketing.png";
import networkingIcon from "../../assets/icons/networking-security.png";
import automationIcon from "../../assets/icons/home-automation.png";

function Service() {

      const [openCategory, setOpenCategory] = useState(null);
    
      const handleCategorySelect = (selectedCategory) => {
        setOpenCategory(selectedCategory);
      };
    
    const closeModal = () => {
        document.body.style.overflow = "auto";
        setOpenCategory(null);
    };
      
    const icons = {
        webDevelopment: webIcon,
        digitalMarketing: digitalMarketingIcon,
        networking: networkingIcon,
        automation: automationIcon,
      };
    
      const iconStyle = "h-10 w-10 transition-transform duration-300 hover:scale-115"; 

      
  return (
    <div  className=" bg-gradient-to-r from-[#d9e5fe] via-[#f5f6f8] to-[#d9e5fe] ">
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
        subTitle="Comprehensive Solutions for Modern Businesses"
        description="We provide cutting-edge cybersecurity and automation solutions to protect businesses from modern threats and enhance operational efficiency."
    />

    <div className="relative px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 overflow-x-hidden">

        <ServiceList onCategorySelect={handleCategorySelect} />

        {openCategory && (
        <>
        <style>{`body { overflow: hidden; }`}</style>

        <div className="fixed inset-0 z-[999] flex items-start justify-center bg-black/60 backdrop-blur-sm">
        <div className="relative bg-white w-full h-full overflow-y-auto scrollbar-hide p-6 pt-20 rounded-none">
            <ServiceCategory category={openCategory} onClose={closeModal} />
        </div>
        </div>
        </>
        )}
      </div>
    </div>
  )
}

export default Service