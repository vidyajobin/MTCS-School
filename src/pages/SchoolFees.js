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
        <FeesCards classheading={"KG Classes"} fees={"3650"} imageUrl={"/images/kg-classes.jpg"}/>
        <FeesCards classheading={"1-4 Classes"} fees={"3700"} imageUrl={"/images/1to4.jpg"}/>
        <FeesCards classheading={"5-7 Classes"} fees={"3800"} imageUrl={"/images/5to7.jpg"}/>
        <FeesCards classheading={"8-10 Classes"} fees={"4300"} imageUrl={"/images/8to10.jpg"}/>
        
        </div>
        <h3 style={{ marginBottom: '10px' }}>Bus Fees</h3>
        <p>Conveyance fee should be remitted monthly. The fee varies according to the distance to various destinations.</p>
        </div>
    </div>
  )
}

export default SchoolFees