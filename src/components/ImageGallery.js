import React from 'react'

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-4 gap-2 mt-8">
      <img
        src="/images/annual-day/img3.jpg"
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
      <img
        src="/images/annual-day/img2.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src="/images/annual-day/img5.jpg"
        alt=""
        className="w-full h-full object-cover row-span-2"
      />
      <img
        src="/images/annual-day/img1.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src="/images/annual-day/img4.jpg"
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
    </div>
  )
}

export default ImageGallery