import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const servicesRef = useRef(null);
  const productsRef = useRef(null);

  // Function to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current && !servicesRef.current.contains(event.target) &&
        productsRef.current && !productsRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const linkClass =
    "px-4 py-2 text-lg font-medium transition duration-300 hover:text-blue-400 relative";
  const activeClass = "text-blue-500 border-b-2 border-blue-500";

  return (
    <nav className="hidden md:flex items-center space-x-6">
      <NavLink to="/" className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
        About
      </NavLink>
      <NavLink to="/services" className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
        Service
      </NavLink>

      {/* Services Dropdown */}
      {/* <div className="relative" ref={servicesRef}>
        <button
          onClick={() => setIsServicesOpen(!isServicesOpen)}
          className="px-4 py-2 text-lg font-medium flex items-center gap-1 hover:text-blue-400"
        >
          Services
        </button>
        {isServicesOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-gray-400 shadow-lg rounded-md overflow-hidden border border-gray-200">
            <NavLink to="/services/security" className="block px-4 py-2 hover:bg-gray-100">
              Security Audit
            </NavLink>
            <NavLink to="/services/cloud" className="block px-4 py-2 hover:bg-gray-100">
              Cloud Solutions
            </NavLink>
            <NavLink to="/services/uiux" className="block px-4 py-2 hover:bg-gray-100">
              UI/UX Design
            </NavLink>
            <NavLink to="/services/network" className="block px-4 py-2 hover:bg-gray-100">
              Network Solutions
            </NavLink>
          </div>
        )}
      </div> */}

      {/* Products Dropdown */}
      <div className="relative" ref={productsRef}>
        <button
          onClick={() => setIsProductsOpen(!isProductsOpen)}
          className="px-4 py-2 text-lg font-medium flex items-center gap-1 hover:text-blue-400"
        >
          Products
        </button>
        {isProductsOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden border border-gray-200">
            <NavLink to="/products/hardware" className="block px-4 py-2 hover:bg-gray-100">
              IT Hardware
            </NavLink>
            <NavLink to="/products/security" className="block px-4 py-2 hover:bg-gray-100">
              Security Devices
            </NavLink>
            <NavLink to="/products/software" className="block px-4 py-2 hover:bg-gray-100">
              Software Solutions
            </NavLink>
            <NavLink to="/products/custom" className="block px-4 py-2 hover:bg-gray-100">
              Custom Solutions
            </NavLink>
          </div>
        )}
      </div>

      <NavLink to="/blogs" className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
        Blogs
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}>
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
