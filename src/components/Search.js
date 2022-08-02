import React from 'react';

export const Search = ({ query, updateQuery, updateRegion }) => (
  <div>
    <span>find countries: </span>
    <input type="text" value={query} onChange={updateQuery} />

    <select onChange={updateRegion}>
      <option value="">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div>
);
