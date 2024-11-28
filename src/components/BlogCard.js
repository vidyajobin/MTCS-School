import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ image, heading, text, url }) => {
  return (
    <div className="w-full">
      <div className="w-full shadow-md hover:shadow-lg transition-all duration-300 bg-white rounded-md relative group overflow-hidden">
        <img
          src={image}
          alt="blog card"
          className="w-full h-48 md:h-56 object-cover rounded-t-md transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="p-4 md:p-5">
          <h3 className="text-xl md:text-2xl font-bold text-[#0FABCA] mb-2">
            {heading}
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-4">
            {text}
          </p>
          <Link to={url} className="block">
            <button className="w-full py-2 px-4 bg-[#0FABCA] text-white rounded-md 
              hover:bg-[#0FABCA]/90 transition-colors duration-300 
              text-sm md:text-base">
              See More
            </button>
          </Link>
        </div>

        {/* Decorative background effect */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-[#c0e6ed] 
          opacity-0 group-hover:opacity-20 
          transition-opacity duration-300 
          pointer-events-none z-0"
        />
      </div>
    </div>
  );
};

export default BlogCard;