import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import blogBanner from "../../assets/banners/blog-banner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import blogPosts from "../../data/blogPosts";
import axios from "axios"; // <-- Add this

function Blog() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    // Fetch blogs from your backend API
    axios.get("http://localhost:5000/api/blogs")
      .then(res => setBlogPosts(res.data))
      .catch(err => console.error("Failed to fetch blogs", err));
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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-6 my-12">
  {filteredBlogs.map((post) => (
    <div
    key={post._id || post.slug}
     className="group max-w-3xl mx-auto bg-gray-100 shadow-md rounded-md overflow-hidden flex flex-col sm:flex-row min-h-[450px] sm:min-h-[450px] h-auto">
      {/* Media (Background Image) */}
      <div
        className="sm:w-1/2 md:group-hover:w-[75%] min-h-[250px] w-full bg-cover bg-center group-hover:scale-105 transition-all duration-300"
        style={{
          backgroundImage: `url(${post.image})`,
        }}
      ></div>

      {/* Content */}
      <div className="sm:w-1/2 h-full w-full p-6 relative flex flex-col justify-between transition-all duration-300">
        <div>
          <p className="text-[10px] text-gray-800 font-bold bg-red-400 w-max p-2 rounded-full uppercase tracking-wide text-center mb-2">
            {post.category || "Featured"}
          </p>
          <h3 className="text-2xl font-playfair text-center text-gray-800 leading-tight">
            {post.title}
          </h3>
          <div className="h-[2px] w-10 bg-gray-400 mx-auto my-4" />
          <p className="text-gray-600 text-sm text-justify font-light">
            {post.summary}
          </p>
        </div>

        <Link
          to={`/blogs/${post.slug}`}
          className="absolute group-hover:bg-gray-300 p-[1px] py-2 rounded-full flex justify-center items-center  bottom-6 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-gray-800 transition-colors duration-300"
          title="Read More"
        > Read More
          <FaChevronRight size={18} />
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