// src/pages/BlogDetail.jsx

import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import blogPosts from "../../data/blogPosts";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const blog = blogPosts.find((post) => post.slug === slug);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

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
      ? blogPosts.filter((post) => post.category === selectedCategory && post.slug !== blog.slug)
      : blogPosts.filter((post) => post.slug !== blog.slug).slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-10 md:px-8">
      {/* Hero Section */}
      <section
  className="relative h-[400px] md:h-[500px] mb-16 rounded-xl overflow-hidden shadow-2xl"
  data-aos="fade-up"
>
  {/* Background Image */}
  <img
    src={blog.image}
    alt={blog.title}
    className="absolute inset-0 w-full h-full object-cover scale-105"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-0" />

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-16 text-white">
    {/* Optional: Blog Category Tag */}
    <span className="mb-4 px-4 py-1 rounded-full bg-blue-600 text-xs uppercase tracking-widest font-medium shadow-lg">
      {blog.category}
    </span>

    {/* Blog Title */}
    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-lg max-w-4xl">
      {blog.title}
    </h1>

    {/* Author + Date */}
    <p className="mt-4 text-sm text-gray-200">
      By <span className="font-semibold">{blog.author}</span> &nbsp;|&nbsp; {blog.date}
    </p>
  </div>
</section>


      {/* Blog Main Layout */}
      <section className="flex flex-col md:flex-row gap-10">
        {/* Main Content */}
        <article className="flex-1 bg-white p-6 rounded-xl shadow-md" data-aos="fade-right">
          <div className="prose max-w-none lg:prose-lg prose-p:text-gray-800 prose-h2:text-blue-700 prose-h2:mt-6 prose-h2:mb-2 prose-img:rounded-md">
            <p className="whitespace-pre-line text-lg leading-8">{blog.content}</p>
          </div>

        
                <blockquote className="my-8 border-l-4 border-blue-600 bg-blue-50 p-4 italic text-gray-700">
                “A well-structured blog engages the reader and adds value to the industry.”
                </blockquote>

                <div className="prose max-w-none lg:prose-lg prose-p:text-gray-800 prose-h2:text-blue-700 prose-h2:mt-6 prose-h2:mb-2 prose-img:rounded-md">
                {blog.lists && Object.entries(blog.lists).map(([key, value]) => (
                  <div key={key} className="mb-4">
                  <h3 className="text-lg font-semibold text-blue-700">{key}</h3>
                  <ul className="list-disc list-inside text-gray-800">
                    {value.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                  </ul>
                  </div>
                ))}
                </div>
              </article>

              {/* Sidebar Section */}
        <aside className="w-full md:w-1/3 space-y-8">
          {/* Recent Posts */}
          <div className="bg-white p-5 rounded-lg shadow-md" data-aos="fade-left">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Recent Posts</h3>
            <ul className="space-y-3">
              {filteredBlogs.map((recent) => (
                <li key={recent.id}>
                  <Link
                    to={`/blogs/${recent.slug}`}
                    className="text-blue-600 hover:text-blue-800 transition-all"
                  >
                    {recent.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Category Filter */}
          <div className="bg-white p-5 rounded-lg shadow-md" data-aos="fade-left">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Search by Category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 text-sm rounded-full border transition-all ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-blue-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Filtered Blogs */}
            {selectedCategory && selectedCategory !== "All" && (
              <div className="mt-6">
                <h4 className="text-lg font-medium mb-2">
                  Blogs in <span className="text-blue-600">{selectedCategory}</span>
                </h4>
                {filteredBlogs.length > 0 ? (
                  <ul className="space-y-2">
                    {filteredBlogs.map((post) => (
                      <li key={post.id}>
                        <Link
                          to={`/blogs/${post.slug}`}
                          className="text-blue-600 hover:text-blue-800 transition"
                        >
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500">No blogs found in this category.</p>
                )}
              </div>
            )}
          </div>
        </aside>
      </section>
    </div>
  );
};

export default BlogDetail;
