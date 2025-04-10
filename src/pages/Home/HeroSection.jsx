import React from "react";
import Slider from "react-slick";
import { Link } from "react-router";
import bgImage1 from "../../assets/Hero-Slider/Home-Automation.jpg";
import bgImage2 from "../../assets/Hero-Slider/Networking.jpg";
import bgImage3 from "../../assets/Hero-Slider/Web-Development.jpg";
import bgImage4 from "../../assets/Hero-Slider/Web-Development.jpg";

const slides = [
  {
    id: 1,
    title: "Smart Home Automation",
    description: "Transform your living space with cutting-edge smart home automation. Control lighting, security, and appliances seamlessly with IoT-powered solutions.",
    buttonText: "Discover More",
    bgImage: bgImage1,
    link: "/services"
  },
  {
    id: 2,
    title: "Advanced Networking & IT Solutions",
    description: "Boost your business with secure, high-performance networking solutions. We offer enterprise-grade IT infrastructure and cybersecurity services tailored to your needs.",
    buttonText: "Explore Services",
    bgImage: bgImage2,
    link: "/services"
  },
  {
    id: 3,
    title: "Web & Software Development in Coimbatore",
    description: "Get custom web and software solutions designed for performance and scalability. We build feature-rich websites, eCommerce platforms, and enterprise applications.",
    buttonText: "Get Started",
    bgImage: bgImage3,
    link: "/services"
  },
  {
    id: 4,
    title: "Digital Marketing & SEO Services",
    description: "Grow your brand with data-driven digital marketing. Our SEO, social media, and PPC strategies help businesses in Coimbatore gain visibility and customers online.",
    buttonText: "Get Started",
    bgImage: bgImage4, 
    link: "/services"
  }
];


function HeroSection() {
  const settings = {
    infinite: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  return (
    <div className="relative w-full">
      <Slider {...settings} className="">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative w-full min-h-[55vh] h-auto flex items-center justify-center overflow-hidden"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center scale-105 transition-all duration-1000 group-hover:scale-110"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

            {/* Content */}
            <div className="relative z-10 min-h-[85vh] flex flex-col items-start justify-center text-white px-6 md:px-16">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg animate-fadeInUp">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mb-6 opacity-85 max-w-3xl animate-fadeInUp delay-200">
                {slide.description}
              </p>
              <Link to={slide.link} className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 transition-all duration-300 text-lg font-semibold rounded-full shadow-xl transform hover:scale-105 active:scale-95">
                {slide.buttonText}
              </Link>          
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSection;
