import React, { useState, useEffect } from "react";
import { Country } from "./Country";

const MAX_COUNTRIES = 10;

export const Countries = ({ countries, error, isLoaded, query }) => {
  const [isShow, setShow] = useState([]);

  useEffect(() => {
    setShow(countries.map(() => false));
  }, [countries]);

  const showCountry = (index) => {
    let newShow =[...isShow]
    newShow[index] = !newShow[index];
    setShow(newShow);
  };

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  if (query === "") {
    return <p>Nothing here, just like your empty soul</p>;
  }

  if (countries.length === 0) {
    return <p>Found nothing</p>;
  }

  // If there are too many countries that match the query,
  // the user is prompted to make their query more specific:
  if (countries.length > MAX_COUNTRIES) {
    return <p>Too many matches, specify another filter</p>;
  }

  // When there is only one country matching the query,
  // the basic data of the country, its flag and languages are shown:
  if (countries.length === 1) {
    return <Country country={countries[0]} />;
  }

  // If there are more than one country,
  // all countries matching the query are shown:
  return (
    <ul>
      {countries.map((country, index) => (
        <li key={country.name.common}>
          {country.name.common}{" "}
          <button onClick={() => showCountry(index)}>show</button>
          {isShow[index] ? <Country country={country} /> : <></>}
        </li>
      ))}
    </ul>
  );
};
