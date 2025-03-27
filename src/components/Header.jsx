import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./headerComponent/Navbar";
import MobileSidebar from "./headerComponent/MobileSidebar";

const Header = () => {
  return (
    <header className="bg-gray-600 text-white px-6 py-4 flex items-center justify-between shadow-md z-[9999]">
      {/* Logo */}
      <Link to="/" className="text-3xl font-extrabold text-blue-500 tracking-wide">
        CyberSoc<span className="text-white">Solutions</span>
      </Link>

      {/* Desktop Navbar */}
      <Navbar />

      {/* Get Quote Button */}
      <Link
        to="/contact"
        className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
      >
        Get Quote
      </Link>

      {/* Mobile Sidebar (for smaller screens) */}
      <MobileSidebar />
    </header>
  );
};

export default Header;
