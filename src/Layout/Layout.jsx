import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaWhatsapp, FaChevronUp } from 'react-icons/fa';

const Layout = () => {
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  // Show buttons only when user scrolls past 200px
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButtons(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      {showScrollButtons && (
        <>
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group fixed bottom-8 right-5 md:right-8 bg-indigo-600 text-white p-3 rounded-xl rotate-[45deg] hover:scale-110 shadow-lg hover:bg-blue-700/50 transition cursor-pointer z-50"
            aria-label="Scroll to top"
          >
            <FaChevronUp className="-rotate-45 group-hover:scale-130 text-gray-200 group-hover:text-gray-800" />
          </button>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/9384812940"
            target="_blank"
            rel="noopener noreferrer"
            className="group fixed bottom-8 left-5 md:left-8 z-50 bg-green-700 hover:bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 shadow-xl transition-all hover:scale-110"
            aria-label="WhatsApp Inquiry"
          >
            <FaWhatsapp className="text-white group-hover:text-green-500 text-xl" />
            <span className="absolute left-14 top-1/2 -translate-y-1/2 text-xs font-medium bg-green-500 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
              Chat on WhatsApp
            </span>
          </a>
        </>
      )}
    </div>
  );
};

export default Layout;
