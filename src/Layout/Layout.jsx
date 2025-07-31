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
<div className="flex flex-col min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0ecf8] to-[#f8fafc] transition-colors duration-500">
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
            className="group fixed bottom-8 right-5 md:right-8 bg-white/10 backdrop-blur-xl border border-white/20 text-white p-3 rounded-xl rotate-[45deg] hover:scale-110 shadow-2xl hover:bg-indigo-600/80 transition cursor-pointer z-50 glassmorphic-btn"
            aria-label="Scroll to top"
            style={{
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            <FaChevronUp className="-rotate-45 group-hover:scale-130 text-gray-200 group-hover:text-indigo-300" />
          </button>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/9384812940"
            target="_blank"
            rel="noopener noreferrer"
            className="group fixed bottom-8 left-5 md:left-8 z-50 bg-green-700/80 hover:bg-white/10 backdrop-blur-xl p-3 rounded-full border border-white/30 shadow-2xl transition-all hover:scale-110 glassmorphic-btn"
            aria-label="WhatsApp Inquiry"
            style={{
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            <FaWhatsapp className="text-white group-hover:text-green-400 text-xl" />
            <span className="absolute left-14 top-1/2 -translate-y-1/2 text-xs font-medium bg-green-500/90 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
              Chat on WhatsApp
            </span>
          </a>
        </>
      )}
    </div>
  );
};

export default Layout;
