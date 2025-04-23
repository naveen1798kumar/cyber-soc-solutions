import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiAlignRight } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";
import { FaXTwitter } from 'react-icons/fa6';
import {servicesData} from '../../data/servicesData'; // Import services data

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Main sidebar toggle
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Services menu toggle

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkStyle = 'text-white text-lg hover:text-indigo-500 hover:font-bold';

  return (
    <div className="md:hidden">
      {/* Main Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex-center text-black font-bold text-2xl cursor-pointer"
      >
        {isOpen ? <FiAlignRight /> : <FiMenu />}
      </button>

      {/* Main Sidebar */}
      {isOpen && !isServicesOpen && (
        <div className="absolute inset-0 w-full h-screen bg-gray-900 rounded-xl bg-opacity-90 flex flex-col items-center justify-center space-y-6 p-10">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-6 right-6 text-white hover:text-black hover:font-bold hover:bg-white/50 p-2 rounded-full text-2xl cursor-pointer transition-all duration-300 hover:scale-115"
          >
            <FiX />
          </button>

          {/* Main Links */}
          <Link to="/" className={linkStyle} onClick={() => { setIsOpen(!isOpen); handleClick(); }}>Home</Link>
          <Link to="/about" className={linkStyle} onClick={() => { setIsOpen(!isOpen); handleClick(); }}>About</Link>

          {/*  */}
          <div className='flex justify-center items-center space-x-3'>
          <Link to="/services" className={linkStyle} onClick={() => { setIsOpen(!isOpen); handleClick(); }}>Services</Link>
          <button
            className={`${linkStyle} text-center w-full`}
            onClick={() => setIsServicesOpen(true)} // Open Services Menu
          >
            <IoIosArrowForward />
          </button>
          </div>

          <Link to="/products" className={linkStyle} onClick={() => { setIsOpen(!isOpen); handleClick(); }}>Products</Link>
          <Link to="/blogs" className={linkStyle} onClick={() => { setIsOpen(!isOpen); handleClick(); }}>Blogs</Link>
          <Link to="/contact" className={linkStyle} onClick={() => { setIsOpen(!isOpen); handleClick(); }}>Contact</Link>

          {/* Social Links */}
          <div className="flex space-x-6 mt-6">
            <a
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-2xl transition-transform duration-300 transform hover:scale-110 hover:text-blue-600"
            >
              <FaFacebookF />
            </a>
            <a
              to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-2xl transition-transform duration-300 transform hover:scale-110 hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-2xl transition-transform duration-300 transform hover:scale-110 hover:text-blue-400"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      )}

      {/* Services Menu */}
      {isOpen && isServicesOpen && (
        <div className="absolute inset-0 w-full h-screen bg-gray-900 rounded-xl bg-opacity-90 flex flex-col items-center justify-start space-y-6 p-6 overflow-y-auto scrollbar-hide">
          {/* Back Button */}
          <button
            onClick={() => setIsServicesOpen(false)} // Go back to Main Sidebar
            className="absolute top-6 left-6 text-white hover:text-black hover:font-bold hover:bg-white/50 p-2 rounded-full text-2xl cursor-pointer transition-all duration-300 hover:scale-115"
          >
            <FiX />
          </button>

          {/* Services Categories */}
          <h2 className="text-white text-2xl font-bold mb-4 mt-12">Our Services</h2>
          <div className="flex flex-col space-y-6 w-full">
            {Object.entries(servicesData).map(([categoryKey, categoryValue]) => (
              <div key={categoryKey} className="w-full">
                <h3 className="text-indigo-500 text-lg font-bold mb-2">{categoryValue.title}</h3>
                <ul className="pl-4 space-y-2">
                  {categoryValue.services.map((service) => (
                    <li key={service.id}>
                      <Link
                        to={`/services/${categoryKey}/${service.id}`}
                        className={linkStyle}
                        onClick={() => setIsOpen(false)} // Close menu on click
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;