import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import servicesData from "../data/servicesData";
import backgroundImage from "../assets/our-sevices-banner.jpg";
import "aos/dist/aos.css";
import AOS from "aos";

const ServiceBanner = ({ title, description }) => {
  const { category, serviceId } = useParams();
  const categoryData = servicesData[category];
  const service = categoryData?.services.find((s) => s.id === serviceId);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Prefer service image, fallback to default
  const bannerImage = service?.image || backgroundImage;

  return (
    <section
      className="relative min-h-[75vh] w-full flex items-center justify-center bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-blue-700/60"
      style={{
        backgroundImage: `linear-gradient(120deg,rgba(30,41,59,0.7),rgba(67,56,202,0.5)),url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8 py-16 space-y-8"
        data-aos="fade-up"
      >
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl drop-shadow-lg"
          style={{
            textShadow: `
              0 4px 24px rgba(0,0,0,0.25),
              0 1px 2px rgba(0,0,0,0.15)
            `,
            letterSpacing: "0.01em",
          }}
          data-aos="fade-up"
        >
          {service?.title || title}
        </h1>
        <p
          className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-medium text-white/90"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {service?.description || description}
        </p>
        <Link
          to="/services"
          className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-lg font-semibold rounded-full shadow-xl hover:from-blue-700 hover:to-indigo-800 transition-transform duration-300 hover:scale-105 border-2 border-white/10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Explore More Services
        </Link>
      </div>
    </section>
  );
};

export default ServiceBanner;