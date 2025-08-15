import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import servicesData from "../../data/servicesData";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Navbar = ({ isScrolled }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const servicesRef = useRef(null);

  const location = useLocation();
  const isServicesActive = location.pathname.startsWith("/services");

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsServicesOpen(false);
    setHoveredCategory(null);
  };

  const handleServiceClick = () => {
    setIsServicesOpen(false);
    setHoveredCategory(null);
  };

  const linkClass = `px-2 lg:px-4 py-2 transition-all duration-300 font-medium relative ${
    isScrolled ? "text-sm lg:text-base py-1" : "text-md lg:text-lg"
  } hover:text-gray-500`;
  const activeClass = "text-[#027070] border-b-2 border-[#027070]";

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <nav className={`hidden md:flex items-center lg:space-x-4 relative transition-all duration-300 ${isScrolled ? "gap-1" : ""}`}>
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

      {/* Modern Services Dropdown */}
      <div
        ref={servicesRef}
        className="relative"
        onMouseEnter={() => setIsServicesOpen(true)}
        onMouseLeave={() => {
          setIsServicesOpen(false);
          setHoveredCategory(null);
        }}
      >
        <Link
          // type="button"
          to="/services"
          onClick={() => (setIsServicesOpen((prev) => !prev), handleClick())}
          className={`group flex items-center justify-center gap-1 cursor-pointer transition-all duration-300 
            ${isServicesActive ? 'text-[#027070]' : "text-gray-800 hover:text-gray-500 "} 
            ${isScrolled ? "text-sm lg:text-base py-1" : "text-md lg:text-lg"}`}
          aria-haspopup="true"
          aria-expanded={isServicesOpen}
        >
          Services
          <FaChevronDown className={`ml-1 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""} ${isScrolled ? "text-xs" : "text-sm"}`} />
        </Link>

        <AnimatePresence>
          {isServicesOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 w-[65vw] max-w-[1100px] z-50 bg-white/95 shadow-2xl rounded-2xl border border-gray-200 overflow-hidden backdrop-blur-xl"
            >
              <div className="flex flex-col md:flex-row">
                {/* Category List */}
                <div className="flex flex-col min-w-[200px] bg-gray-50 border-r border-gray-200">
                  {Object.keys(servicesData).map((categoryKey) => (
                    <button
                      key={categoryKey}
                      onMouseEnter={() => setHoveredCategory(categoryKey)}
                      onFocus={() => setHoveredCategory(categoryKey)}
                      onClick={() => setHoveredCategory(categoryKey)}
                      className={`flex items-center justify-between px-6 py-4 text-left font-semibold font-secondary tracking-wide uppercase transition-all duration-200 border-b border-gray-100
                        ${
                          hoveredCategory === categoryKey
                            ? "bg-white text-blue-700"
                            : "bg-gray-50 text-gray-700 hover:bg-white/80"
                        }
                        ${isScrolled ? "text-base" : "text-lg"}`}
                      tabIndex={0}
                    >
                      {servicesData[categoryKey].title}
                      <FaChevronRight className="ml-2 text-base opacity-60" />
                    </button>
                  ))}
                </div>
                {/* Services List */}
                <div className="flex-1 min-w-[220px] bg-white">
                  {hoveredCategory ? (
                    <div className="flex flex-col p-6">
                      {servicesData[hoveredCategory].services.map((service) => (
                        <NavLink
                          key={service.id}
                          to={`/services/${hoveredCategory}/${service.id}`}
                          onClick={handleServiceClick}
                          className={`block px-5 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 text-gray-800
                            ${isScrolled ? "text-base" : "text-lg"}`}
                        >
                          {service.title}
                        </NavLink>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full p-8 text-gray-400 text-base">
                      <span>Select a category</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
        to="/career"
        className={({ isActive }) =>
          isActive ? `${linkClass} ${activeClass}` : linkClass
        }
        onClick={handleClick}
      >
        Career
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
