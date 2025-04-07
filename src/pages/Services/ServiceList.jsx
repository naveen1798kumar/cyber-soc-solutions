import React from "react";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../../data/servicesData";
import { IoIosArrowForward } from "react-icons/io";

const ServiceList = ({ onCategorySelect }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
    navigate(`/services/${category}`); // Store category in URL
  };
  return (
  <>
  <div className="relative container mx-auto my-6">
  <h2 className=" text-3xl md:text-5xl font-extrabold text-gray-900 text-center leading-tight tracking-wide before:absolute before:content-[''] before:w-20 before:h-1 before:bg-blue-500 before:bottom-0 before:left-1/2 before:-translate-x-1/2 after:absolute after:content-[''] after:w-10 after:h-1 after:bg-blue-300 after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2"  data-aos='fade-up' >
  Transform Your Business with Our Expertise
</h2>
<p className="mt-4 text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed" data-aos='fade-up'>
  Explore our comprehensive IT solutions designed to enhance security, optimize operations, and drive innovation for your business.
</p>

<div className="mt-16 space-y-24">
    {Object.entries(servicesData).map(([category, data], index) => (
      <div
        key={index}
        className={`relative flex flex-col md:flex-row gap-12  transition-all duration-500 ease-in-out rounded-2xl p-4 md:p-12
        ${index % 2 === 0 ? "md:flex-row-reverse" : ""}
        `}
      id={data.id}
      >
        {/* 🔹 Service Image */}
        <div 
  className="relative w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 group"
  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
>
  <img
    src={data.image}
    alt={data.title}
    className="w-full h-96 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75 group-hover:opacity-90 translate-y-full group-hover:translate-y-0 transition-opacity duration-300"></div>
</div>
    {/* 🔹 Service Details */}
   <div 
          className="w-full md:w-1/2 text-left"
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <h3 className="text-4xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
        {data.title}
        </h3>

          <p className="mb-4 lg:tracking-wide text-lg lg:text-xl lg:leading-9 text-gray-700 mt-3 leading-relaxed">
            {data.description}
          </p>

          {/* 🔹 Learn More Button */}
          <button 
            onClick={() => onCategorySelect(category)} 
            className="group flex justify-center items-center gap-4 mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-500 cursor-pointer hover:translate-x-4 "
          >
            <span>Learn More</span><IoIosArrowForward />
          </button>
        </div>     
      </div>
    ))}
</div>
  </div>
  </>
  );
};

export default ServiceList;
