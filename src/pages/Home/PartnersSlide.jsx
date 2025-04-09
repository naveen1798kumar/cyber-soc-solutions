import autozon from "../../assets/partners/autozon_gate_motor.png";
import hiFocus from "../../assets/partners/hiFocus.webp";
import Inflow from "../../assets/partners/Inflow-Logo.png";
import PaloAlto from "../../assets/partners/PaloAltoNetworks.png";
import partner from "../../assets/partners.png";

const partners = [PaloAlto, autozon, hiFocus, Inflow, partner];

const PartnersSlide = () => {
  // Duplicate the array to create infinite effect
  const scrollingPartners = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden py-10 px-4 md:px-16 bg-gradient-to-r from-[#fdfbfb] to-[#ebedee] rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10 relative">
        <span className="relative z-10">Our Successful Partners</span>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500"></span>
        <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-10 h-1 bg-blue-300"></span>
      </h2>

      {/* Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-16 w-max">
          {scrollingPartners.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index}`}
              className="h-24 w-40 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSlide;
