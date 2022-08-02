export const CountryInfo = ({ country }) => {
  return (
    <div>
      <img
        src={country.flags.svg}
        alt={country.name.common + " flag"}
        width="200px"
      />
      <div>
        <h2>{country.name.common}</h2>
        <p>
          <b>Population:</b> {country.population.toLocaleString()}{" "}
        </p>
        <p>
          <b>Region:</b> {country.region}{" "}
        </p>
        <p>
          <b>Capital:</b> {country.capital?.join(", ") || "None"}{" "}
        </p>
      </div>
    </div>
  );
};
