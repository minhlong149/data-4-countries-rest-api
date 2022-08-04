export function SearchBar({ query, updateQuery, mode }) {
  return (
    <div
      className={`sm:justify-self-start flex items-center bg-${mode}-element shadow p-2 rounded-md`}
    >
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
