import { useState } from "react";
import "./App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  function incValue() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={incValue}>Increase Value</button>
    </>
  );
};
export default Counter;
 