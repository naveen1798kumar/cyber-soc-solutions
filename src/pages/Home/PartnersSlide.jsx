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
      <h2 className="relative text-4xl text-center md:text-5xl font-extrabold text-gray-900 tracking-wide leading-tight 
                after:absolute after:content-[''] after:w-30 after:h-1 after:bg-blue-600 
               after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 mb-6 md:mb-4"
        data-aos="fade-left"
      >
        Our Successful Partners
      </h2>

      {/* Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-16 w-max">
          {scrollingPartners.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index}`}
              className="h-24 w-40 object-contain transition duration-300 hover:-translate-y-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSlide;
