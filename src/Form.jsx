export default function Form({ number, onChange, onSubmit }) {
  return (
    <>
      <input
        value={number}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <button onClick={() => onSubmit(number)}>Submit</button>
    </>
  );
}
