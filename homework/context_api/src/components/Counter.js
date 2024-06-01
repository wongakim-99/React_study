import React from "react";

const Counter = (number, onincrease, ondecrease) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onincrease}>+1</button>
        <button onClick={ondecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
