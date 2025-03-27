import React from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../../data/servicesData";

const ServiceCategory = ({ category, onClose }) => {
  return (
    <div
      className="p-8 bg-white rounded-lg transition-all duration-500 ease-in-out overflow-hidden"
      data-aos="fade-up"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-extrabold text-blue-700">{servicesData[category].title}</h2>
        <button
          onClick={onClose}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300"
        >
          Back to Services
        </button>
      </div>

      <p className="text-gray-600 mt-2">{servicesData[category].description}</p>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {servicesData[category].services.map((service) => (
          <ServiceCard key={service.id} service={service} category={category} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory;
