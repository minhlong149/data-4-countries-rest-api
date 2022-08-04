export function BorderList({ countries, updateCountry, mode }) {
  return (
    <div>
      <span>
        <b>Border Countries:</b>
      </span>{" "}
      {countries?.map((country) => (
        <button
          className={`bg-${mode}-element rounded shadow py-1 px-2 my-1 mr-2`}
          onClick={() => updateCountry(country)}
          key={country.name.common}
        >
          {country.name.common}
        </button>
      )) || "None"}
    </div>
  );
}
