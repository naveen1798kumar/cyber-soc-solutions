import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesData";
import { div } from "framer-motion/client";

function ServicesSection() {
  const scrolltotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-gray-200 py-12 md:py-20 lg:mt-20">
          <div className="container mx-auto ">
      {/* Section Heading */}
      <h2
        className="relative text-4xl text-center md:text-5xl font-extrabold text-gray-900 tracking-wide leading-tight 
                after:absolute after:content-[''] after:w-30 after:h-1 after:bg-blue-600 
               after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 mb-6 md:mb-4"
        data-aos="fade-left"
      >
        Our Services
      </h2>
      <p className="mt-4 text-lg text-gray-700 text-center max-w-3xl mx-auto">
        Discover our comprehensive range of IT solutions designed to meet your business needs.
      </p>

      {/* Services Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(servicesData).map(([key, service], index) => (
          <div
            key={key}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            data-aos="fade-up"
            data-aos-delay={index * 200} // Add delay for each card
          >
            {/* Service Image */}
            <div className="relative overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col justify-between min-h-[250px]">
              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 line-clamp-3 mb-4">
                {service.description}
              </p>

              {/* Button */}
              <Link
                to={`/services/${key}`}
                onClick={scrolltotop}
                className="inline-block w-fit self-start px-5 py-2 rounded-lg border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default ServicesSection;