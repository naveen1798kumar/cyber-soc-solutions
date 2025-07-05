import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock
} from "react-icons/fa";

const CareerDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`/api/jobs/${id}`)
      .then(res => setJob(res.data))
      .catch(err => console.error("Error loading job:", err));
  }, [id]);

  if (!job) {
    return <div className="p-10 text-center">Loading job details...</div>;
  }

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="mx-auto max-w-3xl bg-white rounded-xl shadow-md p-8 space-y-6">
        <h1 className="text-3xl font-bold text-[#027070]">{job.title}</h1>

        <div className="flex flex-wrap items-center text-gray-600 space-x-4">
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt /> {job.location}
          </div>
          <div className="flex items-center gap-1">
            <FaBriefcase /> {job.type}
          </div>
          <div className="flex items-center gap-1">
            <FaClock /> Posted: {job.posted}
          </div>
        </div>

        <section>
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Qualification</h3>
            <p>{job.minQualification}</p>
          </div>
          <div>
            <h3 className="font-medium">Experience</h3>
            <p>{job.experience}</p>
          </div>
          <div>
            <h3 className="font-medium">Openings</h3>
            <p>{job.openings}</p>
          </div>
          <div>
            <h3 className="font-medium">Shift</h3>
            <p>{job.shift}</p>
          </div>
          <div>
            <h3 className="font-medium">Salary</h3>
            <p>{job.salary}</p>
          </div>
        </section>

        {job.skills && (
          <section>
            <h2 className="text-xl font-semibold mb-2">Required Skills</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {Array.isArray(job.skills)
                ? job.skills.map((s, i) => <li key={i}>{s}</li>)
                : job.skills.split(',').map((s, i) => <li key={i}>{s.trim()}</li>)}
            </ul>
          </section>
        )}

        {job.responsibilities && (
          <section>
            <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
            <p className="text-gray-700 whitespace-pre-line">{job.responsibilities}</p>
          </section>
        )}

        {job.requirements && (
          <section>
            <h2 className="text-xl font-semibold mb-2">Requirements</h2>
            <p className="text-gray-700 whitespace-pre-line">{job.requirements}</p>
          </section>
        )}

        <div className="text-center mt-8">
          <Link
            to="/career"
            className="inline-block bg-[#027070] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#025a5a] transition"
          >
            Apply for this role
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;
