import React from "react";
import { servicesData } from "../../data/servicesData";
import { IoIosArrowForward } from "react-icons/io";

const ServiceList = ({ onCategorySelect }) => {
  return (
    <>
<h2 className="text-5xl font-bold text-gray-900 text-center leading-tight tracking-wide">
  Transform Your Business with Our Expertise
</h2>
<p className="mt-4 text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
  Explore our comprehensive IT solutions designed to enhance security, optimize operations, and drive innovation for your business.
</p>

<div className="mt-16 space-y-24">
    {Object.entries(servicesData).map(([category, data], index) => (
      <div
        key={category}
        className={`relative flex flex-col md:flex-row items-center gap-12  transition-all duration-500 ease-in-out shadow-2xl rounded-2xl p-8 md:p-12
        ${index % 2 === 0 ? "md:flex-row-reverse" : ""}
        ${index % 4 === 0 ? "bg-gradient-to-r from-blue-50 to-blue-100" : 
          index % 4 === 1 ? "bg-gradient-to-r from-green-50 to-green-100" :
          index % 4 === 2 ? "bg-gradient-to-r from-indigo-50 to-indigo-100" :
          "bg-gradient-to-r from-orange-50 to-orange-100"}
        `}
      >
        {/* 🔹 Service Image */}
        <div 
          className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
          data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
        >
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-96 object-cover rounded-lg transform transition-all duration-300 hover:scale-105"
          />
        </div>

        {/* 🔹 Service Details */}
        <div 
          className="w-full md:w-1/2 text-left"
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <h3 className="text-4xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
        {data.title}
        </h3>

          <p className="text-lg text-gray-700 mt-3 leading-relaxed">
            {data.description}
          </p>

          {/* 🔹 Learn More Button */}
          <button 
            onClick={() => onCategorySelect(category)} 
            className="group flex justify-center items-center gap-4 mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-500 cursor-pointer hover:translate-x-4 "
          >
            <span>Learn More</span><IoIosArrowForward 
            // className="hidden group-hover:block"
            />
          </button>
        </div>
      </div>
    ))}
  </div>
    </>
  );
};

export default ServiceList;
