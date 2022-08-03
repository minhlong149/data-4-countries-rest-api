const CountryInfo = ({ country }) => {
  return (
    <div className="bg-dark-element text-dark-text rounded-lg my-4 w-1/4 ">
      <img
        className="rounded-t-lg"
        src={country.flags.svg}
        alt={country.name.common + " flag"}
      />

      <div className="p-6 ">
        <h2 className="text-lg font-bold ">{country.name.common}</h2>
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
