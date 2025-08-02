import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import servicesData from "../../data/servicesData";

const CategoryServices = () => {
  const { category } = useParams();
  const categoryData = servicesData[category];

  if (!categoryData) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-700">Category Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{categoryData.title} Services | CyberSoc Solutions</title>
        <meta name="description" content={categoryData.description} />
        <meta name="keywords" content={`${categoryData.title}, CyberSoc, Services`} />
        <link rel="canonical" href={`https://www.cybersocsolutions.com/services/${category}`} />
      </Helmet>

      {/* Header */}
      <div className="text-center py-16 px-4 bg-gradient-to-r from-blue-100 to-indigo-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">{categoryData.title}</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">{categoryData.description}</p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {categoryData.services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-700">{service.title}</h3>
                <p className="text-gray-600 mt-2 line-clamp-3">{service.description}</p>
                <Link
                  to={`/services/${category}/${service.id}`}
                  className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryServices;
