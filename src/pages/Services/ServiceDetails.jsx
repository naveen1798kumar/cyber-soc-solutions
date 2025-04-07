import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { servicesData } from "../../data/servicesData";
import ServiceBanner from "../../components/ServiceBanner";
import FAQSection from "../../components/FAQSection";
import { FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
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

  // Reusable Section Component
  const Section = ({ title, content, children, bgColor = "bg-white" }) => (
    <section className={`py-12 px-6 md:px-20 ${bgColor}`} data-aos="fade-up">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center">
        {title}
      </h2>
      {content && (
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mt-4">
          {content}
        </p>
      )}
      {children}
    </section>
  );

  return (
    <div className="flex flex-col">
      {/* Banner */}
      <ServiceBanner
        backgroundImage={service.image || ""}
        title={service.title}
        description={service.description}
      />

      {/* Main Layout */}
      <div className="flex">
       
          <aside className="hidden md:block sticky top-0 h-screen w-64 bg-gray-100 p-4 border-r border-gray-200 overflow-y-auto">
            {Object.entries(servicesData).map(([categoryKey, categoryValue]) => (
              <div key={categoryKey} className="mb-4">
                {/* Category Header */}
                <button
            onClick={() => toggleCategory(categoryKey)}
            className="flex items-center justify-between w-full px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition"
                >
            <span>{categoryValue.title}</span>
            {openCategory === categoryKey ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
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
        <div className="flex-1 p-6 overflow-hidden">
          {/* Service Overview */}
          <Section
            title={service.title}
            content={service.description}
            bgColor="bg-gray-50"
          />

          {/* Detailed Sections */}
          {service.sections?.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              content={section.content}
              bgColor={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            />
          ))}

          {/* Image & Benefits Section */}
          <Section
            title={`Why Choose ${service.title}?`}
            content={
              service.benefits?.length
                ? "Key benefits of our service include:"
                : "We provide top-notch services tailored to your needs."
            }
            bgColor="bg-gray-50"
          >
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2" data-aos="fade-right">
                <img
                  src={service.image || ""}
                  alt={service.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              {service.benefits?.length > 0 && (
                <div className="w-full md:w-1/2" data-aos="fade-left">
                  <ul className="list-none mt-4 space-y-2 text-gray-700">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <FaCheckCircle className="text-blue-600" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Section>

          {/* Additional Features Section */}
          {service.features && (
            <Section title={`Features of ${service.title}`} bgColor="bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    data-aos="fade-up"
                  >
                    <h3 className="text-xl font-bold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 mt-2">{feature.description}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* FAQ Section */}
          <Section
            title="Frequently Asked Questions"
            content={`Have questions about ${service.title}? We’ve got answers.`}
            bgColor="bg-gray-50"
          >
            <FAQSection faqs={service.faqs || []} image={service.image || ""} />
          </Section>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;