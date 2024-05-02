//특정 값이 업데이트될 때만 실행하고 싶을 때

import React, { useState, useEffect } from "react";

const InfoThree = () => {
  const [name, setName] = useState();
  const [RegisterNum, setRegisterNum] = useState();
  const [address, setAddress] = useState();
  const [id, setId] = useState();
  const [pw, setPw] = useState();

  useEffect(() => {
    console.log(name);
    console.log(RegisterNum);
    console.log(address);
    console.log(id);
    console.log(pw);
  }, [name, RegisterNum, address, id, pw]);
  //props 안에 들어 있는 value 값이 바뀔 때만 특정 작업을 수행한다.
  //이걸 useEffect에서 해야 한다면 useEffect의 두 번째 파라미터로 전달되는 배열안에
  //검사하고 싶은 값을 넣어 주면 된다.

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeRegisterNum = (e) => {
    setRegisterNum(e.target.value);
  };

  const onChagesetAddress = (e) => {
    setAddress(e.target.value);
  };

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  return (
    <div>
      <div>
        <b>이름 : </b>
        <input value={name} onChange={onChangeName} />
        <br />
      </div>
      <div>
        <b>주민번호 : </b>
        <input value={RegisterNum} onChange={onChangeRegisterNum} />
      </div>
      <div>
        <b>주소 : </b>
        <input value={address} onChange={onChagesetAddress} />
      </div>
      <div>
        <b>사용할 ID : </b>
        <input value={id} onChange={onChangeId} />
      </div>
      <div>
        <b>비밀번호 PW : </b>
        <input value={pw} onChange={onChangePw} />
      </div>
    </div>
  );
};

export default InfoThree;
