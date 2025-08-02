import { useState } from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";
import ServiceList from "../../pages/Services/ServiceList";
import ServiceCategory from "../../pages/Services/ServiceCategory";

import servicesBanner from "../../assets/banners/services-banner.jpg";

function Service() {
  const [openCategory, setOpenCategory] = useState(null);

  const handleCategorySelect = (selectedCategory) => {
    setOpenCategory(selectedCategory);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setOpenCategory(null);
  };

  return (
    <div className="bg-gradient-to-r from-[#d9e5fe] via-[#f5f6f8] to-[#d9e5fe] min-h-screen">
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

    {/* Title Section */}
      <section className="max-w-7xl mx-auto px-4 py-10 overflow-hidden">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Transform Your Business with Our Expertise
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Discover how CyberSoc Solutions empowers businesses with secure,
          scalable, and innovative IT solutions to optimize operations, enhance
          security, and drive growth.
        </p>
      </div>
        <ServiceList  />
      </section>

      {openCategory && (
        <>
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300">
            <ServiceCategory category={openCategory} onClose={closeModal} />
          </div>
          <style>{`body { overflow: hidden; }`}</style>
        </>
      )}
    </div>
  );
}

export default Service;