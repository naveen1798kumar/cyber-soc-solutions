import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Loading from './components/Loading'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import CategoryServices from './pages/Services/CategoryServices';
import ServiceDetails from './pages/Services/ServiceDetails';
// import Products from './pages/Products';
import Partners from './pages/Partners/Partners';
import Contact from './pages/Contact/Contact';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed
  }, []);

  // Show the Loading screen until the app is ready
  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
        {/* <Route path="services/:category" element={<CategoryServices />} /> */}
        <Route path="services/:category/:serviceId" element={<ServiceDetails />} />
          {/* <Route path="products" element={<Products />} /> */}
          <Route path="partners" element={<Partners />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
