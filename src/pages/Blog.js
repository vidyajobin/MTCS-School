import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import BlogCard from '../components/BlogCard'
import Footer from '../components/Footer'

const Blog = ({show=true}) => {
 const cardinfo=[
  {image:"/images/annual-day-r.jpg",heading:"Annual Day",text:"The school Annual day celebrations took place on December 2nd 2023. The program was inaugrated by Actor Tom Cruise",url:"/annualday"},
  {image:"/images/sports-r.jpg",heading:"Sports Meet",text:"The school sports was conducted over two days from april 22nd to 23rd. The event was inaugrated by SI Biju Paulose",url:"/sportsday"},
  {image:"/images/christmas.jpg",heading:"Cultural Events",text:"The School celebrates various cultural events including Christmas, Teacher's Day and all other major cultural activities",url:"/culturalevents"},
  {image:"/images/environment-day.jpg",heading:"Sustainability Events",text:"The school engages in various programs promoting sustainable development such as Environment Day Celebrations",url:"/sustainabilityevents"}];

  return (
    <>
    {show && <BreadCrumb pagename={'Blog'}/>}
    <div className='container mx-auto px-4 mb-4'>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
          {cardinfo.map((card, index) => (
            <BlogCard 
              key={index}
              image={card.image} 
              heading={card.heading} 
              text={card.text} 
              url={card.url}
            />
          ))}
        </div>
        
    </div>
    {show && <Footer/>}
    </>
  )
}

export default Blog