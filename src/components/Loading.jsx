import React from "react";
import logo from "../assets/cybersoc-logo.png";

function Loading() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-br from-[#fbc2eb] to-[#a6c1ee] overflow-hidden">
      {/* background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%); */}
      {/* Animated Background Circles */}
      {/* <div className="absolute w-96 h-96 rounded-full bg-red-300 opacity-50 animate-pulse"></div>
      <div className="absolute w-72 h-72 rounded-full bg-red-400 opacity-30 animate-pulse delay-200"></div>
      <div className="absolute w-48 h-48 rounded-full bg-red-500 opacity-20 animate-pulse delay-400"></div> */}

      {/* Content Container */}
      <div className="relative flex flex-col items-center text-center px-10 py-12 
  bg-white/50 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 
  ring-1 ring-white/10">

      {/* background-color: #0093E9;
background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
 */}
        {/* Logo */}
        <img
          src={logo}
          alt="CyberSoc Solutions Logo"
          className="w-32 h-32 mb-6 cursor-pointer"
        />

        {/* Welcome Message */}
        <h1 className="text-4xl font-extrabold text-gray-800">
          Welcome to
          <span className="block text-indigo-600 py-2">
            CyberSoc Solutions Pvt. Limited
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Preparing your experience...
        </p>

        {/* Custom Dot Loader */}
        <div className="flex space-x-6 mt-6">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
        </div>
      </div>

      {/* Dot Animation Style */}
      <style>{`
        .dot {
          width: 20px;
          height: 20px;
          border-radius: 9999px;
          background: linear-gradient(to right, #7f00ff, #e100ff);
          animation: scalePulse 1.2s infinite ease-in-out;
        }

        .dot1 { animation-delay: 0s; }
        .dot2 { animation-delay: 0.2s; }
        .dot3 { animation-delay: 0.4s; }

        @keyframes scalePulse {
          0%, 100% {
            transform: scale(0.6);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2) translatez(25px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Loading;
