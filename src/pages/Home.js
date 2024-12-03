import React from 'react'
import HomeSlider from '../components/HomeSlider'
import ServiceSection from '../components/ServiceSection'
import About from './About'
// import Teachers from './Teachers'
import Academics from './Academics'
import Footer from '../components/Footer'
import SchoolFees from './SchoolFees'

const Home = () => {
  return (
    <>
        <HomeSlider />
        <ServiceSection />
        <About show={false}/>
        {/* <Teachers show={false} /> */}
        <Academics show={false} />
        <SchoolFees show={false} />
        <Footer/>
    </>
  )
}

export default Home