import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../../data/blogPosts.js"; // Assuming you have a data file for blog posts
import "aos/dist/aos.css"; // Import AOS CSS if you are using AOS for animations

// const blogPosts = [
//   {
//     id: 1,
//     title: "The Future of Web Development",
//     summary: "Explore the latest trends and technologies shaping the web industry in 2025.",
//     date: "March 25, 2025",
//     slug: "future-of-web-development",
//     image: "https://source.unsplash.com/500x300/?technology,web",
//   },
//   {
//     id: 2,
//     title: "Boost Your SEO in 2025",
//     summary: "Top strategies to rank higher on search engines and improve website traffic.",
//     date: "March 18, 2025",
//     slug: "boost-seo-2025",
//     image: "https://source.unsplash.com/500x300/?seo,marketing",
//   },
//   {
//     id: 3,
//     title: "UI/UX Design Best Practices",
//     summary: "Enhance user experience with these essential design principles and techniques.",
//     date: "March 10, 2025",
//     slug: "ui-ux-best-practices",
//     image: "https://source.unsplash.com/500x300/?design,ux",
//   },
//   // {
//   //   id: 4,
//   //   title: "Mastering JavaScript in 2025",
//   //   summary: "Deep dive into modern JavaScript features and how to apply them effectively.",
//   //   date: "March 5, 2025",
//   //   slug: "mastering-javascript-2025",
//   //   image: "https://source.unsplash.com/500x300/?javascript,coding",
//   // },
// ];

const BlogSection = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="relative text-4xl text-center md:text-5xl font-extrabold text-gray-900 tracking-wide leading-tight 
          after:absolute after:content-[''] after:w-30 after:h-1 after:bg-blue-600 
          after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 mb-6 md:mb-8"
        data-aos="fade-left" >Latest Blog Posts</h2>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="relative bg-white shadow-lg rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            {/* Blog Image with Overlay */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-opacity duration-300"></div>
            </div>

            {/* Blog Content */}
            <div className="p-5 flex flex-col justify-between min-h-[200px]">
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{post.summary}</p>
                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              </div>

              <Link
                to={`/blogs/${post.slug}`}
                className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* More Blogs Button */}
      <div className="text-center mt-12">
        <Link
          to="/blogs"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          View All Blogs
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
