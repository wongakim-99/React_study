import React, { useState, useEffect } from "react";

const InfoTwo = () => {
  const [name, setName] = useState();
  const [RegisterNum, setRegisterNum] = useState();
  const [address, setAddress] = useState();
  const [id, setId] = useState();
  const [pw, setPw] = useState();

  useEffect(() => {
    console.log("마운트될 때만 실행됩니다.");
  }, []);
  //만약 마운트될 때만 실행하고 싶다면
  /*useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고,
  업데이트될 때는 실행하지 않으려면 함수의 두 번째 파라미터로 비어 있는 배열을 넣어 주면 된다.*/

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

export default InfoTwo;

/*리액트에서 useEffect 훅을 사용할 때 특정 코드 블록이 컴포넌트가 마운트될 때에만 실행되도록 하는 이유?
1. 초기화 : 컴포넌트가 처음으로 렌더링되었을 때 필요한 초기화 코드를 실행해야 할 때가 있다.
예를들어, 컴포넌트가 처음으로 렌더링될 때만 데이터를 가져오거나, 초기 상태를 설정해야 할 때가 있다.

2. 불필요한 실행 방지 : 만약 'useEffect'에 의해 실행되는 코드가 렌더링과는 무관하게 일정한 상태를 유지해야
할 때가 있다. 이 경우 컴포넌트가 리렌더링될 때마다 해당 코드를 실행하지 않도록 해야 한다.

+ 마운트란 컴포넌트가 웹 페이지에 추가될 때를 가리킨다. 예를 들어, 사용자가 새로운 페이지를 로드하거나,
어떤 이벤트에 의해 컴포넌트가 보여질 때를 의미한다.
때때로, 우리는 컴포넌트가 이렇게 추가될 때만 특정 작업을 수행하고 싶을 수 있다. 이 때 'useEffect'의 두 번째
매개변수로 빈 배열 [] 을 전달하면, 해당 'useEffect' 코드 블록은 컴포넌트가 마운트될 때만 실행된다.
*/
