import React from 'react';

const productsData = [
  {
    id: 1,
    title: "Smart Home Automation",
    description: "Control your home appliances remotely with our smart home automation solutions.",
    image: "/assets/products/smart-home.jpg",
    link: "/products/smart-home",
  },
  {
    id: 2,
    title: "Cybersecurity Solutions",
    description: "Protect your business from cyber threats with our advanced cybersecurity tools.",
    image: "/assets/products/cybersecurity.jpg",
    link: "/products/cybersecurity",
  },
  {
    id: 3,
    title: "Networking Equipment",
    description: "High-performance networking equipment for seamless connectivity.",
    image: "/assets/products/networking.jpg",
    link: "/products/networking",
  },
//   {
//     id: 4,
//     title: "Gate Automation Systems",
//     description: "Automate your gates for enhanced security and convenience.",
//     image: "/assets/products/gate-automation.jpg",
//     link: "/products/gate-automation",
//   },
//   {
//     id: 5,
//     title: "Digital Marketing Tools",
//     description: "Boost your online presence with our cutting-edge digital marketing tools.",
//     image: "/assets/products/digital-marketing.jpg",
//     link: "/products/digital-marketing",
//   },
];

function Products() {
  return (
    <div className="bg-gradient-to-r from-[#d9e5fe] via-[#f5f6f8] to-[#d9e5fe] min-h-screen py-12 px-6 md:px-12 lg:px-16">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <a
                href={product.link}
                className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;