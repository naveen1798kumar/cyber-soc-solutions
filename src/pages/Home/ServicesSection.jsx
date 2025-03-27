import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  { 
    id: 1, 
    title: "Networking Solutions", 
    description: "Efficient and secure networking solutions for businesses.",
    icon: "🌐",
    image: "https://source.unsplash.com/400x300/?networking,technology"
  },
  { 
    id: 2, 
    title: "Firewall Configuration", 
    description: "Advanced firewall setup to protect your data.",
    icon: "🛡️",
    image: "https://source.unsplash.com/400x300/?firewall,cybersecurity"
  },
  { 
    id: 3, 
    title: "CCTV & Biometric", 
    description: "High-quality surveillance and biometric solutions.",
    icon: "📹",
    image: "https://source.unsplash.com/400x300/?cctv,security"
  },
  { 
    id: 4, 
    title: "Office Setup", 
    description: "Complete IT infrastructure setup for offices.",
    icon: "🏢",
    image: "https://source.unsplash.com/400x300/?office,workspace"
  },
  { 
    id: 5, 
    title: "Accessories Sales & Services", 
    description: "All essential accessories with reliable support.",
    icon: "🖥️",
    image: "https://source.unsplash.com/400x300/?computer,accessories"
  },
];

function OurServices() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10" data-aos="fade-up">
          Our Services
        </h2>

        {/* Slider */}
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="p-4">
              <div 
                className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px] flex flex-col justify-between group transform transition duration-300 hover:shadow-2xl"
                data-aos="fade-up"
              >
                {/* Image */}
                <div className="relative">
                  <img 
                    src={service.image}   
                    alt={service.title} 
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300"></div>
                  {/* <div className="absolute top-4 left-4 text-5xl">{service.icon}</div> */}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                {/* Button */}
                <div className="pb-6 text-center">
                  <button className="px-6 py-2 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default OurServices;
