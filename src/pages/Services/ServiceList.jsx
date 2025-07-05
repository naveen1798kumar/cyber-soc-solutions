import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";

const iconMap = {
  "Web Development": "/icons/web-development.png",
  "Digital Marketing": "/icons/digital-marketing.png",
  "Networking & Security": "/icons/networking-security.png",
  "Home Automation": "/icons/home-automation.png",
};

const ServiceList = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("/api/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.error("Error loading categories:", err));
  }, []);

  return (
    <div className="relative container mx-auto my-6">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-6">
        Transform Your Business with Our Expertise
      </h2>
      <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
        Explore our comprehensive IT solutions designed to enhance security, optimize operations, and drive innovation.
      </p>

      <div className="mt-10 space-y-24">
        {categories.map((cat, index) => (
          <div
            key={cat._id}
            className={`relative flex flex-col md:flex-row gap-12 transition-all duration-500 p-4 md:p-12 rounded-2xl shadow-lg bg-white/80 backdrop-blur-md`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-4xl font-extrabold text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {cat.title}
              </h3>
              <p className="text-lg text-gray-700 mt-4">{cat.description}</p>
              <button
                onClick={() => onCategorySelect(cat)}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-500"
              >
                Learn More <IoIosArrowForward className="inline ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
