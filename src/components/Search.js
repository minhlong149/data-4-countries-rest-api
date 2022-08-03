const Search = ({ query, updateQuery, updateRegion }) => (
  <div className="flex justify-between flex-wrap gap-4">
    <div className="flex items-center text bg-dark-element text-dark-text p-2 rounded-md ">
      <span class="material-icons pr-2 pl-1 ">search</span>
      <input
        className="bg-transparent focus:outline-none"
        value={query}
        onChange={updateQuery}
        placeholder="Search for a country..."
        type="text"
      />
    </div>

    <select
      className="bg-dark-element text-dark-text focus:outline-none p-2 rounded-md"
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
