import React from 'react'

const FeesCards = ({classheading, fees, imageUrl}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs mx-auto">
      <div className="p-4 text-center">
        <h4 className="text-lg md:text-xl font-semibold mb-2" style={{color:'#1eaaf1'}}>
          {classheading}
        </h4>
        <p className="text-base md:text-lg mb-3">
          <span style={{color:'orange'}}>₹{fees}</span> / term
        </p>
      </div>
      
      <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`${classheading} classroom`} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </div>
  )
}

export default FeesCards