
import React from "react";

// react icons
import {CgFacebook} from "react-icons/cg";
import {BsInstagram,} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
      <footer className="bg-gray-300 rounded-xl w-full p-6 lg:p-9">
            <div className="flex justify-center gap-[30px] flex-wrap w-full sm:px-32">
                <div
                    className="flex justify-center sm:justify-between gap-[30px] w-full flex-wrap">
                    <Link to="/aboutus"><p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">About Us</p></Link>
                    <Link to="/teachers"><p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Teachers</p></Link>
                    <Link to="/academics"><p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Academics</p></Link>
                    <Link to="/schoolfees"><p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">School Fees</p></Link>
                    <Link to="/blog"><p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Blog</p></Link>
                    <Link to="/contactus"><p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Contact
                        Us</p></Link>
                </div>

                <div className="flex items-center flex-wrap gap-[10px] text-text">
                    <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300" href="www.google.com">
                        <CgFacebook/>
                    </a>
                    {/* <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300">
                        <BsTwitter/>
                    </a> */}
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300" href="www.google.com">
                        <BsInstagram/>
                    </a>
                    {/* <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300">
                        <BsLinkedin/>
                    </a> */}
                </div>


                <div
                    className="border-t border-gray-200 pt-[20px] flex items-center w-full flex-wrap gap-[20px] justify-center">
                    <p className="text-[0.8rem] sm:text-[0.9rem] text-gray-600">© 2024 MTCS Puliyanam. All Rights
                        Reserved. </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
                    