import React, { useEffect } from "react";
import bgImage from "../../assets/blogs/aboutus-cybersoc.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrolltotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="w-full bg-gray-100 py-12 md:py-20">
      <section className="container mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-12 px-6 md:px-12 lg:px-20">
        {/* Text Content */}
        <div className=" lg:text-left" data-aos="fade-up">
          <h2 className="relative text-center text-4xl md:text-5xl font-extrabold text-gray-900 tracking-wide leading-tight 
               before:absolute before:content-[''] before:w-20 before:h-1 before:bg-blue-500 
               before:bottom-0 before:left-1/2 before:-translate-x-1/2 
               after:absolute after:content-[''] after:w-10 after:h-1 after:bg-blue-300 
               after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 mb-6 md:mb-4">
            About CyberSoc
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Based in <strong>Coimbatore</strong>, <strong className="transition-all duration-500 bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600">CyberSoc</strong> is a trusted leader in <strong className="transition-all duration-500 bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600"> Cyber Security</strong>, <strong className="transition-all duration-500 bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600">Automation</strong>, and 
            <strong className="transition-all duration-500 bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600"> Web Application Development</strong>. With over 
            <strong> 10 years of experience</strong>, we specialize in delivering 
            innovative solutions that empower businesses and individuals to thrive 
            in a connected world.
          </p>
          <p className="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed">
            Our expertise includes <strong className="transition-all duration-500 bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600">Networking Solutions</strong>, 
            <strong className="transition-all duration-500 bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600"> Firewall Configuration</strong>, <strong className="transition-all duration-500 bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600">CCTV/Biometric Systems</strong>, 
            and <strong className="transition-all duration-500 bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600">Office Setup</strong>. We also provide comprehensive 
            <strong className="transition-all duration-500 bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600"> Accessories Sales & Services</strong>, ensuring end-to-end 
            solutions for our clients.
          </p>
          <p className="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed">
            At <strong className="transition-all duration-500 bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600">CyberSoc</strong>, we are committed to innovation, reliability, and excellence. 
            Join us as we create a secure and automated future for businesses worldwide.
          </p>
          <Link
          to="/about"
          onClick={scrolltotop}
          className="inline-block mt-6 px-8 py-3 border-2 border-blue-600 text-blue-600 text-lg font-semibold rounded-lg shadow-md bg-transparent hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105">
          Learn More About Us
          </Link>
        </div>

        {/* Image Section */}
        <div
          className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
          data-aos="fade-left"
        >
          <img
            src={bgImage}
            alt="About CyberSoc"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}

export default AboutUs;

/*
Networking Solutions and Services,
Firewall Configuration,
CCTV / Biometric,
Office Setup,
All Accessories Sales &Services, these are the services we provide in our website
update our Our Services Component with it, use card slides for displaying our services
*/  
