import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import bgImage1 from "../../assets/Hero-Slider/Home-Automation.jpg";
import bgImage2 from "../../assets/Hero-Slider/Networking.jpg";
import bgImage3 from "../../assets/Hero-Slider/Web-Development.jpg";
import bgImage4 from "../../assets/Hero-Slider/SEO.jpg";

const slides = [
  {
    id: 1,
    title: "Smart Home & Office Automation",
    description:
      "Upgrade your living or working space with intelligent automation. Control lighting, access, security, and appliances remotely with seamless IoT integration and cutting-edge smart technology.",
    buttonText: "Discover More",
    bgImage: bgImage1,
    link: "/services",
  },
  {
    id: 2,
    title: "Enterprise Networking & Cybersecurity",
    description:
      "Build a resilient and secure digital infrastructure with our advanced networking solutions. From structured cabling to enterprise firewalls and cloud integration, we ensure optimized connectivity and protection.",
    buttonText: "Explore Solutions",
    bgImage: bgImage2,
    link: "/services",
  },
  {
    id: 3,
    title: "Custom Web & Software Solutions",
    description:
      "Turn your ideas into robust digital products. We design and develop scalable websites, mobile apps, and enterprise-grade software tailored for performance, security, and user experience.",
    buttonText: "Start Your Project",
    bgImage: bgImage3,
    link: "/services",
  },
  {
    id: 4,
    title: "Digital Marketing & SEO Strategy",
    description:
      "Drive visibility and conversions with data-backed digital marketing. Our SEO, PPC, content, and social media strategies are customized to help your business grow in a competitive digital landscape.",
    buttonText: "Grow With Us",
    bgImage: bgImage4,
    link: "/services",
  },
];


// Custom Arrow Buttons
const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute group top-1/2 z-30 transform -translate-y-1/2 bg-white/80 text-black hover:text-white hover:font-bold p-2 sm:p-3 rounded-lg sm:rounded-xl cursor-pointer hover:bg-[#027070] border-2 border-[#027070] hover:border-white shadow-lg transition-all ${
      direction === "left" ? "left-2 sm:left-4" : "right-2 sm:right-4"
    }`}
  >
    {direction === "left" ? (
      <IoIosArrowBack className="text-base sm:text-xl" />
    ) : (
      <IoIosArrowForward className="text-base sm:text-xl" />
    )}
  </button>
);


const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef();
  const progressInterval = useRef();

  const SLIDE_DURATION = 5000;

  useEffect(() => {
    setProgress(0);
    clearInterval(progressInterval.current);
    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval.current);
          return 0;
        }
        return prev + 2;
      });
    }, SLIDE_DURATION / 50);

    return () => clearInterval(progressInterval.current);
  }, [activeSlide]);

  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: SLIDE_DURATION,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "ease-in-out",
    beforeChange: (_, next) => setActiveSlide(next),
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Custom Arrows */}
      <CustomArrow direction="left" onClick={() => sliderRef.current?.slickPrev()} />
      <CustomArrow direction="right" onClick={() => sliderRef.current?.slickNext()} />

      {/* Slider */}
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="relative w-[100vw] min-h-[85vh] flex items-center justify-center"
          >
            {/* Background */}
            <div
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000"
            style={{
    backgroundImage: `url(${slide.bgImage})`,
    filter: 'blur(2px)', // 👈 Apply slight blur
 // Optional: slight zoom to avoid visible edges
  }}
          />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70 z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-[90%] sm:max-w-[80%] mx-auto px-4 sm:px-6 w-full flex flex-col justify-end items-start min-h-[75vh] text-white">
<p
  className="hidden md:block text-xs sm:text-sm md:text-base bg-gray-300/90 rounded-lg px-3 sm:px-4 py-1 tracking-wide w-max font-semibold uppercase text-indigo-600 mb-2 mx-auto sm:mx-0"
  data-aos="fade-left"
>
  Empowering Your Business with End-to-End IT Solutions
</p>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-4xl drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-lg sm:text-xl max-w-3xl mb-8 text-white/90">
                {slide.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to={slide.link}
                  className="px-6 py-3 bg-[#027070] hover:bg-[#025050] text-white font-medium text-lg rounded-md shadow-lg transition duration-300"
                >
                  {slide.buttonText}
                </Link>
                <Link
                  to={slide.link}
                  className="px-6 py-3 bg-white text-black font-medium text-lg rounded-md shadow-lg hover:bg-gray-200 transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Dot Progress Bars */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            className="relative w-20 h-2 bg-white/30 rounded-full overflow-hidden"
          >
            <div
              className="h-full transition-all duration-100"
              style={{
                backgroundColor: "#025050",
                width:
                  i === activeSlide ? `${progress}%` : i < activeSlide ? "100%" : "0%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
