import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import OurProjects from "./OurProjects";
import BlogSection from "./BlogSection";
import PartnersCarousel from "../../components/PartnersCarousel";

function Home() {
  return (
    <div className="overflow-hidden bg-gray-100 ">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <div className=" bg-white">
        <AboutSection />
      </div>

      {/* Services Section */}
      <div className=" bg-gray-50">
        <ServicesSection />
      </div>

      {/* Our Projects Section */}
      {/* <div className=" bg-white">
        <OurProjects />
      </div> */}

      {/* Blog Section */}
      <div className=" bg-gray-50">
        <BlogSection />
      </div>

      {/* Partners Carousel */}
      <div className=" bg-white">
        <PartnersCarousel />
      </div>
    </div>
  );
}

export default Home;