import React from "react";
import { Helmet } from "react-helmet";

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
  {
    id: 4,
    title: "Gate Automation Systems",
    description: "Automate your gates for enhanced security and convenience.",
    image: "/assets/products/gate-automation.jpg",
    link: "/products/gate-automation",
  },
  {
    id: 5,
    title: "Digital Marketing Tools",
    description: "Boost your online presence with our cutting-edge digital marketing tools.",
    image: "/assets/products/digital-marketing.jpg",
    link: "/products/digital-marketing",
  },
];

function Products() {
  return (
    <div className="bg-gradient-to-r from-[#d9e5fe] via-[#f5f6f8] to-[#d9e5fe] min-h-screen py-12 px-6 md:px-12 lg:px-16">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Our Products | Cyber Security, Automation & Networking Solutions</title>
        <meta
          name="description"
          content="Explore CyberSoc's wide range of products, including Smart Home Automation, Cybersecurity Solutions, Networking Equipment, Gate Automation Systems, and Digital Marketing Tools."
        />
        <meta
          name="keywords"
          content="Smart Home Automation, Cybersecurity Solutions, Networking Equipment, Gate Automation Systems, Digital Marketing Tools, CyberSoc Products"
        />
        <meta name="author" content="CyberSoc" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.cybersoc.com/products" />
      </Helmet>

      {/* Page Heading */}
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
        Our Products
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Discover our innovative range of products designed to enhance security, connectivity, and efficiency for your home and business.
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />

            {/* Product Details */}
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

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Need Help Choosing the Right Product?
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          Contact our team for expert advice and personalized recommendations.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default Products;