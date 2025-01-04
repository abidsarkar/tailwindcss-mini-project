import React from "react";
import { Country, State, City } from "country-state-city";
const DropDown = () => {
  console.log(Country.getAllCountries());
  console.log(State.getAllStates());
  return (
    <div className="p-5 sm:w-[600px] bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg text-center">
      <h1 className="text-white text-lg sm:text-2xl lg:text-3xl font-bold">
        Country State City DropDown List
      </h1>
      <div className="mt-5">
        {/* Country Dropdown */}
        <select
          className="selectStyle"
          name=""
          id=""
        >
          <option value="">Select Country</option>
        </select>
        <select
          className="selectStyle"
          name=""
          id=""
        >
          <option value="">Select State</option>
        </select>
        <select
          className="selectStyle"
          name=""
          id=""
        >
          <option value="">Select City</option>
        </select>
      </div>
    </div>
  );
};

export default DropDown;
