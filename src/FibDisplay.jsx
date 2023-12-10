export default function FibDisplay({ number, sequence }) {
  return (
    <p>
      {number} numbers of the fibonacci sequence: {sequence.join(", ")}
    </p>
  );
}
