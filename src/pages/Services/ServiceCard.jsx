import { Link } from "react-router-dom";

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const ServiceCard = ({ service, category }) => {
  return (
    <Link
      key={service.id}
      to={`/services/${category}/${service.id}`}
      className="block group"
      onClick={handleClick}
      data-aos="fade-up"
    >
      <div
        className="relative bg-white rounded-lg shadow-md overflow-hidden h-[400px] flex flex-col justify-between transform transition duration-300 hover:shadow-lg"
        data-aos="fade-up"
      >
        {/* Image Section */}
        <div className="relative w-full h-64 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col gap-2 transition-opacity duration-300 group-hover:opacity-0">
          <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Hover Overlay */}
        <div className="absolute bottom-[-100%] w-full bg-gradient-to-t from-gray-900 via-gray-800/70 to-transparent p-6 text-white opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-500">
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-sm leading-relaxed">{service.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;