import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CareerSection = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#e6f9f9] to-[#f0f9ff]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Move Your Career Forward
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Contribute, collaborate, and lead with <span className="text-[#027070] font-semibold">Infogain</span>.
          Check out our open positions in the US, India, UK, Singapore, UAE, and Poland.
        </p>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
          <img src="http://GPTW-logo" alt="Great Place To Work" className="h-12 object-contain" />
          <img src="http://GPTW-logo" alt="Great Place To Work" className="h-12 object-contain" />
          <img src="http://Best%20workplaces%20in%20Health%20&%20Wellness" alt="Best Workplace" className="h-12 object-contain" />
        </div>

        {/* CTA Button */}
        <Link
          to="/careers"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#027070] text-white text-lg font-medium rounded-full shadow-md hover:bg-[#025050] transition-colors duration-300"
        >
          Find Your Role <FaArrowRight className="text-sm" />
        </Link>
      </div>
    </section>
  );
};

export default CareerSection;
