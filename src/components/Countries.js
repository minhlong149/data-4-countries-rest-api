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
      <div>
        {countries
          .map((country) => (
            <CountryInfo country={country} key={country.name.common} />
          ))
          .slice(0, postNum)}
        <button onClick={increasePostNum}>View more</button>
      </div>
    );
};

export default Countries;
