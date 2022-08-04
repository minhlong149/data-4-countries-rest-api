import { CountryInfo } from "./CountryInfo";

export function CountriesList({ countries, updateCountry, maxCountries, mode }) {
  return countries
    .map((country) => (
      <CountryInfo
        country={country}
        key={country.name.common}
        updateCountry={updateCountry}
        mode={mode}
      />
    ))
    .slice(0, maxCountries);
}
