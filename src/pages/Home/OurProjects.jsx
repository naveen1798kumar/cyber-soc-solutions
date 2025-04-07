import React from "react";

function OurProjects() {
  return (
    <div className="container mx-auto px-6 lg:px-20">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center">
        Our Projects
      </h2>
      <p className="mt-4 text-lg text-gray-700 text-center max-w-3xl mx-auto">
        Discover how we’ve helped businesses achieve their goals.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Add project cards here */}
      </div>
    </div>
  );
}

export default OurProjects;