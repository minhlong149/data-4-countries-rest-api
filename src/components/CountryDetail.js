import { Detail } from "./Detail";

export default function CountryDetail({ country, updateCountry, countries }) {
  const borderCountries = country.borders?.map((code) =>
    countries.find((country) => country.cca3 === code)
  );

  return (
    <div className="text-lg md:text-base p-12">
      <Button updateCountry={updateCountry} country={undefined} />

      <Detail
        country={country}
        borderCountries={borderCountries}
        updateCountry={updateCountry}
      />
    </div>
  );
}

function Button({ updateCountry, country }) {
  return (
    <button
      className="flex items-center gap-2 bg-dark-element rounded-md py-2 px-6 mb-8"
      onClick={() => updateCountry(country)}
    >
      <span className="material-icons text-base">arrow_back</span>Back
    </button>
  );
}
