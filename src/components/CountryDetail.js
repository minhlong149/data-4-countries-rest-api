export default function CountryDetail({ country, updateCountry, countries }) {
  const officialNativeName = Object.entries(country.name.nativeName).map(
    (c) => c[1].official
  );

  const currenciesName = Object.entries(country.currencies).map(
    (c) => c[1].name
  );

  const borderCountries = country.borders.map((code) =>
    countries.find((country) => country.cca3 === code)
  );

  const languages = Object.entries(country.languages).map((c) => c[1]);
  return (
    <div className="text-dark-text p-12">
      <button
        className="flex items-center gap-2 bg-dark-element rounded-md py-2 px-6 mb-8"
        onClick={() => updateCountry(undefined)}
      >
        <span className="material-icons text-base">arrow_back</span>Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-12 gap-y-6">
        <img
          className="rounded-md"
          src={country.flags.svg}
          alt={country.name.common + " flag"}
        />

        <div className="">
          <h1 className="text-2xl font-bold pb-4">{country.name.common}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>
                <b>Native Name:</b> {officialNativeName.join(", ")}
              </p>
              <p>
                <b>Population:</b> {country.population.toLocaleString()}{" "}
              </p>
              <p>
                <b>Region:</b> {country.region}
              </p>
              <p>
                <b>Sub Region:</b> {country.subregion}
              </p>
              <p>
                <b>Capital:</b> {country.capital?.join(", ") || "None"}{" "}
              </p>
            </div>

            <div>
              <p>
                <b>Top-level domain:</b> {country.tld?.join(", ") || "None"}
              </p>
              <p>
                <b>Currencies:</b> {currenciesName.join(", ")}
              </p>
              <p>
                <b>Languages:</b> {languages.join(", ")}
              </p>
            </div>

            <div className="md:col-span-full md:mt-2">
              <span>
                <b>Border country:</b>
              </span>{" "}
              {borderCountries.map((country) => (
                <button
                  className="bg-dark-element rounded py-1 px-2 my-1 mr-2"
                  onClick={() => updateCountry(country)}
                  key={country.name.common}
                >
                  {country.name.common}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
