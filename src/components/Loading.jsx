import React from "react";
import logo from "../assets/cybersoc-logo.png";
// import { useNavigate } from "react-router-dom";

function Loading() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-[#093028] via-indigo-500 to-[#237a57]">
      {/* linear-gradient(90deg, #093028 0%, #237a57 100%) */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-lg"></div>
      <div className="relative  p-10 w-[60%] text-center ">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-36 h-36 mx-auto mb-6  animate-pulse p-2 rounded-full border-4 border-white/30 shadow-lg"
        />

        {/* Welcome Message */}
        <h1 className="text-4xl font-bold text-white">
          Welcome to <span className="text-blue-200">CyberSoc</span>
        </h1>
        {/* <p className="mt-2 text-gray-200">
          Preparing your experience, please wait...
        </p> */}

        {/* Loading Animation */}
        {/* <div className="mt-6 flex justify-center">
          <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        </div> */}
      </div>
    </div>
  );
}

export default Loading;