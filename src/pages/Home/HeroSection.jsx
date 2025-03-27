import React from "react";
import Slider from "react-slick";
import bgImage1 from "../../assets/Hero-Slider/Slider-1.jpg"
import bgImage2 from "../../assets/Hero-Slider/Slider-2.jpg"
import bgImage3 from "../../assets/Hero-Slider/Slider-3.jpg"


const slides = [
  { 
    id: 1, 
    title: "Innovate with Us", 
    description: "Empowering businesses with cutting-edge solutions.",
    buttonText: "Explore More",
    bgImage: bgImage1
  },
  { 
    id: 2, 
    title: "Transform Your Ideas", 
    description: "From concept to execution, we bring your vision to life.",
    buttonText: "Get Started",
    bgImage: bgImage2
  },
  { 
    id: 3, 
    title: "Seamless Digital Solutions", 
    description: "We create experiences that drive success.",
    buttonText: "Learn More",
    bgImage: bgImage3
  },
];

function HeroSection() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    arrows: false
  };

  return (
    <div className="relative w-full">
      <Slider {...settings} className="">
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            />

            {/* Overlay */}
            <div 
  className="absolute inset-0 w-full h-full bg-gradient-to-r from-black via-gray-900/80 to-black/60"
></div>


            {/* Content (Centered Properly) */}
            <div className="relative z-10 min-h-[90vh] flex flex-col items-start justify-center text-center text-white px-6 md:px-12 ">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mb-6 opacity-80 max-w-2xl">{slide.description}</p>
              <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSection;
