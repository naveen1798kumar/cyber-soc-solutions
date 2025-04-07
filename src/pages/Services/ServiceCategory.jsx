import React from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../../data/servicesData";

const ServiceCategory = ({ category, onClose }) => {
  return (
    <div
      className="p-8 mt-8 bg-white rounded-lg transition-all duration-500 ease-in-out overflow-hidden"
      data-aos="fade-up"
      id="service-id"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h2 className="text-3xl text-gray-900 font-extrabold mb-4 md:mb-0">
          {servicesData[category].title}
        </h2>
        <div className="text-end md:text-center w-full md:w-auto md:pb-0">
          <button
            onClick={onClose}
            className="cursor-pointer min-w-[150px] p-3 lg:px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium rounded-full shadow-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-500 hover:scale-110 hover:-translate-x-2"
          >
            Back to Services
          </button>
        </div>
      </div>

      <p className="text-gray-700 mt-4 text-lg leading-relaxed">
        {servicesData[category].description}
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {servicesData[category].services.map((service) => (
          <ServiceCard key={service.id} service={service} category={category} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory;
