import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Teachers from '../pages/Teachers';
import Academics from '../pages/Academics';
import SchoolFees from '../pages/SchoolFees';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import AnnualDay from '../pages/AnnualDay'; 

const RoutesConfig = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/schoolfees" element={<SchoolFees />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/annualday" element={<AnnualDay />} /> 
    </Routes>
    </>
  );
};

export default RoutesConfig;
