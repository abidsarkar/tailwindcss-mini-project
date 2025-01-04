import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
const DropDown = () => {
  useEffect(() => {
    // console.log(Country.getAllCountries());
    // console.log(State.getAllStates());
    console.log("1st render only");
  }, []);

  const [selectedCountry, setSelectedCountry] = useState("");

  const [states, setStates] = useState([]);

  const [cities, setCities] = useState([]);

  const allCountries = Country.getAllCountries(); // it's an Array
  //   handleCountryChange
  const handleCountryChange = (e) => {
    const countryCode = e.target.value 
    setSelectedCountry(countryCode)
    setCities([])

    const fetchedStates = State.getStatesOfCountry(countryCode)
    setStates(fetchedStates)
}
  return (
    <div className="p-5 sm:w-[600px] bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg text-center">
      <h1 className="text-white text-lg sm:text-2xl lg:text-3xl font-bold">
        Country State City DropDown List
      </h1>
      <div className="mt-5">
        {/* Country Dropdown */}
        <select
          className="selectStyle"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="">Select Country</option>

          {allCountries.map((country) => (
            <option
              key={country.isoCode}
              value={country.isoCode}
              className="text-black"
            >
              {country.name}
            </option>
          ))}
        </select>
        <select className="selectStyle" name="" id="">
          <option value="">Select State</option>
        </select>
        <select className="selectStyle" name="" id="">
          <option value="">Select City</option>
        </select>
      </div>
    </div>
  );
};

export default DropDown;
