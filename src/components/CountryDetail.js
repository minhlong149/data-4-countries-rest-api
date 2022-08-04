import { Button } from "./utils/Button";
import { Detail } from "./CountryDetail/Detail";

export default function CountryDetail({ country, updateCountry, countries }) {
  const borderCountries = country.borders?.map((code) =>
    countries.find((country) => country.cca3 === code)
  );

  return (
    <div className="text-lg md:text-base p-12">
      <Button
        action={() => updateCountry(undefined)}
        value={
          <>
            <span className="material-icons text-base">arrow_back</span>Back
          </>
        }
      />

      <Detail
        country={country}
        borderCountries={borderCountries}
        updateCountry={updateCountry}
      />
    </div>
  );
}
