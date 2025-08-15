import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ServiceList = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error loading categories:", err));
  }, []);
 
  const handleNavigate = (cat) => {
    const slug = cat.slug || cat.title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/services/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-10">
      <div className="space-y-24">
        {categories.map((cat, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={cat._id}
              data-aos={isEven ? "fade-right" : "fade-left"}
              className={`flex flex-col md:flex-row ${
                !isEven ? "md:flex-row-reverse" : ""
              } items-stretch bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden transition-all duration-500 h-auto md:h-[500px]`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 h-64 md:h-full">
                <img
                  src={cat.image}
                  alt={`Image of ${cat.title}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-start p-6 md:p-12 bg-white bg-opacity-70">
                <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {cat.title}
                </h2>
                <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                  {cat.description}
                </p>
                <button
                  onClick={() => handleNavigate(cat)}
                  className="mt-6 w-max px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-500"
                >
                  Learn More <IoIosArrowForward className="inline ml-2" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceList;
