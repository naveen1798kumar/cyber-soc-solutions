import React, { useEffect } from "react";
import { FaLaptopCode, FaChartLine, FaNetworkWired, FaHome } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Web & Software Development",
    description:
      "We build scalable, high-performance websites and software tailored to your business needs.",
    icon: <FaLaptopCode className="text-4xl text-blue-500 mb-3" />,
    details: ["Custom Web Development", "E-commerce Solutions", "Mobile App Development", "Enterprise Software"]
  },
  {
    title: "Digital Marketing",
    description:
      "Maximize your online reach with expert SEO, PPC, and social media marketing strategies.",
    icon: <FaChartLine className="text-4xl text-green-500 mb-3" />,
    details: ["SEO Optimization", "Social Media Management", "Content Marketing", "PPC Advertising"]
  },
  {
    title: "Networking Solutions",
    description:
      "Reliable and secure networking solutions, including server setup and firewall configuration.",
    icon: <FaNetworkWired className="text-4xl text-red-500 mb-3" />,
    details: ["Network Setup", "Cloud Integration", "Firewall & Security", "Server Management"]
  },
  {
    title: "Automation Services",
    description:
      "Enhance security and convenience with smart automation solutions for homes, offices, and gates.",
    icon: <FaHome className="text-4xl text-yellow-500 mb-3" />,
    details: ["Home Automation", "Office Automation", "Gate Security Systems", "IoT Solutions"]
  },
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="relative text-4xl md:text-5xl text-center font-extrabold text-gray-900 tracking-wide leading-tight 
               before:absolute before:content-[''] before:w-20 before:h-1 before:bg-blue-500 
               before:bottom-0 before:left-1/2 before:-translate-x-1/2 
               after:absolute after:content-[''] after:w-10 after:h-1 after:bg-blue-300 
               after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 mb-6 md:mb-2"
    data-aos="fade-up">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative group w-full h-[250px] bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer" data-aos="fade-up" data-aos-delay={`${index * 300}`}>
              {/* Default Card */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500 group-hover:-translate-x-full">
                {service.icon}
                <h3 className="text-xl font-bold text-gray-900 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center text-sm mt-2">
                  {service.description}
                </p>
              </div>

              {/* Hover Card */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-500 text-white p-6 translate-x-full transition-all duration-500 group-hover:translate-x-0">
                <h3 className="text-xl font-bold">Services Offered</h3>
                <ul className="text-center text-sm mt-2 space-y-1">
                  {service.details.map((item, i) => (
                    <li key={i} className="text-white">• {item}</li>
                  ))}
                </ul>
              </div>      
          {/* <div className="absolute -top-[500px] w-4 h-[640px] rotate-45 bg-white/20 backdrop-blur-lg transition-all duration-700 ease-in-out group-hover:top-[500px]"></div>  */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
