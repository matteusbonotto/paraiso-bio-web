import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Apto from '../pages/apto/apto';
import Visit from '../pages/visit';
import Contact from '../pages/contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRoutes = () => {
  console.log('AppRoutes component rendered');
  return (
    <Router>
      {/* wevApp /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/apto" element={<Apto />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />

      {/* Mobile /> */}
      
    </Router>
  );
};

export default AppRoutes;