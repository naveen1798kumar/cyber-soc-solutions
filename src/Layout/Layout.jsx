import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaArrowUp, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const Layout = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Show the scroll-to-top button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-4 bg-blue-600 text-white p-3 rounded-xl rotate-[45deg] hover:scale-110 shadow-lg hover:bg-blue-700 transition cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaArrowUp className='-rotate-45'/>
        </button>
      )}

      {/* WhatsApp and Call Inquiry Buttons */}
      <div className="hidden fixed bottom-16 left-4 flex flex-col space-y-4">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/1234567890" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
          aria-label="WhatsApp Inquiry"
        >
          <FaWhatsapp />
        </a>

        {/* Call Inquiry Button */}
        <a
          href="tel:+1234567890" // Replace with your phone number
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          aria-label="Call Inquiry"
        >
          <FaPhoneAlt />
        </a>
      </div>
    </div>
  );
};

export default Layout;
