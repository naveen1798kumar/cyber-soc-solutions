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

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsServicesOpen(false); // Close the services dropdown
    setIsProductsOpen(false); // Close the products dropdown
  };

  const handleServiceClick = () => {
    setIsServicesOpen(false); // Close the services dropdown when a link is clicked
  };

  const linkClass =
    "px-2 lg:px-4 py-2 text-md font-medium transition-all duration-300 text-[#081120] hover:text-[var(--color-primary)] relative";
  const activeClass = "text-gray-500 border-b-2 border-[var(--color-primary)]";

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
        onMouseLeave={() => setIsServicesOpen(false)}
        // className=" px-4 py-2 bg-gray-500"
        >
          <Link
            to="/services"
            onClick={() => {
          setIsServicesOpen(!isServicesOpen);
          window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top when clicking the Services link
            }}
            onMouseOver={() => setIsServicesOpen(true)}
            className="group text-md font-medium flex items-center justify-center gap-1 text-gray-800 hover:text-[var(--color-primary)] cursor-pointer"
          >
            Services <FaChevronDown className={`text-gray-800 text-xs group-hover:text-[var(--color-primary)] cursor-pointer transition-all duration-500 ${isServicesOpen ? 'rotate-180' : ''}`} />
          </Link>

          <AnimatePresence>
          {isServicesOpen && (
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`absolute left-1/2 top-full mt-0 transform -translate-x-1/2 min-w-[90vw] max-h-[70vh] z-50 overflow-hidden overflow-y-auto scrollbar-hide 
              ${isServicesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-5 invisible'}`}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-[#ffffff]  shadow-xl hover:shadow-2xl  border border-gray-200 transition-all duration-300">
              {Object.keys(servicesData).map((categoryKey) => (
                <div
                  key={categoryKey}
                  className="border border-gray-100 rounded-lg bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <h3 className="px-5 py-4 text-[20px] font-bold font-secondary tracking-wide text-[#081120] bg-gray-50 border-b-2 border-gray-200 uppercase rounded-t-lg">
                    {servicesData[categoryKey].title}
                  </h3>
                  {servicesData[categoryKey].services.map((service) => (
              <NavLink
                key={service.id}
                to={`/services/${categoryKey}/${service.id}`}
                onClick={handleServiceClick}
                className="group relative block px-5 py-2 hover:pl-7 text-[15px] text-gray-700 font-medium transition-all duration-300 ease-in-out rounded-md hover:text-blue-700"
              >
                <span className="absolute left-0 top-0 h-full w-[3px] bg-blue-700 opacity-0 group-hover:opacity-100 group-hover:translate-x-[-50%] transition-all duration-300"></span>
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
        {/* <div 
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
</div> */}

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

