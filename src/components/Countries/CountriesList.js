import { CountryInfo } from "./CountryInfo";

export function CountriesList({ countries, updateCountry, maxCountries }) {
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
