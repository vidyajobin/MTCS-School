import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ImageGallery from '../components/ImageGallery'
import Footer from '../components/Footer'

const SportsDay = () => {
  return (
    <div>
        <BreadCrumb pagename={"SportsDay"}/>
        <ImageGallery/>
        <Footer/>
    </div>
  )
}

export default SportsDay