import React from "react";
import { Link } from "react-router-dom";
import servicesData from "../../data/servicesData";

function ServicesSection() {
  const scrolltotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-gray-200 py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h2
          className="relative text-4xl md:text-5xl font-extrabold text-center text-gray-900 tracking-tight mb-6"
          data-aos="fade-left"
        >
          <span className="relative text-center text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-12">
            Our Services
            <span className="block mt-2 w-24 h-1 bg-gradient-to-r from-[#008080] to-[#008080] mx-auto rounded-full"></span>
          </span>
        </h2>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-16">
          Discover our comprehensive range of IT solutions tailored to accelerate your business.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(servicesData).map(([key, service], index) => (
            <div
              key={key}
              className="group relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between min-h-[250px]">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#008080] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 line-clamp-4 mb-6">
                  {service.description}
                </p>

            {/* Button */}
              <Link
                to={`/services/${key}`}
                onClick={scrolltotop}
                className="inline-block w-fit self-start px-5 py-2 origin-center rounded-full border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
