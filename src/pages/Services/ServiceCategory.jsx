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
    <div
      className="
        relative w-full max-w-6xl mx-auto
        bg-white rounded-2xl shadow-2xl
        p-8 md:p-12
        min-h-[80vh] max-h-[90vh] overflow-y-auto
        flex flex-col
        animate-fadeIn
      "
      style={{
        boxShadow: "0 8px 40px 0 rgba(0,0,0,0.18)",
        border: "1px solid #e5e7eb",
      }}
    >
      {/* Close Button */}
      <button
        className="absolute top-6 right-8 text-gray-400 hover:text-red-500 text-4xl font-bold transition-colors z-10"
        onClick={onClose}
        aria-label="Close"
        style={{
          background: "rgba(255,255,255,0.8)",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        &times;
      </button>

      {/* Header */}
      <div className="mb-8 mt-2 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          {category.title}
        </h2>
        <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.length === 0 ? (
          <div className="col-span-full text-center text-gray-400 py-10">
            No services found in this category.
          </div>
        ) : (
          services.map((service) => (
            <ServiceCard
              key={service._id}
              category={category.id}
              service={service}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ServiceCategory;
