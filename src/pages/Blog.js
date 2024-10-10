import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import BlogCard from '../components/BlogCard'

const Blog = () => {
  return (
    <div className='blog-container'>
        <BreadCrumb pagename={'Blog'}/>
        <div className='blog-card-container grid grid-cols-2 gap-4 mt-5'>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        </div>
    </div>
  )
}

export default Blog