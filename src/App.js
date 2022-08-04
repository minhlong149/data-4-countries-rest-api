import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Countries from "./components/Countries";
import CountryDetail from "./components/CountryDetail";

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
      setCountries(countriesData.sort((a, b) => b.population - a.population));
      setCountriesLoaded(true);
    } catch (error) {
      setCountriesLoaded(true);
      setCountriesError(error);
    }
  };

  // Search & Filter
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  const updateQuery = (event) => {
    setQuery(event.target.value);
  };

  const updateRegion = (event) => {
    setRegion(event.target.value);
  };

  const searchParam = [
    "name",
    "altSpellings",
    "translations",
    "capital",
    "cca3",
  ];
  const filterCountries = countries.filter(
    (country) =>
      (region === "" || country.region === region) &&
      searchParam.some(
        (param) =>
          country[param] &&
          JSON.stringify(country[param])
            .toLowerCase()
            .includes(query.toLowerCase())
      )
  );

  useEffect(() => {
    getCountriesData();
  }, []);

  const [country, setCountry] = useState(false);
  const updateCountry = (country) => {
    setCountry(country);
  };

  if (country) {
    return (
      <CountryDetail
        country={country}
        updateCountry={updateCountry}
        countries={countries}
      />
    );
  } else {
    return (
      <div className="p-12 ">
        <Search
          query={query}
          updateQuery={updateQuery}
          updateRegion={updateRegion}
        />
        <Countries
          countries={filterCountries}
          error={countriesError}
          isLoaded={countriesIsLoaded}
          query={query}
          updateCountry={updateCountry}
        />
      </div>
    );
  }
}

export default App;

// https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/
