import React, { useEffect, useState } from "react";
import CountryInfo from "./CountryInfo";

function Countries({ countries, error, isLoaded, updateCountry }) {
  const postPerSearch = 8;
  const [postNum, setPostNum] = useState(postPerSearch);
  const increasePostNum = () => {
    setPostNum(postNum + postPerSearch);
  };

  useEffect(() => {
    setPostNum(postPerSearch);
  }, [countries]);

  if (error) {
    return <Message content={`Error: ${error.message}`} />;
  }

  if (!isLoaded) {
    return <Message content="Loading..." />;
  }

  if (countries.length === 0) {
    return <Message content="I found...nothing!!" />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10 mt-8">
      <CountriesList
        countries={countries}
        updateCountry={updateCountry}
        maxCountries={postNum}
      />
      <Button action={increasePostNum} value="View more" />
    </div>
  );
}

export default Countries;

function Message({ content }) {
  return <p className="mt-8 text-dark-text text-center">{content}</p>;
}

function CountriesList({ countries, updateCountry, maxCountries }) {
  return countries
    .map((country) => (
      <CountryInfo
        country={country}
        key={country.name.common}
        updateCountry={updateCountry}
      />
    ))
    .slice(0, maxCountries);
}

function Button({ action, value }) {
  return (
    <div className="col-span-full text-center">
      <button
        className="bg-dark-element text-dark-text rounded-md py-2 px-6"
        onClick={action}
      >
        {value}
      </button>
    </div>
  );
}
