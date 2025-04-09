import { Link, useParams } from "react-router-dom";
import { servicesData } from "../../data/servicesData";

const CategoryServices = () => {
  const { category } = useParams();
  const categoryData = servicesData[category];

  if (!categoryData)
    return <h2 className="text-center mt-10 text-2xl font-semibold text-gray-700">Category Not Found</h2>;

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Category Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">{categoryData.title}</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">{categoryData.description}</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryData.services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            {/* Service Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />

            {/* Service Details */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2 line-clamp-3">{service.description}</p>
              <Link
                to={`/services/${category}/${service.id}`}
                className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Service Information */}
      {categoryData.services.map((service) => (
        <div key={service.id} className="mt-12">
          <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
          <p className="text-gray-600 mt-4">{service.description}</p>

          {/* Sections */}
          {service.sections && (
            <div className="mt-6">
              <h4 className="text-2xl font-semibold text-gray-800">Details</h4>
              <div className="mt-4 space-y-4">
                {service.sections.map((section, index) => (
                  <div key={index}>
                    <h5 className="text-xl font-medium text-gray-700">{section.title}</h5>
                    <p className="text-gray-600 mt-2">{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          {service.benefits && (
            <div className="mt-6">
              <h4 className="text-2xl font-semibold text-gray-800">Benefits</h4>
              <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Features */}
          {service.features && (
            <div className="mt-6">
              <h4 className="text-2xl font-semibold text-gray-800">Features</h4>
              <ul className="mt-4 space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <div>
                      <h5 className="text-lg font-medium text-gray-700">{feature.title}</h5>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FAQs */}
          {service.faqs && (
            <div className="mt-6">
              <h4 className="text-2xl font-semibold text-gray-800">FAQs</h4>
              <div className="mt-4 space-y-4">
                {service.faqs.map((faq, index) => (
                  <div key={index}>
                    <h5 className="text-lg font-medium text-gray-700">{faq.question}</h5>
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryServices;