export function Button({ action, value, mode }) {
  return (
    <button
      className={`flex items-center gap-2 ${
        mode ? "bg-dark-element" : "bg-light-element"
      } rounded-md shadow py-2 px-6`}
      onClick={action}
    >
      {value}
    </button>
  );
}
