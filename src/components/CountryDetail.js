import { Info } from "./Info";

export default function CountryDetail({ country, updateCountry, countries }) {
  const officialNativeName = Object.values(country.name.nativeName).map(
    (name) => name.official
  );

  const currenciesName = Object.values(country.currencies).map(
    (currency) => currency.name
  );

  const borderCountries = country.borders?.map((code) =>
    countries.find((country) => country.cca3 === code)
  );

  const languages = Object.entries(country.languages).map((c) => c[1]);
  return (
    <div className="text-dark-text p-12">
      <Button updateCountry={updateCountry} country={undefined} />

      <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-x-12 gap-y-6">
        <img
          className="rounded-md"
          src={country.flags.svg}
          alt={country.name.common + " flag"}
        />

        <div>
          <h1 className="text-2xl font-bold ">{country.name.common}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div>
              <Info text="Native Name" value={officialNativeName.join(", ")} />
              <Info
                text="Population"
                value={country.population.toLocaleString()}
              />
              <Info text="Region" value={country.region} />
              <Info text="Sub Region" value={country.subregion} />
              <Info
                text="Capital"
                value={country.capital?.join(", ") || "None"}
              />
            </div>

            <div>
              <Info
                text="Top-level Domain"
                value={country.tld?.join(", ") || "None"}
              />
              <Info text="Currencies" value={currenciesName.join(", ")} />
              <Info text="Languages" value={languages.join(", ")} />
            </div>
          </div>

          <div className="">
            <span>
              <b>Border Countries:</b>
            </span>{" "}
            {borderCountries?.map((country) => (
              <button
                className="bg-dark-element rounded py-1 px-2 my-1 mr-2"
                onClick={() => updateCountry(country)}
                key={country.name.common}
              >
                {country.name.common}
              </button>
            )) || "None"}
          </div>
        </div>
      </div>
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
