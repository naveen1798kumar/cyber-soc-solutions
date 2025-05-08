import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import  servicesData  from "../../data/servicesData";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State for "Services" dropdown
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);

  // Close dropdowns when clicking outside
useEffect(() => {
  // const handleClickOutside = (event) => {
  //   if (
  //     servicesRef.current &&
  //     !servicesRef.current.contains(event.target) &&
  //     productsRef.current && // This check fails when Products section is commented out
  //     !productsRef.current.contains(event.target)
  //   ) {
  //     setIsServicesOpen(false);
  //     setIsProductsOpen(false);
  //   }
  // };

  // document.addEventListener("mousedown", handleClickOutside);
  // return () => {
  //   document.removeEventListener("mousedown", handleClickOutside);
  // };
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
    <nav className="hidden md:flex items-center lg:space-x-6 relative">
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


        <div ref={servicesRef}
        onMouseEnter={() => setIsServicesOpen(true)} 
        onMouseLeave={() => setIsServicesOpen(false)}>
          <Link
            to="/services"
            onClick={() => {
          setIsServicesOpen(!isServicesOpen);
          window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top when clicking the Services link
            }}
            onMouseOver={() => setIsServicesOpen(true)}
            className="group px-4 py-2 text-md font-medium flex items-center justify-center gap-2 text-gray-800 hover:text-blue-400 cursor-pointer"
          >
            Services <FaChevronDown className={`text-gray-800 group-hover:text-blue-400 cursor-pointer ${isServicesOpen ? 'rotate-180' : ''}`} />
          </Link>

          <AnimatePresence>
          {isServicesOpen && (
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`absolute left-1/2 top-full mt-0 transform -translate-x-1/2 min-w-[90vw]  overflow-hidden  z-50 overflow-y-auto max-h-[70vh] scrollbar-hide 
          ${isServicesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-5 invisible'}`}
            >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 mt-4 bg-white shadow-lg hover:shadow-2xl rounded-md border border-gray-200">
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
            </motion.div>
          )}
          </AnimatePresence>

        </div>

        {/* Products Dropdown */}
        <div 
  ref={productsRef}
  onMouseEnter={() => setIsProductsOpen(true)}
  onMouseLeave={() => setIsProductsOpen(false)}
  // className="relative"
>
  <Link
    to="/products"
    onClick={() => {
      setIsProductsOpen(!isProductsOpen);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
    onMouseOver={() => setIsProductsOpen(true)}
    className="px-4 py-2 text-md font-medium flex items-center gap-1 text-gray-800 hover:text-blue-400 cursor-pointer"
  >
    Products
  </Link>

  {/* <AnimatePresence>
    {isProductsOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute left-1/2 top-full mt-0 transform -translate-x-1/2 min-w-[300px] overflow-hidden z-50 overflow-y-auto max-h-[70vh] scrollbar-hide opacity-100 translate-y-0 visible"
      >
        <div className="flex flex-col bg-white shadow-lg hover:shadow-2xl rounded-md border border-gray-200 mt-4">
          <NavLink
            to="/products/hardware"
            className="block px-5 py-3 text-[15px] font-medium text-gray-700 transition-all duration-300 ease-in-out hover:text-black hover:pl-7 rounded-md"
            onClick={() => setIsProductsOpen(false)}
          >
            IT Hardware
          </NavLink>
          <NavLink
            to="/products/security"
            className="block px-5 py-3 text-[15px] font-medium text-gray-700 transition-all duration-300 ease-in-out hover:text-black hover:pl-7 rounded-md"
            onClick={() => setIsProductsOpen(false)}
          >
            Security Devices
          </NavLink>
          <NavLink
            to="/products/software"
            className="block px-5 py-3 text-[15px] font-medium text-gray-700 transition-all duration-300 ease-in-out hover:text-black hover:pl-7 rounded-md"
            onClick={() => setIsProductsOpen(false)}
          >
            Software Solutions
          </NavLink>
          <NavLink
            to="/products/custom"
            className="block px-5 py-3 text-[15px] font-medium text-gray-700 transition-all duration-300 ease-in-out hover:text-black hover:pl-7 rounded-md"
            onClick={() => setIsProductsOpen(false)}
          >
            Custom Solutions
          </NavLink>
        </div>
      </motion.div>
    )}
  </AnimatePresence> */}
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
        to="/events"
        className={({ isActive }) =>
          isActive ? `${linkClass} ${activeClass}` : linkClass
        }
        onClick={handleClick}
      >
        Events
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

