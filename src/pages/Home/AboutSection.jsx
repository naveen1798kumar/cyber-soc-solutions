import React, { useEffect } from 'react';
import bgImage from "../../assets/Hero-Slider/Home-Automation.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full bg-gray-100 py-12 md:py-20">
      <section className="container mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-12 px-6 md:px-12 lg:px-20">
        {/* Text Content */}
        <div 
          className="text-center lg:text-left"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Us
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            We are committed to delivering innovative solutions that empower businesses and individuals. 
            Our team specializes in cutting-edge technology, design, and strategy to bring ideas to life.
          </p>
          <p className="mt-4 text-gray-600 text-lg">
            Join us on our journey as we create experiences that make a difference in the digital world.
          </p>
        </div>

        {/* Image Section */}
        <div 
          className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
          data-aos="fade-left"
        >
          <img 
            src={bgImage}
            alt="About Us"
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
