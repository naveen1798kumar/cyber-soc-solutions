import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"; 
import { FaXTwitter } from "react-icons/fa6";
import Navbar from "./headerComponent/Navbar";
import MobileSidebar from "./headerComponent/MobileSidebar";
import cybersoclogo from "../assets/cybersoc-logo-full.png";
import justdialLogo from "../assets/icons/justdial-vector.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <header
  className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 lg:px-20 transition-all duration-300 z-[9999] 
    ${
      isScrolled
        ? "py-1 bg-gray-400 shadow-lg backdrop-blur-md border-b border-gray-300"
        : "py-4 bg-gradient-to-r from-[#e0ecf8] to-[#c3dafe] backdrop-blur-md border border-white/20"
    }`}
>
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl flex items-center font-extrabold text-blue-500 tracking-wide group space-x-2"
        onClick={handleClick}
      >
        <span className="relative">
          <img
            src={cybersoclogo}
            alt="cybersoclogo"
            className={`transition-all duration-300 ease-in-out ${
              isScrolled ? "h-7 md:h-8" : "h-10 md:h-12"
            }`}
          />
        </span>

        {/* <spanc:\Users\navee\Downloads\WhatsApp_Image_2025-08-01_at_1.17.20_PM-removebg-preview.png */}
      </Link>

      {/* Desktop Navbar */}
      <Navbar isScrolled={isScrolled} />

      {/* Social Icons */}
      <div className={`hidden md:flex md:space-x-2 lg:space-x-4 transition-all duration-300 ${isScrolled ? "gap-1" : ""}`}>
        <a
          href="https://www.facebook.com/profile.php?id=61560890600177"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-transform duration-300 transform hover:scale-110 ${isScrolled ? "text-gray-700 text-lg" : "text-gray-700 lg:text-2xl"}`}
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/cybersocsolutions/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-transform duration-300 transform hover:scale-110 ${isScrolled ? "text-gray-700 text-lg" : "text-gray-700 lg:text-2xl"}`}
        >
          <FaInstagram />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-transform duration-300 transform hover:scale-110 ${isScrolled ? "text-gray-700 text-lg" : "text-gray-700 lg:text-2xl"}`}
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://jsdl.in/DT-21RLGAJT5KH"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex justify-center items-center transition-transform duration-300 transform hover:scale-110 ${isScrolled ? "text-gray-700 text-lg" : "text-gray-700 lg:text-2xl"}`}
        >
          <img src={justdialLogo} alt="" className={`${isScrolled ? "w-[35px] lg:w-[40px]" : "w-[55px] lg:w-[65px]"}`}/>
        </a>
      </div>
      {/* Mobile Sidebar */}
      <MobileSidebar />
    </header>
  );
};

export default Header;