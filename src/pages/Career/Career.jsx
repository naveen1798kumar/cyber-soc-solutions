import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaMapMarkerAlt, FaBriefcase, FaClock, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Banner from "../../components/Banner";
import Banners from "../../assets/banners/contact-banner.jpg";
import axios from "axios";

const Career = () => {
  const [jobPostings, setJobPostings] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    message: "",
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("/api/jobs");
        setJobPostings(res.data);
      } catch (error) {
        console.error("Failed to fetch job listings", error);
      }
    };
    fetchJobs();
  }, []);

  const handleOpenModal = (job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setFormData({ name: "", email: "", resume: "", message: "" });
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application Submitted:", { ...formData, job: selectedJob.title });
    alert("Application submitted!");
    handleCloseModal();
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Careers at CyberSoc | Join Our Team</title>
      </Helmet>

      <Banner
        backgroundImage={Banners}
        title="Get in Touch with CyberSoc"
        description="We provide cutting-edge cybersecurity and automation solutions to protect businesses from modern threats and enhance operational efficiency."
      />

      {/* Hero */}
      <section className="text-center py-12 px-4 bg-white shadow-sm">
        <h1 className="text-4xl font-bold text-[#027070] mb-3">Join Our Team at CyberSoc</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We’re on the lookout for passionate, driven, and skilled individuals ready to shape the future of cybersecurity, automation, and digital transformation.
        </p>
      </section>

      {/* Job Listings */}
      <section className="container mx-auto py-16 px-4 lg:px-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">Current Openings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobPostings.map((job, index) => (
            <motion.div
              key={job._id}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-[#027070] mb-2">{job.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{job.description}</p>
              <div className="flex items-center text-sm text-gray-500 gap-3 mb-4">
                <span className="flex items-center gap-1"><FaMapMarkerAlt /> {job.location}</span>
                <span className="flex items-center gap-1"><FaBriefcase /> {job.type}</span>
                <span className="flex items-center gap-1"><FaClock /> {job.posted}</span>
              </div>
              <button
                onClick={() => handleOpenModal(job)}
                className="w-full mt-auto py-2 px-4 bg-[#027070] text-white rounded-lg font-semibold hover:bg-[#026060] transition"
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <FaTimes size={20} />
            </button>

            <h3 className="text-2xl font-bold text-[#027070] mb-4">Apply for {selectedJob.title}</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#027070]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#027070]"
              />
              <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
              required
              className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#027070]"
            />

              <textarea
                name="message"
                rows="4"
                placeholder="Why should we hire you?"
                value={formData.message}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#027070]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#027070] text-white py-3 rounded-lg font-semibold hover:bg-[#025a5a] transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;