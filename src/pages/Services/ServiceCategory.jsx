import React, { useEffect, useState } from "react";
import axios from "axios";
import ServiceCard from "./ServiceCard";

const ServiceCategory = ({ category, onClose }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (category && category._id) {
      axios
        .get(`/api/services?category=${category._id}`)
        .then((res) => setServices(res.data))
        .catch((err) => console.error("Failed to load services:", err));
    }
  }, [category]);

  return (
    <div className="relative p-6 md:p-8 min-h-screen bg-white/90 rounded-xl shadow-xl">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-red-500 hover:text-black text-3xl font-bold"
        onClick={onClose}
      >
        &times;
      </button>

      {/* Header */}
      <div className="mb-4 mt-2">
        <h2 className="text-3xl font-extrabold text-gray-900">{category.title}</h2>
        <p className="text-gray-700 text-lg mt-2">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services.map((service) => (
          <ServiceCard key={service._id} category={category.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory;
