import React, { useState } from "react";

const FAQSection = ({ image }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "What types of gates can be automated?", answer: "We offer automation solutions for sliding, swing, and folding gates." },
    { question: "Can I control my gate remotely?", answer: "Yes, our automation systems support mobile app and remote access control." },
    { question: "Is gate automation secure?", answer: "Absolutely! Our systems use encrypted communication and advanced security protocols." },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center gap-12 px-6 md:px-20 py-12 bg-gray-100">
      {/* FAQ Image */}
      <div className="w-full md:w-1/2" data-aos="fade-right">
        <img src={image} alt="FAQ" className="w-full rounded-lg shadow-lg" />
      </div>

      {/* FAQ Content */}
      <div className="w-full md:w-1/2" data-aos="fade-left">
        <h3 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h3>

        <div className="mt-6 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full text-left flex justify-between items-center py-4 text-lg font-semibold text-gray-900 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-blue-600">{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && <p className="text-gray-700 py-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
