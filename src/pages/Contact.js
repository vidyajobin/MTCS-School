import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import SimpleCards from "../components/SimpleCards";
import contactsvg from '../assets/undraw_engineering_team_a7n2.svg'
import Footer from "../components/Footer";

const Contact = ({show=true}) => {
  return (
    <>
    <BreadCrumb pagename={"Contact"} />
    <div className="contact-container">
      <div  className="cards-container">
      <SimpleCards
        heading={"Address"}
        text={`Mount Thabore Central School
Puliyanam P.O. Angamaly, Ernakulam, Kerala-683572`}
      />
      <SimpleCards
        heading={"Contact Number"}
        text={`+91 484-2982464`}
      />
      <SimpleCards
        heading={"Email Address"}
        text={`mountthabore@yahoo.com`}
      />
      <SimpleCards
        heading={"Website"}
        text={`mtcs.com`}
      />
      </div>

      <div className="flex-container">
          <div className="text-container">
            <h1>Contact Us</h1>
            <p className="para-1">
              If you have any questions, feel free to reach out to us. We're here to help and will respond to your inquiries as soon as possible.
            </p>
            <p>
              Whether you need information about our school, admission details, or anything else, don't hesitate to get in touch. We're always ready to assist you.
            </p>
            <img src={contactsvg} alt="Description of SVG" style={{ marginTop: "20px", width: "100%" }} />
          </div>

          <div className="map-container">
            <h2>Find us on the Map  <span className="icon-container"><i className="fas fa-map-marker-alt"></i></span></h2>
            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.6369016732433!2d76.36189517479654!3d10.210112789906262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08069d9201e6bf%3A0x65d18a8603e5e786!2sMount%20Thabore%20Central%20School!5e0!3m2!1sen!2sin!4v1727430276342!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
    </div>
    {show&&<Footer/>}
    </>
  );
};

export default Contact;
