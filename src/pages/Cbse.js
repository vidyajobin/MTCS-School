import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import CBSEDocuments from '../components/CbseDocuments'
import Footer from '../components/Footer'

const Cbse = ({show=true}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <BreadCrumb pagename='CBSE'/>
      <div className="flex-grow">
        <CBSEDocuments />
      </div>
      {show && <Footer/>}
    </div>
  )
}

export default Cbse