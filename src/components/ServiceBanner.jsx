import React from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import webdevelopment from "../assets/4201.jpg"

import backgroundImage from "../assets/our-sevices-banner.jpg"

const ServiceBanner = ({ title, description }) => {
  const { category, serviceId } = useParams();
  const categoryData = servicesData[category];

  const service = categoryData.services.find((s) => s.id === serviceId);
  return (
    <div
      className="relative h-[300px] md:h-[400px] w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${webdevelopment})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold">{service.title}</h1>
        {description && <p className="mt-4 text-lg md:text-xl">{service.description}</p>}
      </div>
    </div>
  );
};

export default ServiceBanner;
 