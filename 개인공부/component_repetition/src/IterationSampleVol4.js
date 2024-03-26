import React, { useState } from "react";

const IterationSampleVol4 = () => {
  const [names, setNames] = useState([
    { id: 1, text: "홍성흔" },
    { id: 2, text: "전준우" },
    { id: 3, text: "강민호" },
    { id: 4, text: "한동희" },
    { id: 5, text: "이대호" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(6);

  const onChange = (e) => {
    console.log(e.target.value); //입력하는 값 콘솔에 출력
    setInputText(e.target.value);
  };

  const onClick = () => {
    alert(`${inputText} : 추가되었습니다!`);
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input
        type="text"
        name="message"
        placeholder="이름 입력"
        value={inputText}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSampleVol4;
