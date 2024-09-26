import React from 'react'

const SimpleCards = (props) => {
  return (
    <div className='card-container'>
        <h4 className='card-heading'>{props.heading}</h4>
        <p className='card-text'>{props.text}</p>
    </div>
  )
}

export default SimpleCards