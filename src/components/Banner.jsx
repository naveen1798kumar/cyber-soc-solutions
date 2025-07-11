import React, { useEffect } from "react";
import { MdHome } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from "react-router-dom";

const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Breadcrumb Component
const Breadcrumb = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter(Boolean);

  return (
    <nav
      className="absolute bottom-6 right-6 w-max md:right-10 text-white text-sm md:text-base font-medium z-30"
      data-aos="fade-down"
    >
      <ul className="flex items-center flex-wrap gap-2 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md shadow-md">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 text-white hover:text-[#6de2e2] transition"
            onClick={handleClick}
          >
            <MdHome /> Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={routeTo} className="flex items-center gap-2">
              <FaChevronRight className="text-white/60 text-xs" />
              {isLast ? (
                <span className="capitalize text-[#6de2e2]">{name}</span>
              ) : (
                <Link
                  to={routeTo}
                  className="capitalize text-white/90 hover:text-[#6de2e2] transition"
                  onClick={handleClick}
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

// Banner Component
const Banner = ({ backgroundImage, title, subTitle, description }) => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    AOS.refresh();
  }, []);

  return (
    <div
      className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden"
      data-aos="fade-in"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 grayscale hover:grayscale-0 transition-all duration-[3000ms]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#000000cc] via-[#02707099] to-[#00000088] z-10" />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10" />

      {/* Floating Elements */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-10 h-10 bg-[#6de2e2]/40 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-12 right-1/4 w-14 h-14 bg-[#027070]/50 rounded-full blur-lg animate-float delay-1000" />
        <div className="absolute top-1/3 right-1/5 w-8 h-8 bg-cyan-400/40 rounded-full blur-md animate-float delay-500" />
      </div>

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Content Section */}
      <div
        className="relative z-30 px-6 py-16 md:px-16 lg:px-24 max-w-5xl text-white text-left"
        data-aos="fade-up"
      >
        <h2
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md"
        >
          {title}
        </h2>

        {subTitle && (
          <h3 className="mt-4 text-xl md:text-2xl font-semibold text-white/80">
            {subTitle}
          </h3>
        )}

        {description && (
          <p className="mt-6 text-[clamp(1.1rem,3vw,22px)] text-white/90 leading-snug font-light max-w-3xl">
            {description}
          </p>
        )}

        <Link
          to="/contact"
          onClick={handleClick}
          className="inline-block mt-8 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white text-sm md:text-base font-semibold rounded-full shadow-lg transition-all duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Banner;
