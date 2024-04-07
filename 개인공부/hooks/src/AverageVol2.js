//숫자를 등록할 때뿐만 아니라 인풋 내용이 수정될 때도 우리가 만든
//getAverage함수가 호출되는 것을 확인할 수 있다. 인풋 내용이 바뀔 땐 평균값을
//다시 계산할 필요가 없는데, 이를 렌더링할 때마다 계산하는 것은 낭비다.

//useMemo Hook을 사용하면 이러한 작업을 최적화 할 수 있다.
//렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 원하는 값이
//바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식이다.

import { useState, useMemo } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageVol2 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };
  const avg = useMemo(() => getAverage(list), [list]);
  /**getAverage의 반환값을 avg 변수에 저장하는 데, 이때 'list'배열의 변화에 따라 변경됨
   * 여기서 [list]는 useMemo에 전달된 두 번째 매개변수인 의존성 배열임
   * 이 배열은 해당 값이 변경될 때에만 메모이제이션된 값이 다시 계산되도록 함
   * 즉, list 배열이 변경될 때마다 getAverage(list) 함수를 호출하여 평균값을 계산하고,
   * 그 값을 avg 변수에 저장함. 그리고 렌더링 시에는 list 배열이 변경되지 않으면 이전에 계산된 평균값 반환
   *
   * 이렇게 함으로써 'list' 배열이 변경되지 않는 한 평균값을 다시 계산하지 않고 이전에
   * 계산된 값을 재사용하여 성능을 최적화
   */

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b>
        {avg}
      </div>
    </div>
  );
};

export default AverageVol2;
//이제 list
