import React, { useState, useEffect } from "react";
import { Search } from "./Search";
import { Countries } from "./Countries";

function App() {
  // Fetch the Data from the endpoint all
  const [countries, setCountries] = useState([]);
  const [countriesIsLoaded, setCountriesLoaded] = useState(false);
  const [countriesError, setCountriesError] = useState(null);

  const getCountriesData = async () => {
    try {
      const countriesURL = `https://restcountries.com/v3.1/all/`;
      const countriesResult = await fetch(countriesURL);
      const countriesData = await countriesResult.json();
      setCountries(countriesData);
      setCountriesLoaded(true);
    } catch (error) {
      setCountriesLoaded(true);
      setCountriesError(error);
    }
  };

  // Search & Filter
  const [query, setQuery] = useState("");

  const updateQuery = (event) => {
    setQuery(event.target.value);
  };

  const searchParam = ["name", "altSpellings", "translations"];
  const filterCountries = countries.filter((country) =>
    searchParam.some((param) =>
      JSON.stringify(country[param]).toLowerCase().includes(query.toLowerCase())
    )
  );

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <>
      <Search query={query} updateQuery={updateQuery} />
      <Countries
        countries={filterCountries}
        error={countriesError}
        isLoaded={countriesIsLoaded}
        query={query}
      />
    </>
  );
}

export default App;

// https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/
