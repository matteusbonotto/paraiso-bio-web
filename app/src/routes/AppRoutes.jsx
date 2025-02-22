import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/Abouts/About';
import Apto from '../pages/aptos/apto';
import Visit from '../pages/visits/visit';
import Contact from '../pages/Contacts/contact';
import Header from '../components/web/HeaderComponent/Header';
import Footer from '../components/web/FooterComponent/Footer';

const AppRoutes = () => {
  console.log('AppRoutes component rendered');
  return (
    <Router>  
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/apto" element={<Apto />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;