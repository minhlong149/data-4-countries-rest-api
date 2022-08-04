import { Info } from "../utils/Info";

export function DetailInfo({ country }) {
  const officialNativeName = Object.values(country.name.nativeName).map(
    (name) => name.official
  );

  const currenciesName = Object.values(country.currencies).map(
    (currency) => currency.name
  );

  const languages = Object.values(country.languages);

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <article>
        <Info text="Native Name" value={officialNativeName.join(", ")} />
        <Info text="Population" value={country.population.toLocaleString()} />
        <Info text="Region" value={country.region} />
        <Info text="Sub Region" value={country.subregion} />
        <Info text="Capital" value={country.capital?.join(", ") || "None"} />
      </article>

      <article>
        <Info
          text="Top-level Domain"
          value={country.tld?.join(", ") || "None"}
        />
        <Info text="Currencies" value={currenciesName.join(", ")} />
        <Info text="Languages" value={languages.join(", ")} />
      </article>
    </article>
  );
}
