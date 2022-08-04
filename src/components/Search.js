import { ComboBox } from "./Search/ComboBox";
import { SearchBar } from "./Search/SearchBar";

function Search({ query, updateQuery, updateRegion }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch gap-4">
      <SearchBar query={query} updateQuery={updateQuery} />
      <ComboBox updateRegion={updateRegion} />
    </div>
  );
}

export default Search;
