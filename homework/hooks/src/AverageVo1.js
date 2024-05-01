import React, { useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0; //입려된 배열numbers가 비어있는지 확인 -> 만약 비어있다면
  //즉, 배열에 요소가 없다면 평균값을 구할 수 없으므로 0을 반환
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
/**getAverage함수는 입력된 숫자 배열의 평균값을 계산하는 함수로, 배열이 비어있는 경우에는0을 반환
 * 그렇지 않은 경우에는 배열의 요소들을 합산하여 평균값을 계산하여 반환
 */
const AverageVol1 = () => {
  const [list, setList] = useState([]);
  /**이 코드는 React의 useState 훅을 사용하여 컴포넌트의 상태를 관리한다. 여기서 list는 입력된
   * 숫자들을 담는 배열이고 setList는 list의 값을 업데이트 하는 함수이다.
   * 초기값으로 빈 배열을 전달하여 list를 초기화한다.
   */
  const [number, setNumber] = useState("");
  /**setNumber은 number은 현재 입력된 숫자를 나타내는 상태이고
   * setNumber은 number을 업데이트 하는 함수 -> 초기값으로 빈 문자열을 전달하여 number을 초기화 한다.
   */

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };
  /**'등록' 버튼이 클릭될 때 호출되는 이벤트 핸들러. 이 함수는 list 배열에 현재 입력된 숫자를 추가하고
   * setList를 호출하여 list 상태를 업데이트한다. 추가된 후에는 입력 필드를 초기화하기 위해
   * setNumber를 호출하여 number 상태를 빈 문자열로 업데이트함
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
        <b>평균값 : </b>
        {getAverage(list)}
      </div>
    </div>
  );
};

export default AverageVol1;
