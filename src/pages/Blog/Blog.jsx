import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import blogBanner from "../../assets/banners/blog-banner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import blogPosts from "../../data/blogPosts";
import axios from "axios"; // <-- Add this
import { useAppContext } from '../../context/AppContext';

function Blog() {
  const navigate = useNavigate();
  const { axios : api } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogPosts, setBlogPosts] = useState([]);

  const categories = ['Automation', 'Networking', 'Business', 'Information', 'Education']
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
    // Fetch blogs from your backend API
    axios.get("/blogs/all")
      .then(res => {
        if (res.data.success) {
          setBlogPosts(res.data.blogs);
        } else {
          console.error("Blog load failed:", res.data.message);
        }
      })
      .catch(err => console.error("Failed to fetch blogs", err));
  }, []);

  const handleClick = (slug) => {
    navigate(`/blogs/${slug}`);
  };


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

        {/* Structured Data for Blog Page */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Blog - CyberSoc Solutions",
              "url": "https://www.cybersocsolutions.com/blog",
              "description": "Stay updated with the latest news, tips, and trends in cybersecurity, automation, and IT.",
              "mainEntityOfPage": "https://www.cybersocsolutions.com/blog"
            }
          `}
        </script>
      </Helmet>
      
      <Banner
        backgroundImage={blogBanner}
        title="Our Latest Blogs"
        description="Stay updated with the latest insights on cybersecurity and automation."
      />
      
      <div className="container mx-auto p-6 py-12 my-6">
        <h2 className="relative text-4xl text-center md:text-5xl font-extrabold text-gray-900 tracking-wide leading-tight 
          after:absolute after:content-[''] after:w-30 after:h-1 after:bg-blue-600 
          after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 mb-6 md:mb-8"
        data-aos="fade-left">
          Our Blogs
        </h2>

      {/* Category Filters */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 border-gray-300 hover:bg-blue-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 py-6 my-12 ">
  {filteredBlogs.map((post) => (
    <div
      key={post._id || post.slug}
      className="group min-w-[400px] bg-gray-100 shadow-md rounded-xl overflow-hidden flex flex-col md:flex-row min-h-[450px] transition-all duration-300"
    >
      {/* Image */}
      <div
        className="w-full md:w-1/2 min-h-[250px] bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${post.image})` }}
      ></div>

      {/* Content */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-between relative">
        <div>
          <p className="text-[10px] text-gray-800 font-bold bg-red-400 w-max p-2 rounded-full uppercase tracking-wide mb-2">
            {post.category || "Featured"}
          </p>
          <h3 className="text-3xl font-playfair text-gray-800 text-center md:text-left">
            {post.title}
          </h3>
          <div className="h-[2px] w-10 bg-gray-400 mx-auto md:mx-0 my-4" />
          <p className="text-gray-600 text-sm text-justify font-light">
            {post.summary}
          </p>
        </div>

        <Link
          to={`/blogs/${post.slug}`}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 text-gray-500 hover:text-gray-800 hover:bg-gray-300 p-2 rounded-full transition duration-300 flex items-center gap-1"
          title="Read More"
        >
          Read More <FaChevronRight size={18} />
        </Link>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    </div>
  );
}

export default Blog;