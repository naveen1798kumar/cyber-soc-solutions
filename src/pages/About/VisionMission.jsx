import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bgImage from "../../assets/intercom-main-gate-residential-building.jpg";

const VisionMission = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Image with hover glass effect */}
        <div
          className="relative w-full lg:w-[40%] h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl group"
          data-aos="fade-right"
        >
          <img
            src={bgImage}
            alt="Vision and Mission"
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* Glass strip hover effect */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 left-1/4 w-3/4 h-full bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 group-hover:left-full transition-all duration-500 ease-in-out pointer-events-none rounded-2xl" />
          </div>
        </div>

        {/* Vision & Mission Text Content */}
        <div className="w-full lg:w-1/2 space-y-12">
          {/* Section Title */}
          <div className="text-center lg:text-left" data-aos="fade-up">
            <p className="text-sm bg-gray-300/90 rounded-lg px-4 py-1 tracking-wide text-center  w-max font-semibold uppercase text-indigo-600 mb-2">
              What Drives Us
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Our Vision & Mission
            </h2>
            <div className="w-24 h-1 bg-indigo-500 rounded-full mx-auto lg:mx-0 mb-4"></div>
          </div>

          {/* Vision */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We envision a future where cutting-edge technology transforms the way people connect, live, and do business.
              By advancing Networking, Automation, and Digital Development, our goal is to build secure and intelligent ecosystems
              that empower global progress through innovation.
            </p>
          </div>

          {/* Mission */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to deliver secure, scalable, and tailored tech solutions that drive digital transformation.
              We are committed to empowering clients with innovative tools and strategies that enhance operational efficiency,
              security, and long-term sustainability.
            </p>
            <p className="mt-3 text-gray-700 text-lg leading-relaxed">
              By combining automation, cloud networking, and AI-enabled systems, we help businesses stay competitive in a fast-evolving digital world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
