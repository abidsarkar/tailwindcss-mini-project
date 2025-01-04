import React from "react";

const DropDown = () => {
  return (
    <div className="p-5 sm:w-[600px] bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg text-center">
      <h1 className="text-white text-lg sm:text-2xl lg:text-3xl font-bold">
        Country State City DropDown List
      </h1>
      <div className="mt-5">
        {/* Country Dropdown */}
        <select className="block w-full outline-none mb-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 text-white shadow-md" name="" id="">
            <option value="">Select Country</option>
        </select>
        <select className="block w-full outline-none mb-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 text-white shadow-md" name="" id="">
            <option value="">Select State</option>
        </select>
        <select className="block w-full outline-none mb-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 text-white shadow-md" name="" id="">
            <option value="">Select City</option>
        </select>
      </div>
    </div>
  );
};

export default DropDown;
