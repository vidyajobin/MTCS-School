import React from 'react'
import HomeSlider from '../components/HomeSlider'
import ServiceSection from '../components/ServiceSection'
import About from './About'
import Teachers from './Teachers'
import Academics from './Academics'

const Home = () => {
  return (
    <div>
        <HomeSlider />
        <ServiceSection />
        <About show={false}/>
        <Teachers show={false} />
        <Academics show={false} />
    </div>
  )
}

export default Home