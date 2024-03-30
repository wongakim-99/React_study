import { useState, useEffect } from "react";

const InfoUseEffectVol3 = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log(name);
  }, [name]);
  //특정 값이 변경될 때만 호출하고 싶은 경우
  //두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어주면 된다.

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름 :</b>
          {name}
        </div>
        <div>
          <b>닉네임 :</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default InfoUseEffectVol3;
