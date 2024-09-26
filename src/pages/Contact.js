import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import SimpleCards from "../components/SimpleCards";

const Contact = () => {
  return (
    <>
    <BreadCrumb pagename={"Contact"} />
    <div className="contact-container">
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
    </>
  );
};

export default Contact;
