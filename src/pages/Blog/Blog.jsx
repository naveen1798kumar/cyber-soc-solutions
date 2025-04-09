import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner';
// import SectionHeading from '../../components/SectionHeading';
import { Link } from 'react-router-dom';
import blogBanner from "../../assets/banners/blog-banner.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import blogPosts from "../../data/blogPosts";

function Blog() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleClick = (slug) => {
    navigate(`/blogs/${slug}`);
  };

  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];
  const filteredBlogs =
    selectedCategory !== "All"
      ? blogPosts.filter((post) => post.category === selectedCategory)
      : blogPosts;

  return (
    <div>
       <Helmet>
        <title>CyberSoc Blogs | Latest Insights on Cyber Security & Automation</title>
        <meta
          name="description"
          content="Explore the latest blogs from CyberSoc on Cyber Security, Automation, Networking, Web Development, and Digital Marketing. Stay updated with industry trends and insights."
        />
        <meta
          name="keywords"
          content="Cyber Security Blogs, Automation Blogs, Networking Blogs, Web Development Blogs, Digital Marketing Blogs, CyberSoc Blogs"
        />
        <meta name="author" content="CyberSoc" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.cybersoc.com/blogs" />
      </Helmet>
      
      <Banner
        backgroundImage={blogBanner}
        title="Our Latest Blogs"
        description="Stay updated with the latest insights on cybersecurity and automation."
      />
      
      <div className="container mx-auto p-6 my-6">
      <h2 className="relative text-5xl font-extrabold text-gray-900 text-center leading-tight tracking-wide before:absolute before:content-[''] before:w-20 before:h-1 before:bg-blue-500 before:bottom-0 before:left-1/2 before:-translate-x-1/2 after:absolute after:content-[''] after:w-10 after:h-1 after:bg-blue-300 after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2"  data-aos='fade-up' >
      Our Blogs
      </h2>
        
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 gap-y-16 py-2 my-8">
      {filteredBlogs.map((post) => (
        <div
          key={post.id}
          className="group relative overflow-hidden min-h-[24rem]  mx-4 hover:-translate-y-1  shadow-lg hover:shadow-xl hover:drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] transition-all duration-300"
          data-aos="fade-up"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
            <h3 className="mb-2 text-xl font-medium text-white">{post.title}</h3>
            <p className="mb-12 p-4 text-white text-center">{post.summary}</p>
            <Link
              to={`/blogs/${post.slug}`}
              className="hidden group-hover:inline-block translate-x-full group-hover:translate-x-0 py-2 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Read More →
            </Link>
          </div>  
        </div>
      ))}
    </div>
      </div>
    </div>
  );
}

export default Blog;
