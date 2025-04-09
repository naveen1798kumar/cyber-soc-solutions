import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Banner from "../../components/Banner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banners from "../../assets/banners/contact-banner.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      try {
        // Send form data to Toastify API
        const response = await fetch("https://api.toastify.io/v1/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer YOUR_API_KEY", // Replace with your Toastify API Key
          },
          body: JSON.stringify({
            to: "info@cybersocsolutions.com", // Replace with your email
            subject: `New Contact Form Submission from ${formData.name}`,
            message: `
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Message:</strong> ${formData.message}</p>
            `,
          }),
        });

        if (response.ok) {
          // Show success toast
          toast.success("Your message has been sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          // Reset form fields
          setFormData({ name: "", email: "", message: "" });
        } else {
          throw new Error("Failed to send message");
        }
      } catch (error) {
        // Show error toast
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
      // Show error toast for empty fields
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
      <section className="py-20 relative bg-white ">
        <div className="container mx-auto px-6 lg:px-20">
          <h2
            className="relative text-5xl font-extrabold text-gray-900 text-center leading-tight tracking-wide before:absolute before:content-[''] before:w-20 before:h-1 before:bg-blue-500 before:bottom-0 before:left-1/2 before:-translate-x-1/2 after:absolute after:content-[''] after:w-10 after:h-1 after:bg-blue-300 after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            Contact <span className="text-indigo-600">CyberSoc</span>
          </h2>
          <p
            className="mt-4 text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
          >
            Have questions? Our team is here to help. Fill out the form below or
            reach out to us directly.
          </p>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div
              className="p-8 bg-gray-100 backdrop-blur-sm shadow-lg hover:shadow-black/50 rounded-xl border border-white/30 transition-hover duration-300 ease-in-out"
              data-aos="fade-right"
              data-aos-duration="300"
              data-aos-delay="100"
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                Send Us a Message
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Our team will respond within 24 hours.
              </p>

              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                  setFormData({ name: "", email: "", message: "" });
                }}
                className="mt-6 space-y-6"
              >
                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
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
                    className="w-full p-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
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
                    className="w-full p-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
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
              <div
                className="p-8 bg-gray-100 backdrop-blur-sm shadow-lg hover:shadow-black/50 rounded-xl border border-white/30 transition-hover duration-300 ease-in-out"
                data-aos="fade-left"
                data-aos-duration="300"
              >
                <h3 className="text-2xl font-semibold text-gray-900">
                  Contact Details
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Reach us through any of the following ways:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center text-gray-800">
                    <FaMapMarkerAlt className="mr-3 text-indigo-600 text-xl" />
                    <span>
                      CyberSoc Solutions, Coimbatore, Tamil Nadu, India
                    </span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <FaPhoneAlt className="mr-3 text-indigo-600 text-xl" />
                    <a href="tel:+919384812940" className="hover:text-bold">
                      +91 93848 12940
                    </a>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <FaEnvelope className="mr-3 text-indigo-600 text-xl" />
                    <a
                      href="mailto:info@cybersocsolutions.com"
                      className="hover:underline"
                    >
                      info@cybersocsolutions.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div
                className="p-8 bg-gray-100 backdrop-blur-sm shadow-lg hover:shadow-black/50 rounded-xl border border-white/30 transition-hover duration-300 ease-in-out"
                data-aos="fade-left"
                data-aos-duration="500"
              >
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
