import { useState } from "react";
import { servicesData } from "../../data/servicesData";
import Banner from "../../components/Banner";
import ServiceList from "../../pages/Services/ServiceList";
import ServiceCategory from "../../pages/Services/ServiceCategory";
import aboutBanner from "../../assets/Hero-Slider/Slider-3.jpg";

const Services = () => {
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <>
    <div className="">
    <Banner
        backgroundImage={aboutBanner}
        title="Services We Offer"
        description="We provide cutting-edge cybersecurity and automation solutions to protect businesses from modern threats and enhance operational efficiency."
      />

      <div className="p-6 md:p-12 overflow-x-hidden">
        {!openCategory ? (
          <ServiceList onCategorySelect={setOpenCategory} />
        ) : (
          <ServiceCategory category={openCategory} onClose={() => setOpenCategory(null)} />
        )}
      </div>
    </div>
    </>
  );
};

export default Services;


  {/* 
<button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
  Learn More
</button>
  */}

  {/* <div className="bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full mx-auto w-24 h-24 flex items-center justify-center transition-all duration-300">
  <i className={`${icon} text-white text-2xl group-hover:scale-115`} />
  </div> 
  */}