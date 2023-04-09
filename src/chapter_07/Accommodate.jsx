import React, { useState, useEffect } from "react";
import useCounter from "./userCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    console.log("========================");
    console.log("useEffect() is called");
    console.log(`isFull : ${isFull}`);
  });
  //의존성 배열[count]가 있음
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value : ${count}`);
  }, [count]);

  return (
    <div style={{ padding: 16 }}>
      <p>{`총 ${count}명 수용했습니다.`}</p>
      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>

      {isFull && <p style={{ color: "red" }}>정원이 가득 찼습니다.</p>}
    </div>
  );
}
export default Accommodate;
