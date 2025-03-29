import React, { useEffect } from 'react';
import bgImage from "../../assets/Hero-Slider/Slider-1.jpg"

function Founder() {
  return (
<div>
  <div className="w-full bg-gray-100 py-6 md:pt-12">
    <section className="container mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-12 px-6 md:px-12 lg:px-20">
      
      {/* Text Content */}
      <div className="text-center lg:text-left" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Us
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          With over a decade of expertise, we specialize in Networking Solutions, Web Development, and Automation  
          to enhance security, efficiency, and connectivity in homes, offices, and industries.
        </p>
        <p className="mt-6 text-gray-700 text-lg">
          We are committed to delivering smart, scalable, and future-proof solutions  
          that enhance security, optimize workflows, and drive digital transformation.
        </p>
      </div>

      {/* Image Section */}
      <div 
        className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
        data-aos="fade-left"
      >
        <img 
          src={bgImage}
          alt="Our Services"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  </div>
</div>

  )
}

export default Founder
