import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"; 
import { FaXTwitter } from "react-icons/fa6";
import Navbar from "./headerComponent/Navbar";
import MobileSidebar from "./headerComponent/MobileSidebar";
import cybersoclogo from "../assets/cybersoc-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 left-0 w-full  flex items-center justify-between px-12 md:px-10 transition-all duration-300 z-[9999] 
      ${isScrolled ? "py-2 bg-white/80 shadow-md backdrop-blur-lg border-b border-gray-200" : "py-4 bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] backdrop-blur-lg border border-white/20"}`}
    >
      {/* linear-gradient(90deg, #f5f7fa 0%, #c3cfe2 100%) */}
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl flex items-center font-extrabold text-blue-500 tracking-wide group space-x-2"
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

        <span className="flex flex-col">
          CyberSoc
          <span className="text-sm text-center text-gray-800/90 relative transition-all duration-300 ease-in-out group-hover:[text-shadow:1px_1px_10px_rgba(102,166,255,0.8),0px_0px_5px_rgba(137,247,254,0.8)]">
            Solutions
          </span>
        </span>
      </Link>

      {/* Desktop Navbar */}
      <Navbar />

      {/* Social Icons */}
      <div className="hidden md:flex md:space-x-2 lg:space-x-6">
        <a
          href="https://www.facebook.com/profile.php?id=61560890600177"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 text-2xl transition-transform duration-300 transform hover:scale-110 hover:text-blue-600"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/cybersocsolutions/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 text-2xl transition-transform duration-300 transform hover:scale-110 hover:text-pink-500"
        >
          <FaInstagram />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 text-2xl transition-transform duration-300 transform hover:scale-110 hover:text-blue-400"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar />
    </header>
  );
};

export default Header;

/*
Get Quote Button      
<Link
  to="/contact"
  className="hidden md:block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 text-white px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95"
>
  Get Quote
</Link> 
*/
