import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import FeesCards from '../components/FeesCards'

const SchoolFees = () => {
  return (
    <div>
        <BreadCrumb pagename={'School Fees'}/>
        <div className='fees-wrapper'>
        <div className='fees-text-container'>
        <p>The school fee is to be remitted in four instalments through Banking System or School Office directly. Fee can be paid in full or in four instalments on the specified date as mentioned in the school dairy.</p>
        </div>
        <h3>Fee structure per instalment</h3>
        <div className='fees-cards-flex'>
        <FeesCards />
        <FeesCards />
        <FeesCards />
        </div>
        </div>
    </div>
  )
}

export default SchoolFees