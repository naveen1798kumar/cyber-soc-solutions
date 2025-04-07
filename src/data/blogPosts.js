// src/data/blogPosts.js

import Cybersecurity from "../assets/blogs/cybersecurity.jpg";
import Automation from "../assets/blogs/automation.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Cybersecurity Trends",
    slug: "cybersecurity-trends",
    summary: "Stay ahead with the latest trends in cybersecurity and how they impact businesses.",
    date: "March 29, 2025",
    author: "John Doe",
    category: "Cybersecurity",
    image: Cybersecurity,
    content: `Cybersecurity is an ever-evolving field that businesses must stay updated on. 
From AI-powered security to zero-trust networks, the industry is seeing rapid changes. 
In this blog, we explore the top trends that will shape cybersecurity in the coming years.`
  },
  {
    id: 2,
    title: "Automation in Business: Pros and Cons",
    slug: "automation-business",
    summary: "Discover how automation is transforming businesses and whether it's the right choice for you.",
    date: "April 2, 2025",
    author: "Jane Smith",
    category: "Automation",
    image: Automation,
    content: `Automation is revolutionizing the way businesses operate. From automated customer service to AI-driven analytics, 
companies are leveraging technology to streamline processes and reduce costs. But is automation always beneficial? 
Let's dive into the pros and cons.`
  },
  {
    id: 3,
    title: "Best Practices for Securing Your Data Online",
    slug: "securing-data-online",
    summary: "Learn practical tips to keep your data safe from cyber threats.",
    date: "April 10, 2025",
    author: "Michael Johnson",
    category: "Cybersecurity",
    image: "/assets/blogs/data-security.jpg", // External fallback image
    content: `With cyber threats on the rise, protecting your personal and business data has never been more crucial. 
In this guide, we'll cover essential best practices for online security, from using strong passwords to enabling multi-factor authentication.`
  },
];

export default blogPosts;
