import { Button } from "./utils/Button";
import { Detail } from "./CountryDetail/Detail";

export function CountryDetail({ country, updateCountry, countries }) {
  const borderCountries = country.borders?.map((code) =>
    countries.find((country) => country.cca3 === code)
  );

  return (
    <>
      <nav>
        <Button
          action={() => updateCountry(undefined)}
          value={
            <>
              <span className="material-icons text-base">arrow_back</span>Back
            </>
          }
        />
      </nav>

      <Detail
        country={country}
        borderCountries={borderCountries}
        updateCountry={updateCountry}
      />
    </>
  );
}
