export function ComboBox({ updateRegion, mode }) {
  return (
    <select
      className={`sm:justify-self-end focus:outline-none ${
        mode ? "bg-dark-element" : "bg-light-element"
      } shadow p-2 rounded-md`}
      onChange={updateRegion}
    >
      <option value="">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
