import React, { useState } from "react";

const Counter3 = () => {
  const [input, setInput] = useState({
    name: "",
    nickname: "",
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const { name, nickname } = input;
  return (
    <div>
      <div>
        <input onChange={onChange} value={name} name="name" />
        <input onChange={onChange} value={nickname} name="nickname" />
      </div>
      <div>
        <div>
          <b>이름 : </b>
          {name}
        </div>
        <div>
          <b>닉네임 : </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Counter3;
