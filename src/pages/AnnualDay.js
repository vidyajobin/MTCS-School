import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import ImageGallery from "../components/ImageGallery";
import Footer from "../components/Footer";

const AnnualDay = ({ show = true }) => {
  const imageLinks = [
    { src: '/images/annual-day/img3.jpg', className: 'col-span-2 w-full h-full object-cover' },
    { src: '/images/annual-day/img2.jpg', className: 'w-full h-full object-cover' },
    { src: '/images/annual-day/img5.jpg', className: 'w-full h-full object-cover row-span-2' },
    { src: '/images/annual-day/img1.jpg', className: 'w-full h-full object-cover' },
    { src: '/images/annual-day/img4.jpg', className: 'col-span-2 w-full h-full object-cover' },
  ];

  return (
    <>
      

      <BreadCrumb pagename={"Annual Day"} />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
        <iframe
          width="960" // Adjust the width
          height="540" // Adjust the height
          src="https://www.youtube.com/embed/2iVR7Pu0QFs?si=KqZ5DtOJ3ySMaRxe"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ border: "5px solid #ccc", borderRadius: "10px" }} // Optional styling
        ></iframe>
      </div>
      <ImageGallery images={imageLinks}/>

      {show && <Footer />}
    </>
  );
};

export default AnnualDay;
