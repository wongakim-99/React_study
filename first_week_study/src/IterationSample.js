import React, { useState } from "react";

const IterationSampleVol3 = () => {
  const [names, setNames] = useState([
    //객체 상태로 넣음
    { id: 1, text: "윤성희" },
    { id: 2, text: "배동성" },
    { id: 3, text: "박희민" },
    { id: 4, text: "이성주" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextID] = useState(5); //새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, //nextId 값을 id로 설정하고
      text: inputText,
    });
    setNextID(nextId + 1); //nextId 값에 1을 더해 준다.
    setNames(nextNames); //names 값을 업데이트한다.
    setInputText(""); //inputText를 비운다.
  };

  //   const onKeyPress = (e) => {
  //     if (e.key === "Enter") {
  //       onClick();
  //     }
  //   };
  const onForm = (e) => {
    onClick();
    e.preventDefault();
  };

  //   const onRemove = (id) => {
  //     const nextNames = names.filter((name) => name.id !== id);
  //     setNames(nextNames);
  //   };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    //filter 메서드는 names 배열을 순회하면서 각 요소에 대해 주어진 함수를 호출한다
    /**이 함수는 현재 파라미터로 받아 해당 요소의 id가 주어진 id와 같지 않은지 확인
     * filter 메서는는 true를 반환하는 요소만을 새로운 배열에 포함시킨다.
     * 따라서 name.id가 주어진 id와 일치하지 않는 요소만을 포함하는 새로운 배열이 생성.
     * 새로운 배열은 nextNames 변수에 저장되고,
     * 이후 setNames()함수를 사용하여 React 상태를 업데이트
     */
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <form onSubmit={onForm}>
      <input value={inputText} onChange={onChange} placeholder="이름입력" />
      <button type="submit">추가</button>
      <ul>{nameList}</ul>
    </form>
  );
};

export default IterationSampleVol3;
