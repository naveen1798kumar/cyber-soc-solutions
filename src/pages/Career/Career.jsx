import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaMapMarkerAlt, FaBriefcase, FaClock, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Banner from "../../components/Banner";
import Banners from "../../assets/banners/contact-banner.jpg";
import axios from "axios";
import { Link } from "react-router-dom";


const Career = () => {
  const [jobPostings, setJobPostings] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
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


  const uploadResume = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("fileName", file.name);
formData.append("folder", "/resumes");

  const res = await fetch("https://cybersoc-backend.onrender.com/api/blogs/published", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  return data.url;
};


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Step 1: (optional) simulate uploading file
    // const fakeResumeUrl = `https://dummy-resume-storage.com/${formData.resume.name}`;
    const uploadedUrl = await uploadResume(formData.resume);    

    // Step 2: Submit to backend
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      experience: formData.experience,
      message: formData.message,
      resumeUrl: uploadedUrl,
      position: selectedJob.title,
      jobId: selectedJob._id,
    };

    console.log("📦 Payload to be sent:", payload);


    const res = await axios.post("/api/career/apply", payload);

    if (formData.resume.size > 20 * 1024 * 1024) {
    alert("Resume file size exceeds 20MB limit.");
    return;
  }

    if (res.data.success) {
      alert("Application submitted!");
      handleCloseModal();
    } else {
      alert("Failed to submit application.");
    }
  } catch (error) {
    console.error("❌ Error submitting application:", error);
    alert("Something went wrong. Please try again.");
  }
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
  <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
    Current Openings
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {jobPostings.map((job, index) => (
      <motion.div
        key={job._id}
        className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col justify-between transition hover:shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, duration: 0.5 }}
      >
        <div>
          <h3 className="text-2xl font-semibold text-[#027070] mb-2">
            {job.title}
          </h3>

          <div className="flex items-center text-sm text-gray-500 gap-3 flex-wrap mb-4">
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt /> {job.location}
            </span>
            <span className="flex items-center gap-1">
              <FaBriefcase /> {job.type}
            </span>
            <span className="flex items-center gap-1">
              <FaClock /> {job.posted}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {job.description}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-2">
          <Link
            to={`/career/${job._id}`}
            className="text-[#027070] hover:underline text-sm font-medium"
          >
            Read more about this role →
          </Link>

          <button
            onClick={() => handleOpenModal(job)}
            className="w-full mt-2 py-2 px-4 bg-[#027070] text-white rounded-lg font-semibold hover:bg-[#025a5a] transition"
          >
            Apply Now
          </button>
        </div>
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
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#027070]"
        />
        <input
          type="text"
          name="experience"
          placeholder="Your Experience (e.g. 2 years)"
          value={formData.experience}
          onChange={handleChange}
          required
          className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#027070]"
        />
        <input
          type="text"
          name="position"
          value={selectedJob.title}
          readOnly
          disabled
          className="w-full border bg-gray-100 px-4 py-3 rounded-lg text-gray-600"
        />
              <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
             onChange={(e) => {
              const file = e.target.files[0];
              if (file && file.size > 20 * 1024 * 1024) {
                alert("Resume file size should be under 20MB.");
                return;
              }
              setFormData({ ...formData, resume: file });
            }}
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