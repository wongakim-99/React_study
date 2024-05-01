//EventPracticeVol6 이랑 기능은 거의 같음
//다른점은 콘솔창에 로그를 출력해줌

import React, { useState } from "react";

const EventPracticeVol7 = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const value = e.target.value;
    console.log(value);
    setUsername(value);
  };
  const onChangeMessage = (e) => {
    const value = e.target.value;
    console.log(value);
    setMessage(value);
  };
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
      <h1>빡공 고고고고</h1>
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
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPracticeVol7;