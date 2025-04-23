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
        className="relative w-full py-16 md:py-24 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${MisionBanner})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-blue-900/70 z-0" />

        {/* Content Section */}
        <section className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 space-y-16 text-white">
          {/* Mission */}
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-left leading-tight">
              <span className="relative inline-block font-extrabold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4ca1af] via-[#5ca1e6] to-[#4ca1af] tracking-tight leading-tight after:content-[''] after:absolute after:top-1/2 after:right-[-60px] after:w-12 after:h-1 after:bg-gray-500 after:rounded-full">
                Our Mission
              </span>
            </h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-4xl text-left text-gray-100">
              To provide innovative and secure solutions that empower businesses and individuals to thrive in a connected and automated world.
            </p>
          </div>

          {/* Vision */}
          <div data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-left leading-tight">
              <span className="relative inline-block font-extrabold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4ca1af] via-[#5ca1e6] to-[#4ca1af] tracking-tight leading-tight after:content-[''] after:absolute after:top-1/2 after:right-[-60px] after:w-12 after:h-1 after:bg-gray-500 after:rounded-full">
                Our Vision
              </span>
            </h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-4xl text-left text-gray-100">
              To be a global leader in Cyber Security, Automation, and Software Development, delivering excellence and innovation to our clients.
            </p>
          </div>
        </section>
      </div>

      {/* Blog Section */}
      <div className="bg-gray-50">
        <BlogSection />
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-[#3d3333e5] via-[#514c4c] to-[#3d3333e5] py-16 border-b-2 border-gray-200">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center text-white">
          <h2 className="relative text-center text-4xl md:text-5xl font-extrabold text-gray-900 tracking-wide leading-tight 
               after:absolute after:content-[''] after:w-30 after:h-1 after:bg-blue-600 
               after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 mb-6 md:mb-8" data-aos="fade-left">
            Get in Touch with Us
          </h2>
          <p className="text-lg md:text-xl font-medium mb-8">
            Have questions or need assistance? We're here to help. Contact us today to learn more about our services and how we can support your business.
          </p>
          <Link
            to="/contact"
            onClick={scrolltotop}
            className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 text-lg font-semibold rounded-full shadow-xl transform hover:scale-110 active:scale-95"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;