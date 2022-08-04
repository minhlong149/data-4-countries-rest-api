import { ComboBox } from "./Search/ComboBox";
import { SearchBar } from "./Search/SearchBar";

export function Search({ query, updateQuery, updateRegion, mode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch gap-4">
      <SearchBar query={query} updateQuery={updateQuery} mode={mode} />
      <ComboBox updateRegion={updateRegion} mode={mode} />
    </div>
  );
}
