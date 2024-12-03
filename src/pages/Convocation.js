import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ImageGallery from '../components/ImageGallery'
import Footer from '../components/Footer'



const Convocation = () => {

  const imageLinks = [
    { src: '/images/convocation/img1.jpg', className: 'col-span-2 w-full h-full object-cover' },
    { src: '/images/convocation/img2.jpg', className: 'w-full h-full object-cover' },
    { src: '/images/convocation/img9.jpg', className: 'w-full h-full object-cover row-span-2' },
    { src: '/images/convocation/img6.jpg', className: 'w-full h-full object-cover' },
    { src: '/images/convocation/img12.jpg', className: 'col-span-2 w-full h-full object-cover' },
  ];
  return (
    <div>
        <BreadCrumb pagename={"Convocation"}/>
        <ImageGallery images={imageLinks}/>
        <Footer/>
    </div>
  )
}

export default Convocation