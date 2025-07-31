import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Banner from "../../components/Banner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banners from "../../assets/banners/contact-banner.jpg";
import OtherBranches from "./OtherBranches";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.name && formData.email && formData.message) {
    try {
      const response = await fetch("https://cybersoc-backend.onrender.com/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Your message has been sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send your message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  } else {
    toast.error("Please fill out all fields before submitting.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};


  return (
    <div className="relative overflow-hidden">
      <Helmet>
        <title>Contact CyberSoc | Cyber Security & Automation Experts in Coimbatore</title>
        <meta
          name="description"
          content="Get in touch with CyberSoc for Networking, LAN, CCTV, Automation, Cyber Security, Web and Software Development, and Digital Marketing services in Coimbatore."
        />
        <meta
          name="keywords"
          content="Contact CyberSoc, Cyber Security, Automation, Networking, LAN, CCTV, Web Development, Software Development, Digital Marketing, Coimbatore"
        />
        <meta name="author" content="CyberSoc" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.cybersoc.com/contact" />

         {/* Structured Data for Contact Page */}
         <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Contact Us - CyberSoc Solutions",
              "url": "https://www.cybersocsolutions.com/contact",
              "description": "Get in touch with CyberSoc Solutions for cybersecurity, automation, and IT services.",
              "mainEntityOfPage": "https://www.cybersocsolutions.com/contact"
            }
          `}
        </script>
      </Helmet>
      
      {/* Toast Container */}
      <ToastContainer />

      {/* Hero Section */}
      <Banner
        backgroundImage={Banners}
        title="Get in Touch with CyberSoc"
        description="We provide cutting-edge cybersecurity and automation solutions to protect businesses from modern threats and enhance operational efficiency."
      />

      {/* Contact Section */}
      <section className="pt-20  bg-white relative">
  <div className="container mx-auto px-6 lg:px-20 ">
    {/* Heading */}
    <h2
      className="relative text-4xl text-center md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4"
      data-aos="fade-left"
      data-aos-duration="300"
    >
      Contact <span className="text-[#027070]">CyberSoc</span>
      <span className="block w-20 h-1 bg-[#027070] mx-auto mt-4 rounded-full"></span>
    </h2>
    <p
      className="text-lg text-center text-gray-600 max-w-2xl mx-auto leading-relaxed"
      data-aos="fade-up"
    >
      Have questions? Our team is ready to help. Fill out the form below or
      reach out directly through the contact information provided.
    </p>

    {/* Contact Grid */}
    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Form */}
      <div
        className="bg-white border border-gray-200 rounded-2xl p-10 shadow-md hover:shadow-xl transition-all duration-300"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <h3 className="text-2xl font-semibold text-gray-900">Send Us a Message</h3>
        <p className="text-sm text-gray-500 mt-2">We’ll respond within 24 hours.</p>

        <form
          onSubmit={(e) => {
            handleSubmit(e);
            setFormData({ name: "", email: "", message: "" });
          }}
          className="mt-6 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>
          <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Required
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            required
          >
            <option value="" disabled  >-- Select a service --</option>
            <option value="Web Development">Web Development</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Automation">Automation</option>
            <option value="Networking & LAN">Networking & LAN</option>
            <option value="CCTV Installation">CCTV Installation</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Others">Others</option>
          </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Type your message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#027070] hover:bg-[#025f60] text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Info Cards (Map + Contact Details) */}
      <div className="space-y-8">
        {/* Map */}
        <div
          className="rounded-2xl h-[50%] overflow-hidden shadow-md hover:shadow-xl transition-all"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.3742054970558!2d76.94508311167102!3d11.159904651955335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f1ddf8e06e29%3A0xcb15945fe50b39c8!2sCybersoc%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1744795856467!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Contact Details */}
        <div
          className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all"
          data-aos="fade-left"
          data-aos-duration="300"
        >
          <h3 className="text-2xl font-semibold text-gray-900">Contact Details</h3>
          <p className="text-sm text-gray-500 mt-2">Reach out anytime via:</p>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3 text-gray-700">
              <FaMapMarkerAlt className="text-[#027070] text-lg mt-1" />
              <span>KVP, Complex, 1st Floor, Vannan Kovil Rd, Coimbatore</span>
            </div>
            <div className="flex items-start gap-3 text-gray-700">
              <FaPhoneAlt className="text-[#027070] text-lg mt-1" />
              <a to="tel:+919384812940" className="hover:text-indigo-600 transition">
                +91 93848 12940
              </a>
            </div>
            <div className="flex items-start gap-3 text-gray-700">
              <FaEnvelope className="text-[#027070] text-lg mt-1" />
              <a
                to="mailto:info@cybersocsolutions.com"
                className="hover:text-indigo-600 transition cursor-pointer"
              >
                info@cybersocsolutions.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  {/* Other Branches Component */}
    <div className="mt-20">
      <OtherBranches />
    </div>
</section>

    </div>
  );
};

export default Contact;
