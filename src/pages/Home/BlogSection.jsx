import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../../data/blogPosts.js";
import { CiLocationArrow1 } from "react-icons/ci";
import "aos/dist/aos.css";

const BlogSection = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      {/* Heading */}
      <h2
        className="relative text-center text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-12"
        data-aos="fade-left"
      >
        Latest Blog Posts
        <span className="block mt-2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></span>
      </h2>

      {/* Blog Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="relative bg-white rounded-2xl overflow-hidden shadow-xl group transition-all transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Image Section */}
            <div className="relative h-60 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 group-hover:-translate-x-full transition duration-300 "></div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col justify-between min-h-[240px]">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-[#008080] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed line-clamp-3">{post.summary}</p>
              </div>

              <div className="mt-6">
              <span className=" bg-[#E1ECFD] text-[#027070] text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                {post.category || "General"}
              </span>
              <div className="mt-2 flex justify-between items-center text-sm text-gray-500">
                <p className="px-3">{post.date}</p>
                <Link
                  to={`/blogs/${post.slug}`}
                  className="text-gray-600 text-lg flex justify-center items-center gap-1 font-bold hover:text-[#008080] transition-colors duration-300"
                >
                  Read More <span><CiLocationArrow1/></span>
                </Link>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-16">
        <Link
          to="/blogs"
          className="relative inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-gray-600 to-gray-600 rounded-full overflow-hidden group shadow-lg transition-transform duration-300 hover:-translate-y-1"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#027070] to-[#008080] scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></span>
          <span className="relative z-10 flex items-center gap-2">
            View All Blogs
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
