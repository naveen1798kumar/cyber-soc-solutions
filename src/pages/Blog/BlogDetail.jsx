// src/pages/BlogDetail.jsx

import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Fetch all blogs for sidebar/recent posts
    axios.get("http://localhost:5000/api/blogs")
      .then(res => setAllBlogs(res.data))
      .catch(err => console.error("Failed to fetch blogs", err));

    // Fetch the blog by slug
    axios.get(`http://localhost:5000/api/blogs?slug=${slug}`)
      .then(res => {
        if (res.data && res.data.length > 0) setBlog(res.data[0]);
        else setBlog(null);
      })
      .catch(() => setBlog(null));
  }, [slug]);

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-4">404 - Blog Not Found</h2>
        <button
          onClick={() => navigate("/blogs")}
          className="mt-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  const categories = ["All", ...new Set(allBlogs.map((post) => post.category))];

  const filteredBlogs =
    selectedCategory && selectedCategory !== "All"
      ? allBlogs.filter((post) => post.category === selectedCategory && post.slug !== blog.slug)
      : allBlogs.filter((post) => post.slug !== blog.slug).slice(0, 3);

  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-16 py-10 md:py-20 text-gray-800">
      {/* Banner */}
      <section
        className="relative h-[400px] md:h-[500px] mb-20 rounded-2xl overflow-hidden shadow-xl"
        data-aos="fade-up"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end items-start px-6 md:px-16 text-white pb-12">
          <span className="mb-3 px-4 py-1 rounded-full bg-blue-600 text-xs font-semibold tracking-wider uppercase shadow">
            {blog.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold max-w-3xl leading-tight drop-shadow-md">
            {blog.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-200">
            <img src={blog.authorImg} alt={blog.author} className="w-10 h-10 rounded-full object-cover border-2 border-white" />
            <span>By <strong>{blog.author}</strong> &nbsp;|&nbsp; {blog.date}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex flex-col lg:flex-row gap-12">
        <article className="flex-1 bg-white p-8 rounded-xl shadow-lg leading-relaxed" data-aos="fade-right">
          <div className="prose prose-lg max-w-none prose-p:my-4 prose-h2:mt-8 prose-h2:mb-3 prose-img:rounded-md">
            <p className="whitespace-pre-line">{blog.content}</p>
          </div>

          {blog.lists && (
            <div className="prose prose-lg max-w-none mt-10">
              {Object.entries(blog.lists).map(([key, value]) => (
                <div key={key} className="mb-6">
                  <h3 className="text-xl text-blue-700 font-semibold mb-2">{key}</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {value.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <blockquote className="my-10 border-l-4 border-blue-600 bg-blue-50 p-5 text-lg italic text-gray-700 rounded-r-md shadow-inner">
            “A well-structured blog engages the reader and adds value to the industry.”
          </blockquote>
        </article>

        {/* Sidebar */}
        <aside className="w-full lg:w-[30%] space-y-8">
          {/* Recent Posts */}
          <div className="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-left">
            <h3 className="text-xl font-bold mb-4 pb-2 border-b">Recent Posts</h3>
            <ul className="space-y-4 text-sm">
              {filteredBlogs.map((recent) => (
                <li key={recent.slug} className="flex items-start gap-4">
                  <img src={recent.image} alt={recent.title} className="w-16 h-16 object-cover rounded-md shadow-sm" />
                  <div>
                    <Link
                      to={`/blogs/${recent.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      {recent.title}
                    </Link>
                    <p className="text-gray-500 text-xs mt-1">{recent.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Category Filter */}
          <div className="bg-white p-6 rounded-xl shadow-lg" data-aos="fade-left">
            <h3 className="text-xl font-bold mb-4 pb-2 border-b">Categories</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 text-sm rounded-full border font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-blue-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default BlogDetail;
