import React, { useEffect } from 'react';
import bgImage from "../../assets/Hero-Slider/Slider-1.jpg"

function Founder() {
  return (
    <div>
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
    </div>
  )
}

export default Founder