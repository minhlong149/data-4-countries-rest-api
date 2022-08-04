export function Button({ action, value }) {
  return (
    <button
      className="flex items-center gap-2 bg-dark-element rounded-md py-2 px-6"
      onClick={action}
    >
      {value}
    </button>
  );
}
