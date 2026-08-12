import React from "react";
import "remixicon/fonts/remixicon.css";

const Rightcard = (props) => {
  return (
    <div className="h-full shrink-0  w-80 relative rounded-4xl overflow-hidden">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <div className="h-full w-full absolute top-0 left-0 px-6 py-7 flex flex-col justify-between">
        <h2
          className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-medium text-xl
        "
        >
          {props.id}
        </h2>
        <div>
          <p className="mb-10  text-shadow-4xs text-white font-bold">
            {props.content}
          </p>
          <div className="flex justify-between">
            <button className="px-8 py-1.5  text-ss text-white font-semibold bg-blue-700 rounded-4xl ">
              {props.tag}
            </button>
            <button className="px-3 py-2   text-white font-semibold bg-blue-700 rounded-4xl ">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightcard;
