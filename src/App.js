import { useState, useEffect } from "react";
import { Search } from "./components/Search";
import { Countries } from "./components/Countries";
import { CountryDetail } from "./components/CountryDetail";
import { Button } from "./components/utils/Button";

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

  const [mode, setMode] = useState(true);
  const changeMode = () => {
    setMode(!mode);
  };

  return (
    <div
      className={`${
        mode
          ? "bg-dark-background text-dark-text"
          : "bg-light-background text-light-text"
      } relative min-h-screen`}
    >
      <header
        className={`flex justify-between ${
          mode ? "bg-dark-element" : "bg-light-element"
        } shadow px-12 md:px-20 py-6`}
      >
        <h1 className="font-bold text-2xl ">where in the world?</h1>
        <Button
          mode={mode}
          action={changeMode}
          value={
            <>
              <span className="material-icons">
                {mode ? "dark_mode" : "light_mode"}
              </span>
              <span>{mode ? "Dark Mode" : "Light Mode"}</span>
            </>
          }
        />
      </header>
      <main className="px-12 md:px-20 pt-12 pb-24 text-lg md:text-base ">
        {country ? (
          <CountryDetail
            country={country}
            updateCountry={updateCountry}
            countries={countries}
            mode={mode}
          />
        ) : (
          <>
            <Search
              query={query}
              updateQuery={updateQuery}
              updateRegion={updateRegion}
              mode={mode}
            />
            <Countries
              countries={filterCountries}
              error={countriesError}
              isLoaded={countriesIsLoaded}
              query={query}
              updateCountry={updateCountry}
              mode={mode}
            />
          </>
        )}
      </main>
      <footer
        className={`text-center ${
          mode ? "bg-dark-element" : "bg-light-element"
        } py-4 absolute bottom-0 w-full `}
      >
        © 2022{" "}
        <a
          href="https://github.com/minhlong149"
          target="_blank"
          rel="noreferrer"
        >
          Long Nguyen
        </a>
        {" | "}
        <a
          href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>{" "}
        &{" "}
        <a
          href="https://fullstackopen.com/en/part2/getting_data_from_server#exercises-2-11-2-14"
          target="_blank"
          rel="noreferrer"
        >
          Full Stack Open
        </a>
      </footer>
    </div>
  );
}

export default App;
