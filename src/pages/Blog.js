import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import BlogCard from '../components/BlogCard'
import Footer from '../components/Footer'

const Blog = ({show=true}) => {
 const cardinfo=[
  {image:"/images/an_image_of_annual_day_celebrations_of_an_indian_s.png",heading:"Annual Day",text:"The school Annual day celebrations took place on December 2nd 2023. The program was inaugrated by Actor Tom Cruise",url:"/annualday"},
  {image:"/images/an_image_of_a_sports_meet_in_an_indian_school._the (1).png",heading:"Sports Meet",text:"The school sports was conducted over two days from april 22nd to 23rd. The event was inaugrated by SI Biju Paulose",url:"/sportsday"},
  {image:"/images/an_image_of_an_indian_teacher_sitting_in_a_chair_a (1).png",heading:"Cultural Events",text:"The School organizes various cultural events including gurupooja, mathrupooja and all other major cultural activities",url:"/culturalevents"},
  {image:"/images/an_image_of_two_indian_students_planting_a_tree_as.png",heading:"Sustainability Events",text:"The school engages in various programs promoting sustainable development including environment day celebrations,swatchh bharat awareness programmes and others among many",url:"/sustainabilityevents"}];

  return (
    <>
    {show && <BreadCrumb pagename={'Blog'}/>}
    <div className='container mx-auto px-4'>
        
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