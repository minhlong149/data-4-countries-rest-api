import { BorderList } from "./BorderList";
import { DetailInfo } from "./DetailInfo";

export function Detail({ country, borderCountries, updateCountry }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-x-12 gap-y-6">
      <img
        className="rounded-md"
        src={country.flags.svg}
        alt={country.name.common + " flag"}
      />

      <div>
        <h1 className="text-2xl font-bold">{country.name.common}</h1>
        <DetailInfo country={country} />
        <BorderList countries={borderCountries} updateCountry={updateCountry} />
      </div>
    </div>
  );
}
