import { Link, useParams } from "react-router-dom";
import { servicesData } from "../../data/servicesData";

const CategoryServices = () => {
  const { category } = useParams();
  const categoryData = servicesData[category];

  if (!categoryData) return <h2 className="text-center mt-10">Category Not Found</h2>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">{categoryData.title}</h2>
      <p className="text-gray-600">{categoryData.description}</p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {categoryData.services.map((service) => (
          <Link key={service.id} to={`/services/${category}/${service.id}`} className="p-6 bg-white shadow-md rounded-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold">{service.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryServices;
