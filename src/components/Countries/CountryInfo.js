import { Info } from "../utils/Info";

export function CountryInfo({ country, updateCountry }) {
  return (
    <div className="bg-dark-element rounded-md">
      <img
        className="rounded-t-md cursor-pointer"
        onClick={() => updateCountry(country)}
        src={country.flags.svg}
        alt={country.name.common + " flag"}
        loading="lazy"
      />

      <div className="p-6">
        <h2 className="text-xl font-bold pb-2">{country.name.common}</h2>
        <Info text="Population" value={country.population.toLocaleString()} />
        <Info text="Region" value={country.region} />
        <Info text="Capital" value={country.capital?.join(", ") || "None"} />
      </div>
    </div>
  );
}