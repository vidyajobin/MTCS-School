import React from "react";

// react icons
// import { CgFacebook } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#EAEAEA] boxShadow rounded-xl w-full p-6 lg:p-9">
      <div className="flex justify-center gap-[30px] flex-wrap w-full sm:px-32">
        <div className="flex justify-center sm:justify-between gap-[30px] w-full flex-wrap" >
          <Link
            to="/"
            className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 custom-link"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 custom-link"
          >
            About
          </Link>
          <Link
            to="/teachers"
            className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 custom-link"
          >
            Our Team
          </Link>
          <Link
            to="/academics"
            className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 custom-link"
          >
            Academics
          </Link>
          <Link
            to="/fees"
            className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 custom-link"
          >
            School Fees
          </Link>
          <Link
            to="/blog"
            className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 custom-link"
          >
            Blog
          </Link>
          <Link
            to="/cbse"
            className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 custom-link"
          >
            CBSE
          </Link>
          <Link
            to="/contact"
            className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 custom-link"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center flex-wrap gap-[10px] text-text">
          {/* <a 
          href="https://www.facebook.com/mounttaborresidentialcentralschool"
          target="blank"
          className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300 custom-link">
            <CgFacebook />
          </a> */}
          <a 
          href="https://www.instagram.com/mtcs_peechanikkad/"
          target="blank"
          className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300 custom-link">
            <BsInstagram />
          </a>
        </div>

        <div className="border-t border-gray-200 pt-[20px] flex items-center w-full flex-wrap gap-[20px] justify-center">
          <p className="text-[0.8rem] sm:text-[0.9rem] text-gray-600">
            © MTCS Public School. All rights reserved.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
