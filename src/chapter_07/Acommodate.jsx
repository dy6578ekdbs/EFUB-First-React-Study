import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    console.log("========================");
    console.log("useEffect() is called.");
    console.log(`isFull: ${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  }, [count]);

  return (
    <div style={{ padding: 16 }}>
      <p>{`Total ${count} accommodated.`}</p>
      <button onClick={increaseCount} disabled={isFull}>
        enter
      </button>
      <button onClick={decreaseCount}>leave</button>
      {isFull && <p style={{ color: "red" }}>Full of people.</p>}
    </div>
  );
}

export default Accommodate;
