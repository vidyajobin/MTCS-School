import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import SimpleCards from "../components/SimpleCards";
import contactsvg from '../assets/undraw_engineering_team_a7n2.svg'
import Footer from "../components/Footer";

const Contact = ({show=true}) => {
  return (
    <>
      {show && <BreadCrumb pagename={"Contact"} />}
      
      <div className="container mx-auto px-4 py-8">
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <SimpleCards
            heading={"Address"}
            text={`Mount Thabore Central School Puliyanam P.O. Angamaly, Ernakulam, Kerala-683572`}
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

        
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold text-custom-blue mb-4">
              Contact Us
            </h1>
            <div className="space-y-4 text-gray-700">
              <p>
                If you have any questions, feel free to reach out to us. We're here to help and will respond to your inquiries as soon as possible.
              </p>
              <p>
                Whether you need information about our school, admission details, or anything else, don't hesitate to get in touch. We're always ready to assist you.
              </p>
            </div>
            
            <div className="w-full">
              <img 
                src={contactsvg} 
                alt="Engineering Team" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div> */}

          {/* Map Container */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-custom-blue">
              Find us on the Map 
              <span className="ml-2 text-red-500">
                <i className="fas fa-map-marker-alt"></i>
              </span>
            </h2>
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
              <iframe
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.6369016732433!2d76.36189517479654!3d10.210112789906262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08069d9201e6bf%3A0x65d18a8603e5e786!2sMount%20Thabore%20Central%20School!5e0!3m2!1sen!2sin!4v1727430276342!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      {/* </div> */}

      {show && <Footer/>}
    </>
  );
};

export default Contact;