import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import FeesCards from '../components/FeesCards'
import Footer from '../components/Footer'

const SchoolFees = ({show=true}) => {
  // Fees data array
  const classFeesData = [
    {
      classheading: "KG Classes",
      fees: "3650",
      imageUrl: "/images/kg-classes-r.jpg"
    },
    {
      classheading: "1-4 Classes",
      fees: "3700",
      imageUrl: "/images/1-4-r.jpg"
    },
    {
      classheading: "5-7 Classes",
      fees: "3800",
      imageUrl: "/images/5-7-r.jpg"
    },
    {
      classheading: "8-10 Classes",
      fees: "4300",
      imageUrl: "/images/8-10-r.jpg"
    }
  ];

  return (
    <>
      {show && <BreadCrumb pagename={'School Fees'}/>}
      
      <div className='fees-wrapper'>
        <div className='fees-text-container'>
          <p>The school fee is to be remitted in four instalments through Banking System or School Office directly. Fee can be paid in full or in four instalments on the specified date as mentioned in the school dairy.</p>
        </div>
        
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Fee structure per instalment</h3>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          {classFeesData.map((feeCard, index) => (
            <FeesCards 
              key={index}
              classheading={feeCard.classheading}
              fees={feeCard.fees}
              imageUrl={feeCard.imageUrl}
            />
          ))}
        </div>
        
        <h3 className="text-xl md:text-2xl font-semibold mb-3">Bus Fees</h3>
        <p className="mb-8">Conveyance fee should be remitted monthly. The fee varies according to the distance to various destinations.</p>
      </div>
      
      {show && <Footer/>}
    </>
  )
}

export default SchoolFees