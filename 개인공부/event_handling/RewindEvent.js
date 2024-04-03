// 24/04/02 이벤트 핸들링 스터디 기록

import React, { useState } from "react";

const RewindEvent = () => {
  const [form, setForm] = useState({
    username: "", //props
    message: "",
  });
  //useState를 사용하여 상태를 초기화
  //이 상태는 form 이라는 이름의 변수에 할당됨

  const { username, message } = form;
  //이후에는 form 객체를 비구조화하여 그 안의 username과 message 속성을
  //username과 message 변수에 할당합니다.

  //결국 form 상태를 만들어서 useState로 초기화함.
  //이 상태는 username과 message라는 두 개의 속성을 갖는 객체
  //그러고 나서 form 객체의 속성인 username과 message를 각각
  //username과 message 변수에 할당함
  const onChange = (e) => {
    console.log(e.target.value);
    const nextForm = {
      ...form, //form 객체를 불러옴
      [e.tareget.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + " : " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="이름 입력"
        value={username}
        style={{ width: "150px" }}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력ㄱㄱ"
        value={message}
        style={{ width: "150px" }}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button style={{ width: "150px" }} onClick={onClick}>
        confirm
      </button>
    </div>
  );
};

export default RewindEvent;
