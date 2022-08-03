const Search = ({ query, updateQuery, updateRegion }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
    <div className="justify-self-stretch sm:justify-self-start flex items-center text bg-dark-element text-dark-text p-2 rounded-md ">
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
      className="justify-self-stretch sm:justify-self-end bg-dark-element text-dark-text focus:outline-none p-2 rounded-md"
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
