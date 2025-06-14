// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Loading from './components/Loading';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import BlogDetail from './pages/Blog/BlogDetail';
import NotFound from './pages/404/NotFound';
import Services from './pages/Services/Services';
import CategoryServices from './pages/Services/CategoryServices';
import ServiceDetails from './pages/Services/ServiceDetails';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';

// Admin Pages
import AdminLogin from './pages/Admin/AdminLogin';
import AdminLayout from './Layout/AdminLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminServices from './pages/Admin/Pages/AdminServices';
import AdminBlogs from './pages/Admin/Pages/AdminBlogs';
import AdminProducts from './pages/Admin/Pages/AdminProducts';
import AdminSettings from './pages/Admin/Pages/AdminSettings';
import EditBlog from './pages/Admin/Pages/EditBlog';
import EditServicePage from './pages/Admin/Pages/EditServicePage';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Routes>
        {/* Public Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:category/:serviceId" element={<ServiceDetails />} />
          <Route path="services/:category" element={<CategoryServices />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="blogs/:slug" element={<BlogDetail />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="services" element={<AdminServices />} />
          <Route path="services/edit/:serviceId" element={<EditServicePage />} />
          <Route path="blogs" element={<AdminBlogs />} />
          <Route path="blogs/edit/:id" element={<EditBlog />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
