//뒷 정리하기
/**useEffect는 기본적으로 렌더링되고 난 직후마다 실행되며, 두 번째 파라미터 배열에 무엇을
 * 넣는지에 따라 실행되는 조건이 달라진다.
 *
 * 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect
 * 에서 뒷정리(cleanup) 함수를 반환해 주어야 한다.
 */
import React, { useState, useEffect } from "react";

const InfoFour = () => {
  const [name, setName] = useState();
  const [RegisterNum, setRegisterNum] = useState();
  const [address, setAddress] = useState();
  const [id, setId] = useState();
  const [pw, setPw] = useState();

  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

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

export default InfoFour;
