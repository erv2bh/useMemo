import { useState, useRef } from 'react'
import FibDisplay from "./FibDisplay";
import Form from "./Form";

function useMemo(calculateValue, dependencies) {
  const memoizedDeps = useRef(null);
  const memoizedValueRef = useRef(null);

  if (!memoizedDeps.current || !isDepsEqual(memoizedDeps.current, dependencies)) {
    memoizedDeps.current = dependencies;
    memoizedValueRef.current = calculateValue();
  }

  return memoizedValueRef.current;
}

function isDepsEqual(oldDependencies, newDependencies) {
  if (oldDependencies === newDependencies) {
    return true;
  }

  for (let i = 0; i < oldDependencies.length; i++) {
    if (oldDependencies[i] !== newDependencies[i]) {
      return false;
    }
  }

  return true;
}

export default function App() {
  const [number, setNumber] = useState(2);
  const [fibonacciNumber, setFibonacciNumber] = useState(0);

  const fib = (n) => {
    console.log("calculating fibonacci..");

    const result = [1, 1];

    for (let i = 2; i < n; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }

    return result;
  };

  const numbers = useMemo(() => fib(fibonacciNumber), [fibonacciNumber]);

  return (
    <>
      <FibDisplay number={fibonacciNumber} sequence={numbers} />
      <Form
        number={number}
        onChange={(value) => setNumber(value)}
        onSubmit={(value) => setFibonacciNumber(value)}
      />
    </>
  );
}
