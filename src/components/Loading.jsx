import React from "react";
import logo from "../assets/cybersoc-logo.png";

function Loading() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-br from-[#093028] via-indigo-500 to-[#093028] overflow-hidden">
      {/* Backdrop blur overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

      <div className="relative flex flex-col items-center text-center px-8 py-12 rounded-2xl shadow-2xl bg-white/5 border border-white/10 backdrop-blur-md">
        {/* Logo */}
        <img
          src={logo}
          alt="CyberSoc Logo"
          className="w-32 h-32 mb-6 rounded-full border-4 border-white/90 shadow-xl"
        />

        {/* Welcome Message */}
        <h1 className="text-4xl font-extrabold text-white drop-shadow-md">
          Welcome to <span className="block text-gray-800 py-2 underline-offset-2">Cybersoc Solutions</span>Pvt. Limited
        </h1>
        <p className="mt-4 text-gray-300 text-lg">
          Preparing your experience...
        </p>
      </div>
    </div>
  );
}

export default Loading;
