import React from 'react';

export const Search = ({ query, updateQuery }) => (
  <div>
    <span>find countries: </span>
    <input type="text" value={query} onChange={updateQuery} />
  </div>
);
