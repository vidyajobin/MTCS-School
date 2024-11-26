import React from 'react'

const SimpleCards = (props) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 md:p-6 h-full flex flex-col justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <h4 className="text-lg md:text-xl font-semibold mb-2 text-custom-blue">
        {props.heading}
      </h4>
      <p className="text-gray-600 text-sm md:text-base">
        {props.text}
      </p>
    </div>
  )
}

export default SimpleCards