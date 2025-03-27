import React from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../../data/servicesData";
import ServiceBanner from "../../components/ServiceBanner";
import FAQSection from "../../components/FAQSection";

import aboutBanner from "../../assets/42.jpg"

import AOS from "aos";
import "aos/dist/aos.css";


const ServiceDetails = () => {
  const { category, serviceId } = useParams();
  const categoryData = servicesData[category];

  if (!categoryData) return <h2 className="text-center mt-10">Category Not Found</h2>;

  const service = categoryData.services.find((s) => s.id === serviceId);

  if (!service) return <h2 className="text-center mt-10">Service Not Found</h2>;

  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="p-6">
      <ServiceBanner
        backgroundImage=""
        
      />

      <h2 className="text-3xl font-bold">{service.title}</h2>
      <p className="text-gray-600 mt-4">{service.description}</p>

      <section className="py-12 px-6 md:px-20">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-center" data-aos="fade-up">
          Intelligent Gate Automation Solutions
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mt-4" data-aos="fade-up">
          Our gate automation services ensure security, convenience, and smart control. We provide automated gates for residential, commercial, and industrial use.
        </p>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-12 px-6 md:px-20 py-12">

        <div className="w-full md:w-1/2" data-aos="fade-right">
          <img src={aboutBanner} alt="Gate Automation" className="w-full rounded-lg shadow-lg" />
        </div>

        <div className="w-full md:w-1/2" data-aos="fade-left">
          <h3 className="text-3xl font-extrabold text-gray-900">Why Choose Our Gate Automation?</h3>
          <p className="text-lg text-gray-700 mt-4">
            Our automation solutions offer enhanced security, ease of access, and seamless integration with smart home systems. Key benefits include:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
            <li>Remote access control via mobile app.</li>
            <li>Durable and weather-resistant materials.</li>
            <li>Integration with CCTV and security systems.</li>
            <li>Customizable options for different gate types.</li>
          </ul>
        </div>
      </section>

      <FAQSection image={aboutBanner} />
    </div>
  );
};

export default ServiceDetails;

// this is the final update of the component
// load every data from the services.js file
// also update the .js file with all required datas for the service page