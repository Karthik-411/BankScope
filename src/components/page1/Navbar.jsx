import React from "react";

const Navbar = () => {
  return (
    <div className="flex  justify-between p-10   ">
      <h4 className="px-3.75  py-1.75 bg-black text-white rounded-full uppercase text-xs tracking-wider">
        target audience
      </h4>
      <button className="px-3.75 py-1.75 rounded-full uppercase bg-gray-200 text-xs tracking-wider">
        digital banking platform
      </button>
    </div>
  );
};
export default Navbar;
