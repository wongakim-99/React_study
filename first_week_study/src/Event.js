// import React, { useState } from "react";

// const Event = () => {
//   const [username, setUsername] = useState("");
//   const [message, setMessage] = useState("");

//   const onChangeUsername = (e) => setUsername(e.target.value);
//   const onChangeMessage = (e) => setMessage(e.target.value);

//   const onClick = () => {
//     alert(username + ":" + message);
//     setUsername("");
//     setMessage("");
//   };

//   const onKeyPress = (e) => {
//     if (e.key === "Enter") {
//       onClick();
//     }
//   };
//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       <h1>이벤트 연습</h1>
//       <input
//         type="text"
//         name="username"
//         placeholder="사용자명"
//         style={{ width: "150px" }}
//         onChange={() => onChangeUsername}
//       />
//       <input
//         type="text"
//         name="message"
//         placeholder="아무거나 입력ㄱㄱ"
//         style={{ width: "150px" }}
//         onChange={() => onChangeMessage}
//         onKeyPress={onKeyPress}
//       />
//       <button style={{ width: "150px" }} onClick={onClick}>
//         확인
//       </button>
//     </div>
//   );
// };

// export default Event;

// 업그레이드 버전

import React, { useState } from "react";

const Event = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;

  const onChange = (e) => {
    console.log(e.target.value);
    const nextForm = {
      ...form,
      [e.target.getAttribute("gawon")]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ":" + message);
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
        gawon="username"
        placeholder="사용자명"
        value={username}
        style={{ width: "150px" }}
        onChange={onChange}
      />
      <input
        type="text"
        gawon="message"
        placeholder="아무거나 입력ㄱㄱ"
        value={message}
        style={{ width: "150px" }}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button style={{ width: "150px" }} onClick={onClick}>
        확인
      </button>
    </div>
  );
};

export default Event;
