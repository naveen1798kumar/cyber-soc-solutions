import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Banner from "../../components/Banner";
import aboutBanner from "../../assets/Hero-Slider/Slider-2.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <Banner
        backgroundImage={aboutBanner}
        title="Get in Touch with CyberSoc"
        description="We provide cutting-edge cybersecurity and automation solutions to protect businesses from modern threats and enhance operational efficiency."
      />

      {/* Contact Section */}
      <section className="py-20 relative bg-gray-100">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-extrabold text-center text-gray-900">
            Contact <span className="text-indigo-600">CyberSoc</span>
          </h2>
          <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mt-4">
            Have questions? Our team is here to help. Fill out the form below or
            reach out to us directly.
          </p>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="p-8 bg-white/20 backdrop-blur-xl shadow-xl rounded-xl border border-white/30">
              <h3 className="text-2xl font-semibold text-gray-900">
                Send Us a Message
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Our team will respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    rows="5"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-500 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="p-8 bg-white/20 backdrop-blur-xl shadow-xl rounded-xl border border-white/30">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Contact Details
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Reach us through any of the following ways:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center text-gray-800">
                    <FaMapMarkerAlt className="mr-3 text-indigo-600 text-xl" />
                    <span>CyberSoc Solutions, Coimbatore, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <FaPhoneAlt className="mr-3 text-indigo-600 text-xl" />
                    <span>+91 93848 12940</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <FaEnvelope className="mr-3 text-indigo-600 text-xl" />
                    <span>info@cybersocsolutions.com</span>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="p-8 bg-white/20 backdrop-blur-xl shadow-xl rounded-xl border border-white/30">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Our Location
                </h3>
                <div className="w-full h-64 rounded-lg overflow-hidden mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5700.3809861106265!2d76.94192555034572!3d11.15413863618407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f136ecbea5d3%3A0xf96c83af72eafaa0!2sR.G.Nagar%2C%20Periyanaickenpalayam%2C%20Tamil%20Nadu%20641020!5e1!3m2!1sen!2sin!4v1742904634436!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
