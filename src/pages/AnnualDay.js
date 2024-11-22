
import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import ImageGallery from "../components/ImageGallery";
import Footer from "../components/Footer";


const AnnualDay = ({show=true}) => {
  return (
    <>
    <BreadCrumb pagename={"Annual Day"}/>
    <ImageGallery/>

    {show&& <Footer/>}
    </>
  );
};

export default AnnualDay;    
          