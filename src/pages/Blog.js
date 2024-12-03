import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import BlogCard from '../components/BlogCard'
import Footer from '../components/Footer'

const Blog = ({show=true}) => {
 const cardinfo=[
  {image:"/images/annual-day-r.jpg",heading:"Annual Day",text:"The school Annual day celebrations took place on December 2nd 2023. The program was inaugrated by Fr.Jibi Yohannan",url:"/annualday"},
  {image:"/images/sports-r.jpg",heading:"Kindergarten Convocation.",text:"A heartfelt celebration marking the achievements of our UKG students as they take their first big step in their educational journey.",url:"/convocation"},
  {image:"/images/bakery-visit.jpg",heading:"Co-curricular Activities",text:"The school offers a wide range of co-curricular activities, including Industry visits and other Educational Ventures",url:"/culturalevents"},
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