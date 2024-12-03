import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ImageGallery from '../components/ImageGallery'
import Footer from '../components/Footer'

const SustainabilityEvents = () => {

  const imageLinks = [
    { src: '/images/sustainability/sustainability1.jpg', className: 'col-span-2 w-full h-full object-cover' },
    { src: '/images/sustainability/sustainability3.jpg', className: 'w-full h-full object-cover' },
    { src: '/images/sustainability/sustainability5.jpg', className: 'w-full h-full object-cover row-span-2' },
    { src: '/images/sustainability/sustainability4.jpg', className: 'w-full h-full object-cover' },
    { src: '/images/sustainability/sustainability2.jpg', className: 'col-span-2 w-full h-full object-cover' },
  ];
  return (
    <div>
        <BreadCrumb pagename={"Cultural Events"}/>
        <ImageGallery images={imageLinks}/>
        <Footer/>
    </div>
  )
}

export default SustainabilityEvents