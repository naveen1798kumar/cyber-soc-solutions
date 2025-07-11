import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import OurProjects from "./OurProjects";
import BlogSection from "./BlogSection";
import CareerSection from "./CareerSection";
import PartnersCarousel from "../../components/PartnersCarousel";
import PartnersSlide from "./PartnersSlide";
import MisionBanner from "../../assets/banners/mision-and-vision.jpg";

import { FaRegCopyright } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
// import { FaArrowRight } from "react-icons/fa";
import { FaArrowRight, FaAward, FaCertificate, FaMedal } from "react-icons/fa";


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
  {/* <div className="bg-white">
    <PartnersSlide />
  </div> */}

{/* Mission and Vision Section */}
<div
  className="relative w-full pt-20 md:pt-28 pb-8 bg-fixed bg-center bg-cover"
  style={{ backgroundImage: `url(${MisionBanner})` }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-[#027070]/90 z-0" />

  {/* Content */}
  <section className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 space-y-24 text-white">
    
    {/* Mission */}
    <div data-aos="fade-right">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-left leading-tight">
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#027070] to-[#5ca1e6]">
          Our Mission
        </span>
      </h2>
      <p className="text-lg md:text-xl font-medium leading-relaxed max-w-4xl text-left text-gray-100 mb-6">
        To empower businesses and individuals through secure, intelligent, and scalable IT solutions that foster growth, trust, and innovation.
      </p>
      <ul className="space-y-4 pl-4 border-l-4 border-[#00b2b2]">
        {[
          "Deliver robust cybersecurity and smart automation technologies.",
          "Craft user-focused, reliable, and scalable digital solutions.",
          "Promote continuous innovation and agile development.",
          "Enable lasting impact through tech-driven transformation."
        ].map((item, i) => (
          <li key={i} className="pl-4 text-base md:text-lg flex items-start gap-3">
            <span className="text-[#00d9d9] mt-1">✔</span>
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Vision */}
    <div data-aos="fade-left" data-aos-delay="200">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-left leading-tight">
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#7e5bef] to-[#00d4ff]">
          Our Vision
        </span>
      </h2>
      <p className="text-lg md:text-xl font-medium leading-relaxed max-w-4xl text-left text-gray-100 mb-6">
        To lead the digital frontier by redefining security, automation, and development standards through innovation, ethics, and excellence.
      </p>
      <ul className="space-y-4 pl-4 border-l-4 border-purple-500">
        {[
          "Champion secure, smart, and sustainable digital ecosystems.",
          "Set global standards for trust, innovation, and reliability.",
          "Advance ethical technology with measurable social impact.",
          "Shape a connected future driven by intelligent software."
        ].map((item, i) => (
          <li key={i} className="pl-4 text-base md:text-lg flex items-start gap-3">
            <span className="text-purple-300 mt-1">✔</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </section>

  {/*  */}
  <section className="relative w-full py-16 my-8 bg-gradient-to-br from-[#e6f9f9] to-[#f0f9ff]/50 rounded-b-[50px] rounded-t-lg z-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          {/* Heading */}
          <h2 className="relative group text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Move Your Career Forward
          <span className="block mt-2 w-24 h-1 bg-gradient-to-r from-[#008080] to-[#008080] mx-auto rounded-full"></span>
          </h2>
  
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Contribute, collaborate, and lead with <span className="text-[#027070] font-semibold">Cybersoc</span>.
            Check out our open positions in the India, UK, UAE, and Poland.
          </p>
  
          {/* Logos */}
<div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-[#027070]">
          <FaAward className="text-4xl sm:text-5xl hover:scale-110 transition-all duration-300" title="Great Place To Work" />
          <FaCertificate className="text-4xl sm:text-5xl hover:scale-110 transition-all duration-300" title="Certified Excellence" />
          <FaMedal className="text-4xl sm:text-5xl hover:scale-110 transition-all duration-300" title="Best Workplace in Wellness" />
        </div>
  
          {/* CTA Button */}
          <Link
          onClick={scrolltotop}
            to="/career"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#027070] text-white text-lg font-medium rounded-full shadow-md hover:bg-[#025050] transition-colors duration-300"
          >
            Find Your Role <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </section>
</div>


  {/* Blog Section */}
  {/* <div className="bg-gray-50">
    <CareerSection />
  </div> */}

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
    <p
    className="text-sm bg-gray-300/90 rounded-lg px-4 py-1 mb-4 tracking-wide text-center mx-auto w-max font-semibold uppercase text-indigo-600 "
    data-aos="fade-left"
  >
    Contact Us
  </p>
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#CCCCD5] relative inline-block mb-6 md:mb-10">
      Get in Touch with Us
      <span className="block mt-2 w-24 h-1 bg-gradient-to-r from-[#008080] to-[#008080] mx-auto rounded-full"></span>
    </h2>

<div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center px-4">
  <p className="text-lg md:text-xl text-gray-300 mb-4 md:mb-0 leading-relaxed max-w-2xl">
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
    </div>
  );
}

export default Home;