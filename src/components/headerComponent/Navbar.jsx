import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { servicesData } from "../../data/servicesData";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State for "Services" dropdown
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);

  // Close dropdowns when clicking outside
useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      servicesRef.current &&
      !servicesRef.current.contains(event.target) &&
      productsRef.current && // This check fails when Products section is commented out
      !productsRef.current.contains(event.target)
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

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsServicesOpen(false); // Close the services dropdown
    setIsProductsOpen(false); // Close the products dropdown
  };

  const handleServiceClick = () => {
    setIsServicesOpen(false); // Close the services dropdown when a link is clicked
  };

  const linkClass =
    "px-2 lg:px-4 py-2 text-md font-medium transition duration-300 text-gray-800 hover:text-blue-400 relative";
  const activeClass = "text-blue-500 border-b-2 border-blue-500";

  return (
    <nav className="hidden md:flex items-center lg:space-x-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${linkClass} ${activeClass}` : linkClass
        }
        onClick={handleClick}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? `${linkClass} ${activeClass}` : linkClass
        }
        onClick={handleClick}
      >
        About
      </NavLink>


        <div className="relative" ref={servicesRef}>
          <Link
            to="/services"
            onClick={() => {
          setIsServicesOpen(!isServicesOpen);
          window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top when clicking the Services link
            }}
            onMouseOver={() => setIsServicesOpen(true)}
            className="px-4 py-2 text-md font-medium flex items-center gap-1 text-gray-800 hover:text-blue-400 cursor-pointer"
          >
            Services
          </Link>
          {isServicesOpen && (
            <div
          className="absolute top-full left-1/2 mt-2 min-w-[90vw] bg-white shadow-lg rounded-md overflow-hidden border border-gray-200 transform -translate-x-1/2 z-50 overflow-y-auto max-h-[70vh]"
            >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 ">
            {Object.keys(servicesData).map((categoryKey) => (
              <div key={categoryKey} className="border border-white/30 bg-white/10 backdrop-blur-md hover:shadow-lg rounded-lg">
              <h3 className="px-4 py-3 mb-2 text-md font-bold text-indigo-800 bg-gradient-to-r from-gray-100 to-gray-200 shadow-sm tracking-wide uppercase">
            {servicesData[categoryKey].title}
              </h3>
              {servicesData[categoryKey].services.map((service) => (
            <NavLink
              key={service.id}
              to={`/services/${categoryKey}/${service.id}`}
              className="block px-5 py-2 text-[15px] font-medium text-gray-700 transition-all duration-300 ease-in-out  hover:text-black hover:pl-7  rounded-md"
              onClick={handleServiceClick}
            >
              {service.title}
            </NavLink>
              ))}
            </div>              
            ))}
          </div>
            </div>
          )}
        </div>

        {/* Products Dropdown */}
      <div className="relative" ref={productsRef}>
        <Link
        to="/products"
          onClick={() => setIsProductsOpen(!isProductsOpen)}
          className="px-4 py-2 text-md font-medium flex items-center gap-1 text-gray-800 hover:text-blue-400 cursor-pointer"
        >
          Products
        </Link>
        {/* {isProductsOpen && (
          <div className="absolute top-full left-1/2 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden border border-gray-200 transform -translate-x-1/2 z-50">
            <NavLink
              to="/products/hardware"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              IT Hardware
            </NavLink>
            <NavLink
              to="/products/security"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Security Devices
            </NavLink>
            <NavLink
              to="/products/software"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Software Solutions
            </NavLink>
            <NavLink
              to="/products/custom"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Custom Solutions
            </NavLink>
          </div>
        )} */}
      </div>

      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          isActive ? `${linkClass} ${activeClass}` : linkClass
        }
        onClick={handleClick}
      >
        Blogs
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? `${linkClass} ${activeClass}` : linkClass
        }
        onClick={handleClick}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
