import React from 'react';

function BlogCard({ blog }) {
  return (
    <div>
      <img src={blog.image} alt={blog.title} />
      <h3>{blog.title}</h3>
      {/* ...other fields */}
    </div>
  );
}

export default BlogCard;