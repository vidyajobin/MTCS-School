import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ image, heading, text, url }) => {
  return (
    <div>
      <div className="w-full sm:w-[80%] lg:w-[83%] m-10 shadow-md hover:shadow-none z-0 bg-white rounded-md relative cursor-pointer group before:absolute before:top-0 hover:before:top-[10px] before:left-0 hover:before:left-[-10px] before:w-full before:h-full before:rounded-md before:bg-[#c0e6ed] before:transition-all before:duration-300 before:z-[-1] after:w-full after:h-full after:absolute after:top-0 hover:after:top-[20px] after:left-0 hover:after:left-[-20px] after:rounded-md after:bg-[#d4f2f7] after:z-[-2] after:transition-all after:duration-500">
        <img
          src={image}
          alt="animated_card"
          className="w-full h-[200px] rounded-t-md object-cover
"
        />
        <div className="p-[18px] pt-2.5 bg-white rounded-b-md">
          <h3 className="text-[1.5rem] font-bold text-[#0FABCA]">{heading}</h3>
          <p className="text-[1rem] font-[400] text-gray-600">{text}</p>
          <Link to={url}>
            <button className="w-full py-2 px-4 hover:bg-[#c0e6ed] hover:text-black text-[1rem] transition-all duration-300 bg-[#0FABCA] text-white rounded-md mt-5">
              See More...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
