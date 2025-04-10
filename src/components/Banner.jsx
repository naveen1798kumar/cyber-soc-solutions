import React, { useEffect } from "react";
import { MdHome } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Breadcrumb = () => {
  const pathnames = window.location.pathname.split("/").filter((x) => x);

  return (
    <nav className="absolute bottom-5 right-8 text-white text-sm md:text-base font-semibold" data-aos="fade-right">
      <ul className="flex items-center justify-center space-x-2 bg-black/30 px-4 py-2 rounded-lg shadow-lg backdrop-blur-md">
        <li>
          <Link
            to="/"
            className="flex items-center text-gray-200 hover:text-blue-400 transition duration-200"
          >
            <MdHome className="mr-1 text-lg" /> Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={routeTo} className="flex items-center">
              <FaChevronRight className="text-gray-300 mx-2 text-xs" />
              {isLast ? (
                <span className="text-blue-400">{name}</span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-gray-200 hover:text-blue-400 transition duration-200"
                >
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const Banner = ({ backgroundImage, title, description }) => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    AOS.refresh();
  }, []);

  return (
    <div
      className="relative h-[90vh] md:h-[70vh] lg:h-screen flex items-center justify-center overflow-hidden"
      data-aos="fade-down"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-110 transition-all duration-[3000ms] grayscale-75 ease-out"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
        }}
        data-aos="zoom-out"
      ></div>

      {/* Multiple Layered Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-indigo-700/50 animate-pulse-fast"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>

      {/* Floating Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-12 h-12 bg-blue-400/40 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-indigo-500/50 rounded-full blur-lg animate-float delay-1000" />
        <div className="absolute top-1/3 right-1/5 w-8 h-8 bg-cyan-400/40 rounded-full blur-md animate-float delay-500" />
      </div>

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Content */}
      <div
        className="absolute inset-0 z-10 flex flex-col justify-center text-white px-6 py-8 md:px-16 md:py-12 max-w-3xl lg:max-w-4xl"
        data-aos="fade-left"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
          {title}
        </h2>

        {description && (
          <p className="mt-6 text-lg md:text-2xl text-white/90 font-light max-w-3xl tracking-wide leading-snug drop-shadow-md">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Banner;
