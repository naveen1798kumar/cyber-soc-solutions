import React from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";
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
      className="relative h-[300px] md:h-[500px] w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${service?.image || backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>

      {/* Content */}
      <div
        className="relative z-10 text-center text-white px-6"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
          {service?.title || title}
        </h1>
        {description && (
          <p
            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {service?.description || description}
          </p>
        )}
        <button
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ServiceBanner;
