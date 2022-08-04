export function SearchBar({ query, updateQuery }) {
  return (
    <div className="sm:justify-self-start flex items-center bg-dark-element p-2 rounded-md ">
      <span className="material-icons pr-2 pl-1 ">search</span>
      <input
        className="bg-transparent focus:outline-none"
        value={query}
        onChange={updateQuery}
        placeholder="Search for a country..."
        type="text"
      />
    </div>
  );
}
