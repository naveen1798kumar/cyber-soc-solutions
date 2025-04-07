import React from "react";
import { servicesData } from "../../data/servicesData";

function ServicesSection() {
  return (
    <div className="container mx-auto px-6 lg:px-20">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center">
        Our Services
      </h2>
      <p className="mt-4 text-lg text-gray-700 text-center max-w-3xl mx-auto">
        Explore our wide range of IT solutions tailored to your needs.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(servicesData).map(([key, service]) => (
          <div key={key} className="p-6 bg-white shadow-lg rounded-lg">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-bold text-gray-900">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-700">{service.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
