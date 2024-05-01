/**useState를 여러 번 사용하기
 * 하나의 useState 함수는 하나의 상태 값만 관리가능
 * 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState를 여러 번 사용가능
 *
 * + useEffect 적용
 * 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
 * 클래스형 컴포넌트의 componentDidMount 와 componentDidUpdate를 합친 형태
 *
 * 실습예시 : onChange로 일단 무지성 찍어내보기
 */

import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState();
  const [RegisterNum, setRegisterNum] = useState();
  const [address, setAddress] = useState();
  const [id, setId] = useState();
  const [pw, setPw] = useState();

  useEffect(() => {
    console.log("렌더링 완료");
    console.log({
      name,
      RegisterNum,
      address,
      id,
      pw,
    });
  });

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

export default Info;
