import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ImageGallery from '../components/ImageGallery'
import Footer from '../components/Footer'

const Cocurricular = () => {

  const imageLinks = [
    { src: '/images/Extras/extra1.jpg', className: 'col-span-2 w-full h-full object-cover' },
    { src: '/images/Extras/extra3.jpg', className: 'w-full h-full object-cover' },
    { src: '/images/Extras/extra2.jpg', className: 'w-full h-full object-cover row-span-2' },
    { src: '/images/Extras/extra4.jpg', className: 'w-full h-full object-cover' },
    { src: '/images/Extras/extra5.jpg', className: 'col-span-2 w-full h-full object-cover' },
  ];

  return (
    <>
        <BreadCrumb pagename={"Co-Curricular Activities"}/>
        <ImageGallery images={imageLinks}/>
        <Footer/>
    </>
  )
}

export default Cocurricular