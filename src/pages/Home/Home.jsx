import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import OurProjects from "./OurProjects";
import BlogSection from "./BlogSection";
import PartnersCarousel from "../../components/PartnersCarousel";
import PartnersSlide from "./PartnersSlide";
import MisionBanner from "../../assets/banners/mision-and-vision.jpg";

import { FaRegCopyright } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

function Home() {
  const scrolltotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden bg-gray-100">
      {/* Helmet for SEO */}
      <Helmet>
        <title>CyberSoc | Cyber Security & Automation Experts in Coimbatore</title>
        <meta
          name="description"
          content="CyberSoc is a leading company based in Coimbatore, specializing in Networking, LAN, CCTV, Automation, Cyber Security, Web and Software Development, and Digital Marketing."
        />
        <meta
          name="keywords"
          content="Cyber Security, Automation, Networking, LAN, CCTV, Web Development, Software Development, Digital Marketing, Coimbatore"
        />
        <meta name="author" content="CyberSoc" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.cybersoc.com/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="CyberSoc | Cyber Security & Automation Experts in Coimbatore" />
        <meta property="og:description" content="CyberSoc is a leading company based in Coimbatore, specializing in Networking, LAN, CCTV, Automation, Cyber Security, Web and Software Development, and Digital Marketing." />
        <meta property="og:image" content="/cybersoc-logo.png" />
        <meta property="og:url" content="https://www.cybersoc.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CyberSoc | Cyber Security & Automation Experts in Coimbatore" />
        <meta name="twitter:description" content="CyberSoc is a leading company based in Coimbatore, specializing in Networking, LAN, CCTV, Automation, Cyber Security, Web and Software Development, and Digital Marketing." />
        <meta name="twitter:image" content="/cybersoc-logo.png" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CyberSoc",
              "url": "https://www.cybersoc.com/",
              "logo": "/cybersoc-logo.png",
              "description": "CyberSoc is a leading company based in Coimbatore, specializing in Networking, LAN, CCTV, Automation, Cyber Security, Web and Software Development, and Digital Marketing.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 93848 12940",
                "contactType": "Customer Service"
              },
              "sameAs": [
                "https://www.facebook.com/cybersocsolutions",
                "https://www.twitter.com/cybersocsolutions",
                "https://www.linkedin.com/company/cybersocsolutions"
              ]
            }
          `}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <div className="bg-white">
        <AboutSection />
      </div>

      {/* Services Section */}
      <div className="bg-gray-50">
        <ServicesSection />
      </div>

      {/* Partners Carousel */}
      <div className="bg-white">
        <PartnersSlide />
      </div>

{/* Mission and Vision Section */}
<div
  className="relative w-full py-20 md:py-28 bg-fixed bg-center bg-cover"
  style={{ backgroundImage: `url(${MisionBanner})` }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-blue-900/80 z-0" />

  {/* Content */}
  <section className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 space-y-24 text-white">
    {/* Mission */}
    <div data-aos="fade-right">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-left leading-tight">
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#4ca1af] via-[#5ca1e6] to-[#4ca1af]">
          Our Mission
        </span>
      </h2>
      <p className="text-lg md:text-xl font-medium leading-relaxed max-w-4xl text-left text-gray-100 mb-6">
        To provide innovative and secure solutions that empower businesses and individuals to thrive in a connected and automated world.
      </p>
      <ul className="space-y-4 pl-4 border-l-4 border-blue-500">
        <li className="pl-4 text-base md:text-lg flex items-start gap-2">
          <span className="text-blue-400 mt-1">✔</span>
          Deliver cutting-edge cybersecurity and automation technologies.
        </li>
        <li className="pl-4 text-base md:text-lg flex items-start gap-2">
          <span className="text-blue-400 mt-1">✔</span>
          Prioritize customer-centric solutions tailored to real-world needs.
        </li>
        <li className="pl-4 text-base md:text-lg flex items-start gap-2">
          <span className="text-blue-400 mt-1">✔</span>
          Drive continuous innovation through agile methodologies.
        </li>
        <li className="pl-4 text-base md:text-lg flex items-start gap-2">
          <span className="text-blue-400 mt-1">✔</span>
          Foster digital empowerment and long-term client success.
        </li>
      </ul>
    </div>

    {/* Vision */}
    <div data-aos="fade-left" data-aos-delay="200">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-left leading-tight">
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#4ca1af] via-[#5ca1e6] to-[#4ca1af]">
          Our Vision
        </span>
      </h2>
      <p className="text-lg md:text-xl font-medium leading-relaxed max-w-4xl text-left text-gray-100 mb-6">
        To be a global leader in Cyber Security, Automation, and Software Development, delivering excellence and innovation to our clients.
      </p>
      <ul className="space-y-4 pl-4 border-l-4 border-purple-500">
        <li className="pl-4 text-base md:text-lg flex items-start gap-2">
          <span className="text-purple-400 mt-1">✔</span>
          Lead digital transformation across industries worldwide.
        </li>
        <li className="pl-4 text-base md:text-lg flex items-start gap-2">
          <span className="text-purple-400 mt-1">✔</span>
          Set benchmarks in security, reliability, and innovation.
        </li>
        <li className="pl-4 text-base md:text-lg flex items-start gap-2">
          <span className="text-purple-400 mt-1">✔</span>
          Build a future driven by ethical and responsible tech.
        </li>
        <li className="pl-4 text-base md:text-lg flex items-start gap-2">
          <span className="text-purple-400 mt-1">✔</span>
          Inspire a new era of smart, secure, and scalable software.
        </li>
      </ul>
    </div>
  </section>
</div>


      {/* Blog Section */}
      <div className="bg-gray-50">
        <BlogSection />
      </div>

{/* Contact Section */}
<div className="bg-[#081120] py-20 px-6 md:px-12 lg:px-20 border-t border-[#6de2e2]/30">
  <div
    className="container mx-auto text-center text-white max-w-4xl"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#CCCCD5] relative inline-block mb-6 md:mb-10">
      Get in Touch with Us
      <span className="block h-1 w-24 bg-gradient-to-r from-[#6de2e2] to-[#008080] mt-2 mx-auto rounded-full"></span>
    </h2>

    <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
      Have questions or need assistance? Reach out to explore how we can help your business thrive with our expert digital solutions.
    </p>

    <Link
      to="/contact"
      onClick={scrolltotop}
      className="inline-block relative group"
    >
      <span className="relative z-10 px-8 py-4 text-[#6de2e2] text-lg font-semibold rounded-full border border-[#008080] shadow-xl transition-transform duration-300 transform group-hover:scale-105 group-active:scale-95">
        Contact Us
      </span>
      <span className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-md group-hover:blur-lg transition-all duration-500"></span>
    </Link>
  </div>
</div>
    </div>
  );
}

export default Home;