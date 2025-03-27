import { Link } from "react-router-dom";

const ServiceCard = ({ service, category }) => {
  return (
    <Link
    key={service.id}
    to={`/services/${category}/${service.id}`}
  >
<div 
className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px] flex flex-col justify-between group transform transition duration-300 hover:shadow-2xl"
data-aos="fade-up"
>

<div className="relative w-full h-52 overflow-hidden">
<img
src={service.image}
alt={service.title}
className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500"></div>
</div>

<div className="p-6 flex flex-col items-center text-center">
  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
{service.title}
</h3>
<p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
{service.description}
</p>
</div>

<div className="pb-6 text-center">
<button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-500">
Learn More
</button>
</div>
</div>
  </Link>
  );
};

export default ServiceCard;
