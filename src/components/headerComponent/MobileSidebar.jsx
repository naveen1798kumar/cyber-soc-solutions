import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-90 flex flex-col items-center space-y-6 p-10">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
          <Link to="/" className="text-white text-lg" >Home</Link>
          <Link to="/about" className="text-white text-lg" >About</Link>
          <Link to="/services" className="text-white text-lg" >Services</Link>
          <Link to="/products" className="text-white text-lg" >Products</Link>
          <Link to="/partners" className="text-white text-lg" >Partners</Link>
          <Link to="/contact" className="text-white text-lg" >Contact</Link>
        </div>
      )}
    </div>
  );w
};

export default MobileSidebar;
