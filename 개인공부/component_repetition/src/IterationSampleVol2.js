/**
 * key 값을 설정할 때는 map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하듯이 설정하면 된다.
 * key 값은 언제나 유일해야 한다. 따라서 데이터가 가진 고유값을 key 값으로 설정해야 한다.
 *
 * 앞서 만들었던 예제 컴포넌에서는 고유 번호가 없다. 이때는 map 함수에 전달되는 콜백 함수의 인수인 index값
 * 을 사용하면 된다.
 */

import React from "react";

const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;

/**고유한 값이 없을 때만 index 값을 key로 사용해야 한다.
 * index 를 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링하지 못한다. */
