import React from 'react';


export const Country = ({ country }) => (
  <div>
    <h1>{country.name.common}</h1>

    <p>
      capital:{" "}
      {country.hasOwnProperty("capital") ? country.capital.join(", ") : "none"}
    </p>
    <p>area: {country.area}</p>

    <h3>languages:</h3>
    <ul>
      {Object.entries(country.languages).map(([key, value]) => (
        <li key={key}>{value}</li>
      ))}
    </ul>

    <img
      src={country.flags.svg}
      alt={country.name.common + " flag"}
      width="200px"
    />
  </div>
);
