import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactBg from "../../assets/contact-bg.jpg"

// BranchCard Component
const BranchCard = ({ branch, delay }) => (
    <div
    className="p-6 bg-gradient-to-br from-blue-50 to-white border border-gray-300 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    data-aos="fade-up"
    data-aos-delay={delay}
    data-aos-duration="700"
  >
    <div className="flex items-center justify-between mb-4">
      <h4 className="text-2xl font-semibold text-gray-800">{branch.country}</h4>
      {branch.office && (
        <span className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full uppercase tracking-wide font-medium">
          {branch.office}
        </span>
      )}
    </div>
  
    <p className="text-sm text-gray-600 mb-3 flex items-start">
      <FaMapMarkerAlt className="mr-2 mt-1 text-indigo-500 " />
      {branch.address}
    </p>
    
    <div className="space-y-4">
      <p className="text-sm text-gray-600 flex items-center">
        <FaPhoneAlt className="mr-2 text-indigo-500" />
        <a to={`tel:${branch.phone}`} className="hover:text-indigo-600 transition-colors">
          {branch.phone}
        </a>
      </p>
      <p className="text-sm text-gray-600 flex items-center">
        <FaEnvelope className="mr-2 text-indigo-500" />
        <a to={`mailto:${branch.email}`} className="hover:text-indigo-600 transition-colors">
          {branch.email}
        </a>
      </p>
    </div>
  </div>
  
);

// Main Component: OtherBranches
const OtherBranches = () => {
  const branchesData = {
    Asian: [
      {
        country: "India",
        address: "KVP, Complex, 1st Floor, Vannan Kovil Rd, Jothipuram, Coimbatore, Tamil Nadu 641047",
        phone: "+91 93848 12940",
        email: "info@cybersocsolutions.com",
        delay: 0,
      },
      {
        country: "India",
        address: "22-Salzer Residency, Pn Palayam, Coimbatore, Tamil Nadu 641020",
        phone: "+91 93848 12940",
        email: "info@cybersocsolutions.com",
        delay: 100,
      },
    ],
    Europe: [
      {
        country: "Sweden",
        address: "Kristian IV:s väg 3, 18 Halmstad, Sweden",
        phone: "+48 531934894",
        email: "info@cybersocsolutions.com",
        delay: 0,
      },
      {
        country: "Poland",
        address: "16-D, DROHOBYCKA, WROCLAW-64-620, POLAND",
        office: "Head Office",
        phone: "+48 531934894",
        email: "info@cybersocsolutions.com",
        delay: 100,
      },
      {
        country: "Hungary",
        address: "1111 Budapest Lágymányosi utca 12th Street, Hungary",
        phone: "+48 531934894",
        email: "info@cybersocsolutions.com",
        delay: 200,
      },
    ],
    Australia: [
      {
        country: "Australia",
        address: "Cnr Lonsdale Street and Swanston St, Melbourne VIC 3000, Australia",
        phone: "+61 494172712",
        email: "info@cybersocsolutions.com",
        delay: 300,
      },
    ],
  };

  return (
    <div className='relative bg-black/20 py-8 mt-4' style={{ backgroundImage: `url(${contactBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='absolute inset-0 backdrop-blur-lg bg-gray-800/10'></div>
    <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-16 ">
      <h3 className="relative text-4xl text-center md:text-5xl font-extrabold text-gray-900 tracking-wide leading-tight 
          after:absolute after:content-[''] after:w-30 after:h-1 after:bg-indigo-600 
          after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 mb-6 md:mb-8"
        data-aos="fade-left">
        Our Office Locations
      </h3>

      {Object.entries(branchesData).map(([region, branches], index) => (
        <div key={region} className='mt-12'>
            {/* Region Heading */}
          <h4 className="text-3xl font-heading font-bold text-gray-900 mb-4" data-aos="fade-left" data-aos-delay={index * 100}><span className="text-indigo-600">{region}</span></h4>
          {/* <h4 className="text-3x font-heading font-bold text-green-900 mb-4">{region}</h4> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {branches.map((branch, index) => (
              <BranchCard key={index} branch={branch} delay={branch.delay} />
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default OtherBranches;
