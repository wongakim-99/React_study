import React from "react";
import useInput from "../hooks/useInput";

const InfoCustomHooks = () => {
  const [state, onChange] = useInput({ name: "", nickname: "" });
  const { name, nickname } = state;

  return (
    <>
      <div>
        <input value={name} onChange={onChange} name="name" />
        <input value={nickname} onChange={onChange} name="nickname" />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </>
  );
};

export default InfoCustomHooks;
