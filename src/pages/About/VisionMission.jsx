import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bgImage from "../../assets/intercom-main-gate-residential-building.jpg"

const VisionMission = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container flex flex-col-reverse md:flex-row justify-between gap-8 mx-auto px-6 md:px-12 lg:px-20">
        {/* Image Section */}
        <div className="w-full flex justify-center h-[500px] mb-10" data-aos="fade-down">
          <img 
            src= {bgImage}
            alt="Our Vision & Mission" 
            className="w-full max-w-3xl h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1  gap-12">
          {/* Vision */}
          <div className=" md:text-left" data-aos="fade-right">
            <h2 className=" text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              With over a decade of expertise, we aim to revolutionize Networking Solutions, Web Development, and Automation.
              Our vision is to integrate cutting-edge technology that enhances security, optimizes efficiency, and fosters 
              seamless connectivity in homes, offices, and industries.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              We aspire to be pioneers in creating intelligent digital ecosystems that empower businesses and individuals,
              ensuring a future driven by innovation and automation.
            </p>
          </div>
          
          {/* Mission */}
          <div className=" md:text-left" data-aos="fade-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to provide smart, scalable, and future-proof solutions that drive digital transformation.
              Through advanced Networking, Web Development, and Automation technologies, we empower businesses to
              achieve operational excellence, security, and seamless connectivity.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              We are committed to innovation, reliability, and customer satisfaction, delivering tailor-made
              solutions that enhance security, optimize workflows, and create a sustainable digital future.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              By embracing AI-driven automation, cloud networking, and intuitive software development,
              we strive to build a smarter and more connected world for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
