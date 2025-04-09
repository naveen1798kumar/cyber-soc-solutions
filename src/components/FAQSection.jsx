import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQSection = ({ faqs, image }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col md:flex-row items-center gap-12 px-6 md:px-20 py-16 bg-gradient-to-br from-gray-100 to-white">
      {/* FAQ Image */}
      <div className="w-full md:w-1/2" data-aos="fade-right">
        <img
          src={image}
          alt="FAQ illustration"
          className="w-full h-auto rounded-3xl shadow-2xl object-cover"
        />
      </div>

      {/* FAQ Content */}
      <div className="w-full md:w-1/2" data-aos="fade-left">
        <h3 className="text-4xl font-extrabold text-gray-800 relative mb-8">
          Frequently Asked Questions
          <span className="block w-20 h-1 mt-2 bg-blue-600 rounded-full"></span>
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border shadow-sm transition-all duration-300 ${
                openIndex === index
                  ? "bg-white border-blue-500"
                  : "bg-gray-50 hover:bg-white hover:shadow-md"
              }`}
            >
              <button
                className="w-full text-left flex justify-between items-center px-6 py-4 text-lg font-medium text-gray-900 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-blue-600 transition-transform duration-300">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              <div
                className={`px-6 pt-0 pb-4 text-gray-700 transition-all duration-300 ease-in-out ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
