import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { VscActivateBreakpoints } from "react-icons/vsc";
import FAQSection from "../../components/FAQSection";
import ServiceBanner from "../../components/ServiceBanner";

const ServiceDetails = () => {
  const { category, serviceId } = useParams();
  const navigate = useNavigate();
  const [openCategory, setOpenCategory] = useState(category);
  const [categories, setCategories] = useState([]);
  const [sidebarServices, setSidebarServices] = useState([]);
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/categories")
      .then((res) => setCategories(Array.isArray(res.data) ? res.data : res.data.categories || []))
      .catch(() => setCategories([]));
  }, []);

  useEffect(() => {
    axios.get("/api/services")
      .then((res) => setSidebarServices(Array.isArray(res.data) ? res.data : res.data.services || []))
      .catch(() => setSidebarServices([]));
  }, []);

  useEffect(() => {
    if (serviceId) {
      setLoading(true);
      axios
        .get(`/api/services/${serviceId}`)
        .then((res) => setService(res.data))
        .catch(() => setService(null))
        .finally(() => setLoading(false));
    }
  }, [serviceId]);

  useEffect(() => {
    if (!loading && (!category || !service)) {
      navigate("/services");
    }
  }, [category, service, loading, navigate]);

  const toggleCategory = (catId) => {
    setOpenCategory(openCategory === catId ? null : catId);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50 mb-6"></div>
        <p className="text-lg text-gray-500">Loading service details...</p>
      </div>
    );
  }

  if (!service) return null;

  return (
    <div className="flex flex-col overflow-hidden scrollbar-hide bg-gradient-to-br from-[#f8fafc] via-[#e0ecf8] to-[#f8fafc] min-h-screen">
<ServiceBanner
  image={service.bannerImage || service.image}
  title={service.title}
  description={service.description}
/>

      <div className="flex w-full">
        {/* Sidebar */}
        <aside
          className="hidden md:block w-80 bg-white/80 backdrop-blur-xl mt-24 border-r border-gray-200 shadow-xl p-6 rounded-tr-3xl rounded-br-3xl"
          style={{ position: "sticky", top: 0, minHeight: "100vh" }}
        >
          {categories.map((cat) => (
            <div key={cat._id} className="mb-6">
              <button
                onClick={() => toggleCategory(cat._id)}
                className="flex items-center justify-between w-full px-4 py-2 bg-gradient-to-r from-blue-50 via-white to-indigo-50 text-gray-800 font-semibold rounded-lg hover:bg-indigo-100 transition"
              >
                <span>{cat.title}</span>
                {openCategory === cat._id ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openCategory === cat._id && (
                <ul className="mt-2 space-y-2 pl-4">
                  {sidebarServices
                    .filter((svc) => (svc.category?._id || svc.category) === cat._id)
                    .map((svc) => (
                      <li key={svc._id}>
                        <Link
                          to={`/services/${cat._id}/${svc._id}`}
                          className={`block px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition ${
                            category === cat._id && serviceId === svc._id
                              ? "font-bold text-blue-600 bg-blue-50"
                              : ""
                          }`}
                        >
                          {svc.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 space-y-16">
          {/* Sections */}
          {service.sections?.length > 0 && (
            <section className="space-y-12">
              {service.sections.map((sec, i) => (
                <div key={i} className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-blue-800">{sec.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{sec.content}</p>
                  </div>
                  {sec.image && (
                    <img
                      src={sec.image}
                      alt={sec.title}
                      className="rounded-xl shadow-lg border border-blue-100 w-full h-auto"
                    />
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Key Benefits + Image */}
          <section className="flex flex-col md:flex-row-reverse gap-10 items-center">
            {service.serviceImage && (
              <img
                src={service.serviceImage}
                alt={service.title}
                className="w-full md:w-1/2 rounded-2xl shadow-xl border-4 border-blue-100 object-cover"
              />
            )}
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold border-l-4 border-blue-600 pl-4 text-gray-800">
                Key Benefits
              </h3>
              <ul className="space-y-4">
                {service.benefits?.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg text-gray-700">
                    <VscActivateBreakpoints className="text-blue-600 mt-1 text-xl" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Features */}
          <section className="px-4 sm:px-6 lg:px-12">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Features of {service.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features?.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition border border-gray-100"
                >
                  <h4 className="text-xl font-semibold text-blue-700 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          {service.faqs?.length > 0 && (
            <FAQSection faqs={service.faqs} image={service.serviceImageFAQ || ""} />
          )}
        </main>
      </div>
    </div>
  );
};

export default ServiceDetails;
