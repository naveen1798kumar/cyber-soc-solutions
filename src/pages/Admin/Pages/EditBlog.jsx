import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogPostsData from '../../../data/blogPosts';

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogId = parseInt(id);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = blogPostsData.find((b) => b.id === blogId);
    if (foundBlog) {
      setBlog(foundBlog);
    } else {
      alert('Blog not found');
      navigate('/admin/blogs');
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated blog:', blog);
    // Here you can connect this to your backend update logic
    navigate('/admin/blogs');
  };

  if (!blog) return null;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Blog: {blog.title}</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
        <input
          type="text"
          name="title"
          value={blog.title}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          placeholder="Title"
        />
        <textarea
          name="summary"
          value={blog.summary}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          placeholder="Summary"
        />
        <input
          type="text"
          name="author"
          value={blog.author}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          placeholder="Author"
        />
        <input
          type="text"
          name="category"
          value={blog.category}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          placeholder="Category"
        />
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => navigate('/admin/blogs')}
            className="px-4 py-2 rounded border"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog;
