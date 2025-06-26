import React from "react";
import { Link } from "react-router-dom";
import servicesData from "../../data/servicesData";

function ServicesSection() {
  const scrolltotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-gray-200 py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
    <p className="text-sm bg-gray-300/90 rounded-lg px-4 py-1 tracking-wide text-center mx-auto w-max font-semibold uppercase text-indigo-600 mb-2"
    data-aos="fade-left" >Services</p>
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
<div className="p-6 flex flex-col justify-between min-h-[250px] relative overflow-hidden">
  {/* Title */}
  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#008080] transition-colors duration-300">
    {service.title}
  </h3>

  {/* Description */}
  <p className="text-gray-600 mb-6 transition-all duration-500 transform md:group-hover:translate-y-5 opacity-100 md:group-hover:opacity-20">
    {service.description}
  </p>

  {/* Button */}
  {/* Mobile/Tablet View */}
  <Link
    to={`/services/${key}`}
    onClick={scrolltotop}
    className="inline-block w-max mt-auto px-5 py-2 rounded-full border-2 border-[#027070] text-[#027070] font-medium 
      transition-all duration-300 md:hidden"
  >
    Learn More
  </Link>

  {/* Desktop Hover Button */}
  <Link
    to={`/services/${key}`}
    onClick={scrolltotop}
    className="hidden md:inline-block absolute bottom-6 left-6 px-5 py-2 rounded-full border-2 border-[#027070] text-[#027070] font-medium 
      transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
  >
    Learn More
  </Link>
</div>

            </div>
          ))}
        </div>
      </div>
      {/* Closing Statement */}
<div className="mt-20 flex justify-between items-center text-center max-w-4xl mx-auto" data-aos="fade-up">
  <p className="text-xl text-gray-800 font-medium mb-4 max-w-2xl">
    We offer top-tier IT services catered to businesses. Renowned for excellence, we're among the city's best Computer Service providers.
  </p>
  {/* <Link
    to="/services"
    onClick={scrolltotop}
    className="inline-block mt-4 px-6 py-3 bg-[#027070] text-white rounded-full font-semibold shadow-md hover:bg-[#025050] transition-colors duration-300"
  >
    Reach Us
  </Link> */}

          <Link
            to="/services"
            onClick={scrolltotop}
            className="relative inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#027070] to-[#008080] rounded-full overflow-hidden group shadow-lg transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="absolute inset-0 bg-gradient-to-r  from-gray-600 to-gray-600 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></span>
            <span className="relative z-10 flex items-center gap-2">
              Reach Us
            </span>
          </Link>
</div>

    </section>
  );
}

export default ServicesSection;
