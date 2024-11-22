import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import CBSEDocuments from '../components/CbseDocuments'
import Footer from '../components/Footer'

const Cbse = ({show=true}) => {
  return (
    <>
    <BreadCrumb pagename='CBSE'/>
    <br/>
    <CBSEDocuments />
    <br/>
    {show&&<Footer/>}
    </>
  )
}

export default Cbse