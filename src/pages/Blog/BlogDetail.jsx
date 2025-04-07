// src/pages/BlogDetail.jsx

import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import blogPosts from "../../data/blogPosts";
import AOS from "aos";
import "aos/dist/aos.css";

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const blog = blogPosts.find((post) => post.slug === slug);

  if (!blog) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold text-red-600">404 - Blog Not Found</h2>
        <button
          onClick={() => navigate("/blogs")}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];

  const filteredBlogs =
    selectedCategory && selectedCategory !== "All"
      ? blogPosts.filter((post) => post.category === selectedCategory)
      : blogPosts
          .filter((post) => post.slug !== blog.slug)
          .slice(0, 3); // Show 3 recent (excluding current blog)

  return (
    <div className="container mx-auto p-6 overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] md:h-[500px] mb-8 rounded-lg overflow-hidden shadow-lg"
        data-aos="fade-up"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">{blog.title}</h1>
          <p className="text-sm mt-2 opacity-80">
            By <span className="font-semibold">{blog.author}</span> | {blog.date}
          </p>
        </div>
      </div>

      {/* Blog Content & Sidebar */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Blog Article */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md" data-aos="fade-right">
          <p className="text-lg leading-8 text-gray-800 whitespace-pre-line">
            {blog.content}
          </p>
          <div className="mt-6 p-4 border-l-4 border-blue-500 bg-gray-100">
            <p className="text-gray-700 italic">
              “A well-structured blog engages the reader and adds value to the industry.”
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full md:w-1/3 space-y-6">
          {/* Recent Posts */}
          <div className="p-4 bg-white shadow-md rounded-lg" data-aos="fade-left">
            <h3 className="text-xl font-bold mb-3 border-b pb-2">Recent Posts</h3>
            <ul className="space-y-2">
              {filteredBlogs.map((recent) => (
                <li key={recent.id}>
                  <Link
                    to={`/blogs/${recent.slug}`}
                    onClick={handleClick}
                    className="text-blue-600 hover:text-blue-800 transition"
                  >
                    {recent.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Search by Category */}
          <div className="p-4 bg-white shadow-md rounded-lg" data-aos="fade-left">
            <h3 className="text-xl font-bold mb-3 border-b pb-2">Search by Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 text-sm rounded-lg border ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-blue-100"
                  } transition-all`}
                >
                  {category}
                </button>
              ))}
            </div>

            {selectedCategory && selectedCategory !== "All" && (
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  Blogs related to: {selectedCategory}
                </h4>
                <ul className="space-y-2">
                  {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((post) => (
                      <li key={post.id}>
                        <Link
                          to={`/blogs/${post.slug}`}
                          onClick={handleClick}
                          className="text-blue-600 hover:text-blue-800 transition"
                        >
                          {post.title}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No blogs found.</p>
                  )}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetail;
