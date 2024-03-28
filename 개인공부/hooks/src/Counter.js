import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;

/**useState함수의 파라미터에는 상태의 기본값을 넣어 준다.
 * 현재 0을 넣었는데 이 의미는 Counter의 기본값 -> 0 으로 설정
 * 그 배열의 첫 번째 원소는 상태 값, 두 번째 원소는 상태를 설정하는 함수
 */
