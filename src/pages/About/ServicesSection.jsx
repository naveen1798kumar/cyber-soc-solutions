import React, { useEffect } from "react";
import { FaLaptopCode, FaChartLine, FaNetworkWired, FaHome } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
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
  },
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
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Heading */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12"
          data-aos="fade-up"
        >
          Our Core Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {services.map((service, index) => (
            <div
  key={index}
  className="relative bg-white shadow-lg rounded-xl overflow-hidden h-64 group"
  data-aos="fade-up"
  data-aos-delay={`${index * 200}`}
>
  {/* Front Side */}
  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500 group-hover:-translate-x-full">
    {service.icon}
    <h3 className="text-xl font-bold text-gray-900 text-center">{service.title}</h3>
    <p className="text-gray-600 text-center text-sm mt-2">{service.description}</p>
  </div>

  {/* Back Side */}
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 translate-x-full transition-all duration-500 group-hover:translate-x-0">
    <h3 className="text-xl font-bold mb-3">Services Offered</h3>
    <ul className=" text-sm space-y-2">
      {service.details.map((item, i) => (
        <li key={i} className="text-white">• {item}</li>
      ))}
    </ul>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;