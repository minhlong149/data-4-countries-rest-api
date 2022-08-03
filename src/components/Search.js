const Search = ({ query, updateQuery, updateRegion }) => (
  <div className="flex justify-between ">
    <div className="flex items-center text bg-dark-element text-dark-text p-2 rounded-lg ">
      <span class="material-icons px-4 ">search</span>
      <input
        className="bg-transparent focus:outline-none"
        value={query}
        onChange={updateQuery}
        placeholder="Search for a country"
        type="text"
      />
    </div>

    <select
      className="bg-dark-element text-dark-text focus:outline-none pl-2 rounded-lg"
      onChange={updateRegion}
    >
      <option value="">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div>
);

export default Search;
