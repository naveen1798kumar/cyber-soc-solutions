import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"; 
import { FaXTwitter } from "react-icons/fa6";
import Navbar from "./headerComponent/Navbar";
import MobileSidebar from "./headerComponent/MobileSidebar";
import cybersoclogo from "../assets/cybersoc-logo.png";
import justdialLogo from "../assets/icons/justdial-vector.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // setIsServicesOpen(false); // Close the services dropdown
    // setIsProductsOpen(false); // Close the products dropdown
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
        ? "py-2 bg-white/90 shadow-lg backdrop-blur-md border-b border-gray-300"
        : "py-4 bg-gradient-to-r from-[#e0ecf8] to-[#c3dafe] backdrop-blur-md border border-white/20"
    }`}
>
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl flex items-center font-extrabold text-blue-500 tracking-wide group space-x-2"
        onClick={()=> { handleClick() }}
      >
        <span className="relative">
          <img
            src={cybersoclogo}
            alt="cybersoclogo"
            className={`h-10 md:h-12 transition-all duration-300 ease-in-out ${
              isScrolled ? "h-8 md:h-10" : "h-12 md:h-14"
            }`}
          />
        </span>

        <span className="flex flex-col font-primary ">
          Cybersoc
          <span className="text-sm text-center text-gray-800/90 ">
            <span className="relative transition-all duration-300 ease-in-out group-hover:[text-shadow:1px_1px_10px_rgba(102,166,255,0.8),0px_0px_5px_rgba(137,247,254,0.8)]">Solutions</span>
          </span>
        </span>
      </Link>

      {/* Desktop Navbar */}
      <Navbar />

      {/* Social Icons */}
      <div className="hidden md:flex md:space-x-2 lg:space-x-4">
        <a
          href="https://www.facebook.com/profile.php?id=61560890600177"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 lg:text-2xl transition-transform duration-300 transform hover:scale-110 hover:text-blue-600"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/cybersocsolutions/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 lg:text-2xl transition-transform duration-300 transform hover:scale-110 hover:text-pink-500"
        >
          <FaInstagram />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 lg:text-2xl transition-transform duration-300 transform hover:scale-110 hover:text-blue-400"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://jsdl.in/DT-21RLGAJT5KH"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-gray-700 lg:text-2xl transition-transform duration-300 transform hover:scale-110 hover:text-blue-400 flex justify-center items-center"
        >
          <img src={justdialLogo} alt="" className="w-[55px] lg:w-[65px]"/>
        </a>
      </div>
      {/* Mobile Sidebar */}
      <MobileSidebar />
    </header>
  );
};

export default Header;

