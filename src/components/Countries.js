import React, { useState } from "react";
import CountryInfo from "./CountryInfo";

const Countries = ({ countries, error, isLoaded }) => {
  const [postNum, setPostNum] = useState(8);
  const increasePostNum = () => {
    setPostNum(postNum + 8);
  };

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  if (countries.length === 0) {
    return <p>Found nothing</p>;
  }

  if (countries.length > 0)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 mt-8">
        {countries
          .map((country) => (
            <CountryInfo country={country} key={country.name.common} />
          ))
          .slice(0, postNum)}
        <div className="col-span-full text-center">
          <button
            className=" bg-dark-element text-dark-text rounded-md py-3 px-6 "
            onClick={increasePostNum}
          >
            View more
          </button>
        </div>
      </div>
    );
};

export default Countries;
