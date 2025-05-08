import React from "react";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import servicesData from "../data/servicesData";
import backgroundImage from "../assets/our-sevices-banner.jpg";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

const ServiceBanner = ({ title, description }) => {
  const { category, serviceId } = useParams();
  const categoryData = servicesData[category];

  const service = categoryData?.services.find((s) => s.id === serviceId);

  // Initialize AOS
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="relative min-h-[50vh] h-auto w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${service?.image || backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>

      {/* Content */}
      <div
  className="relative z-10 flex flex-col items-center justify-center text-center text-gray-800 px-4 sm:px-6 lg:px-8 py-12 space-y-6"
  data-aos="fade-up"
>
  <h1
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide leading-tight px-4 max-w-4xl"
    style={{
      textShadow: `
        2px 2px 6px rgba(255, 255, 255, 0.3),
        -2px -2px 6px rgba(255, 255, 255, 0.3),
        1px -1px 3px rgba(255, 255, 255, 0.4),
        -1px 1px 3px rgba(255, 255, 255, 0.4)
      `
    }}
    data-aos="fade-up"
  >
    {service?.title || title}
  </h1>

  <Link
    to="/services"
    className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-transform duration-300 hover:scale-105"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    Explore More
  </Link>
</div>

    </div>
  );
};

export default ServiceBanner;
