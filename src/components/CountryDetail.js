export default function CountryDetail({ viewDetail, updateView }) {
  return (
    <div>
      <p>{viewDetail.name.common}</p>
      <button onClick={() => updateView(undefined)}>Go Back</button>;
    </div>
  );
}
