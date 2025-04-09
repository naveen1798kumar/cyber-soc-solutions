import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { servicesData } from "../../data/servicesData";
import ServiceBanner from "../../components/ServiceBanner";
import FAQSection from "../../components/FAQSection";
import { FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { VscActivateBreakpoints } from "react-icons/vsc";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceDetails = () => {
  const { category, serviceId } = useParams();
  const navigate = useNavigate();
  const [openCategory, setOpenCategory] = useState(null); // Track which category is open

  // Fetch category and service data
  const categoryData = servicesData[category];
  const service = categoryData?.services.find((s) => s.id === serviceId);

  // Redirect if category or service is invalid
  useEffect(() => {
    if (!categoryData) {
      navigate("/404");
    }
  }, [categoryData, navigate]);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0); // Scroll to top on load
  }, [service]);

  if (!service) return <h2 className="text-center mt-10">Service Not Found</h2>;

  // Toggle category dropdown (close others when one is clicked)
  const toggleCategory = (categoryKey) => {
    setOpenCategory((prev) => (prev === categoryKey ? null : categoryKey));
  };

  return (
    <div className="flex flex-col overflow-hidden scrollbar-hide bg-gray-50">
      {/* Banner */}
      <ServiceBanner
        backgroundImage={service.image || ""}
        title={service.title}
        description={service.description}
      />

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block sticky top-20 h-[calc(100vh-5rem)] w-64 bg-gray-100 p-4 border-r border-gray-200 overflow-y-auto scrollbar-hide">
          {Object.entries(servicesData).map(([categoryKey, categoryValue]) => (
            <div key={categoryKey} className="mb-4">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(categoryKey)}
                className="flex items-center justify-between w-full px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition"
              >
                <span>{categoryValue.title}</span>
                {openCategory === categoryKey ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {/* Services Dropdown */}
              {openCategory === categoryKey && (
                <ul className="mt-2 space-y-2 pl-4">
                  {categoryValue.services.map((service) => (
                    <li key={service.id}>
                      <Link
                        to={`/services/${categoryKey}/${service.id}`}
                        className={`block px-4 py-2 text-gray-700 hover:text-blue-600 transition ${
                          category === categoryKey && serviceId === service.id
                            ? "font-bold text-blue-600"
                            : ""
                        }`}
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6 space-y-12 my-10 ">
          {/* Heading and Description */}
          <div className="mx-auto px-4 md:px-0">
  <h2 className="relative inline-block text-4xl md:text-5xl font-extrabold text-gray-900 before:content-[''] before:absolute before:w-16 before:h-1 before:bg-blue-500 before:-top-4 before:left-1/2 before:-translate-x-1/2 after:content-[''] after:absolute after:w-10 after:h-1 after:bg-blue-300 after:-bottom-3 after:left-1/2 after:-translate-x-1/2" data-aos="fade-left">
    {service.title}
  </h2>
  <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl ">
    {service.description}
  </p>
</div>

{/* Image and Benefits Section */}
<div className="flex flex-col md:flex-row-reverse items-center gap-12 py-10 px-4 sm:px-6 lg:px-12">
  {/* Image Section */}
  <div className="w-full md:w-1/2" data-aos="fade-right">
    <img
      src={service.serviceImage || ""}
      alt={service.title}
      className="w-full rounded-2xl shadow-2xl object-cover"
    />
  </div>

  {/* Benefits List */}
  <div className="w-full md:w-1/2" data-aos="fade-left">
    <h3 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">
      Key Benefits
    </h3>
    <ul className="space-y-4">
      {service.benefits?.map((benefit, i) => (
        <li
          key={i}
          className="flex items-start gap-4 text-base sm:text-lg text-gray-700"
        >
          <VscActivateBreakpoints className="text-blue-600 mt-1 text-xl" />
          <span className="text-gray-800 leading-relaxed">
            {benefit}
          </span>
        </li>
      ))}
    </ul>
  </div>
</div>

{/* Key Features Section */}
<div className="py-12 px-4 sm:px-6 lg:px-12">
  <h3
    className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-10 relative inline-block"
    data-aos="fade-up"
  >
    <span className="relative z-10">Key Features of {service.title}</span>
    {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg z-0"></span> */}
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {service.features?.map((feature, idx) => (
      <div
        key={idx}
        className="group p-6 bg-white hover:bg-indigo-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer"
        data-aos="fade-up"
        data-aos-delay={idx * 100}
      >
        <div className="flex flex-col h-full">
          <h4 className="text-xl font-semibold text-blue-700 group-hover:text-indigo-700 mb-3">
            {feature.title}
          </h4>
          <p className="text-gray-600 leading-relaxed flex-grow">
            {feature.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

{/* FAQs */}
  {service.faqs?.length > 0 && (  
  <FAQSection faqs={service.faqs} image={service.serviceImageFAQ || ""} />
  )}
    </div>
  </div>
</div>
  );
};

export default ServiceDetails;