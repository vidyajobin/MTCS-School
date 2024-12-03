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
import Convocation from '../pages/Convocation';
import SustainabilityEvents from '../pages/SustainabilityEvents'
import Cbse from '../pages/Cbse';
import Cocurricular from '../pages/Cocurricular';

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
      <Route path="/convocation" element={<Convocation />} /> 
      <Route path="/cocurricular" element={<Cocurricular />} /> 
      <Route path="/sustainabilityevents" element={<SustainabilityEvents />} /> 
      <Route path="/cbse" element={<Cbse />} /> 
    </Routes>
    </>
  );
};

export default RoutesConfig;
