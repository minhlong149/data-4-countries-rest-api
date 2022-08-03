const CountryInfo = ({ country }) => {
  return (
    <div className="bg-dark-element text-dark-text rounded-md">
      <img
        className="rounded-t-md"
        src={country.flags.svg}
        alt={country.name.common + " flag"}
        loading="lazy"
      />

      <div className="p-6 ">
        <h2 className="text-xl font-bold pb-2">{country.name.common}</h2>
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

export default CountryInfo;
