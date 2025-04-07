import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import partner from "../assets/partners.png"

import autozon from "../assets/partners/autozon_gate_motor.png"
import hiFocus from "../assets/partners/hiFocus.webp"
import Inflow from "../assets/partners/Inflow-Logo.png"
import PaloAlto from "../assets/partners/PaloAltoNetworks.png"

const partners = [PaloAlto, autozon, hiFocus, Inflow, partner]
const PartnersCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="px-4 py-8 md:p-12 md:mx-16  overflow-hidden bg-gradient-to-r from-[#fdfbfb] to-[#ebedee] rounded-xl shadow-lg">
      {/* linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%) */}
    <h2 className="relative text-5xl font-extrabold text-gray-900 text-center leading-tight tracking-wide before:absolute before:content-[''] before:w-20 before:h-1 before:bg-blue-500 before:bottom-0 before:left-1/2 before:-translate-x-1/2 after:absolute after:content-[''] after:w-10 after:h-1 after:bg-blue-300 after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2">
      Our Successful Partners
    </h2>
    <Slider {...settings} className="mt-8">
      {partners.map((partner, index) => (
        <div key={index} className="p-4">
          <img src={partner} alt={`Partner ${index + 1}`} className="mx-auto w-48 h-48  grayscale-50 hover:-translate-y-2 hover:grayscale-25 transition-all duration-300 object-contain" />
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default PartnersCarousel;
