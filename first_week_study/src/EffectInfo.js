import { useState, useEffect } from "react";

const EffectInfo = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  //   useEffect(() => {
  //     console.log("렌더링 완료");
  //     console.log({ name, nickname });
  //   }, [name, nickname]); //마운트 시와 name이 업데이트 될 때만 실행

  useEffect(() => {
    console.log("렌더링 완료");
    console.log({ name });
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  //   useEffect(() => {
  //     console.log("렌더링 완료");
  //     console.log({ name, nickname });
  //   });    //모든 업데이트에 대해서 실행

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input onChange={onChangeName} value={name} />
        <input onChange={onChangeNickname} value={nickname} />
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

export default EffectInfo;
