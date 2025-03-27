import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Banner = ({ backgroundImage, title, description }) => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="relative min-h-[65vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden rounded-b-2xl shadow-2xl">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-110 transition-all duration-[3000ms] ease-out"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
        }}
        data-aos="zoom-out"
      ></div>

      {/* Multiple Layered Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-indigo-700/50 animate-pulse-fast"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent backdrop-blur-lg"></div>

      {/* Floating Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-12 h-12 bg-blue-400/40 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-indigo-500/50 rounded-full blur-lg animate-float delay-1000" />
        <div className="absolute top-1/3 right-1/5 w-8 h-8 bg-cyan-400/40 rounded-full blur-md animate-float delay-500" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center text-white p-6 max-w-3xl"
        data-aos="fade-up"
      >
        <h2 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg tracking-wide">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-lg md:text-2xl text-white/80 font-light max-w-2xl tracking-wide leading-relaxed">
            {description}
          </p>
        )}
        <button
          onClick={handleClick}
          className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 transition-all duration-300 text-lg font-semibold rounded-full shadow-xl transform hover:scale-105 active:scale-95"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Banner;
