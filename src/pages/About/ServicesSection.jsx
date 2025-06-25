import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaChartLine, FaNetworkWired, FaHome, FaCheckCircle } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

import bgImage from "../../assets/4201.jpg"
import vectorbg from "../../assets/About-us/49189265.png"

const services = [
  {
    title: "Networking Solutions",
    description:
      "Reliable and secure networking solutions, including server setup and firewall configuration.",
    icon: <FaNetworkWired className="text-5xl text-red-500 mb-4" />,
    details: ["Network Setup", "Cloud Integration", "Firewall & Security", "Server Management"],
  },
  {
    title: "Automation Services",
    description:
      "Enhance security and convenience with smart automation solutions for homes, offices, and gates.",
    icon: <FaHome className="text-5xl text-yellow-500 mb-4" />,
    details: ["Home Automation", "Office Automation", "Gate Security Systems", "IoT Solutions"],
  },
  {
    title: "Web & Software Development",
    description:
      "We build scalable, high-performance websites and software tailored to your business needs.",
    icon: <FaLaptopCode className="text-5xl text-blue-500 mb-4" />,
    details: ["Custom Web Development", "E-commerce Solutions", "Mobile App Development", "Enterprise Software"],
  },
  {
    title: "Digital Marketing",
    description:
      "Maximize your online reach with expert SEO, PPC, and social media marketing strategies.",
    icon: <FaChartLine className="text-5xl text-green-500 mb-4" />,
    details: ["SEO Optimization", "Social Media Management", "Content Marketing", "PPC Advertising"],
  }
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


const scrolltotop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
  return (
    <section className="relative py-16 bg-gray-50" 
    style={{
      backgroundImage:`url(${bgImage})`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
    }}>
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sx z-0" 
    // style={{
    //   backgroundImage:`url(${vectorbg})`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   opacity: 0.7
    // }}
    />

<div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
  {/* Section Label */}
  <p
    className="text-sm bg-gray-300/90 rounded-lg px-4 py-1 tracking-wide text-center mx-auto w-max font-semibold uppercase text-indigo-600 mb-2"
    data-aos="fade-left"
  >
    Services
  </p>

  {/* Section Heading */}
  <h2
    className="text-4xl md:text-5xl font-extrabold text-center text-[#ffffff] mb-12"
    data-aos="fade-up"
  >
    Our Core Services
  </h2>

  {/* Services Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {services.map((service, index) => (
      <div
        key={index}
        className="relative bg-white shadow-md rounded-xl overflow-hidden h-64 group transition-transform duration-500 hover:scale-[1.03]"
        data-aos="fade-up"
        data-aos-delay={`${index * 200}`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 text-center transition-all duration-500 group-hover:-translate-x-full z-10">
          <div className="text-3xl text-blue-600 mb-2">{service.icon}</div>
          <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
          <p className="text-gray-600 text-sm mt-2">{service.description}</p>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-blue-500/60 to-indigo-600/60 backdrop-blur-md text-white px-6 py-8 rounded-xl translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-0">
          <h3 className="text-xl font-semibold text-gray-900 drop-shadow mb-4 tracking-wide">
            Services Offered
          </h3>
          <ul className="space-y-2 pl-2">
            {service.details.map((item, i) => (
              <li
                key={i}
                className="flex items-start text-sm md:text-base font-medium text-white/90"
              >
                <span className="mr-2 text-gray-900 text-lg"><FaCheckCircle/></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>

<div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="800">
  <Link
    to="/services"
    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm md:text-base font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
    onClick={() => {
      scrolltotop()
    }}
  >
    Explore All Services
    <FiArrowRight className="text-lg" />
  </Link>
</div>

</div>

    </section>
  );
};

export default ServicesSection;