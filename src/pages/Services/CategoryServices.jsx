import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import axios from "axios";

const CategoryServices = () => {
  const { category } = useParams(); // category slug
  const [categoryData, setCategoryData] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryAndServices = async () => {
      try {
        setLoading(true);
        setError(null);

        // 1. Fetch category by slug
        const { data: cat } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/categories/${category}`
        );
        setCategoryData(cat);

        // 2. Fetch services for that category directly
        const { data: servicesData } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/services?category=${cat._id}`
        );
        setServices(servicesData);
      } catch (err) {
        console.error("Error fetching category/services:", err);
        setError("❌ Category or services could not be loaded.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryAndServices();
  }, [category]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-700">Loading...</h2>
      </div>
    );
  }

  if (error || !categoryData) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-red-600">
          {error || "❌ Category not found"}
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{categoryData.title} Services | CyberSoc Solutions</title>
        <meta name="description" content={categoryData.description} />
        <meta
          name="keywords"
          content={`${categoryData.title}, CyberSoc, Services`}
        />
        <link
          rel="canonical"
          href={`https://www.cybersocsolutions.com/services/${category}`}
        />
      </Helmet>

      {/* Category Header */}
      <div className="text-center py-16 px-4 bg-gradient-to-r from-blue-100 to-indigo-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          {categoryData.title}
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          {categoryData.description}
        </p>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-4 py-12">
        {services.length > 0 ? (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service._id}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <img
                  src={service.bannerImage || service.image || "/placeholder.png"}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-700">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-2 line-clamp-3">
                    {service.description?.slice(0, 100)}...
                  </p>
                  <Link
                    to={`/services/${category}/${service.slug || service._id}`}
                    className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-xl text-gray-500">
            No services available for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryServices;
