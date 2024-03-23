//우리가 했던 작업을 함수 컴포넌트로 구현해 보기
//그동안 클래스형 컴포넌트로 구현 했다면 이번에는 함수 컴포넌트를 사용해서 구현
//아래의 코드에서는 e.target.name 을 활용하지 않고 onChange관련 함수 두 개를 따로 만들어 주었음
//인풋이 두 개밖에 없다면 이런 코드는 나쁘지는 않다. 하지만 인풋의 개수가 많아질 것 같으면 e.target.value
//을 활용하는 것이 더 좋을 수도 있다.

import React, { useState } from "react";

const EventPracticeVol6 = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + " : " + message);
    setUsername("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력ㄱㄱ"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>Confirm</button>
    </div>
  );
};

export default EventPracticeVol6;
