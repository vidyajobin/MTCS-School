import React from 'react'

const FeesCards = ({classheading,fees,imageUrl}) => {
  return (
    <div className='fees-card-wrapper'>
    <h4 style={{color:'#1eaaf1'}}>{classheading}</h4>
        <p><span style={{color:'orange'}}>₹{fees} </span> / term</p>
        <img src={imageUrl} alt='a classroom of kg students' style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
    </div>
  )
}

export default FeesCards