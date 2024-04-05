// 뒷정리하기
// useEffect는 기본적으로 렌더링되고 난 직후마다, 두 번째 파라미터 배열에 뭘 넣는지에 따라 실행되는 조건이 다름
// 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면
// useEffect에서 뒷정리(cleanup) 함수를 반환해 주어야 한다.

import { useState, useEffect } from "react";

const InfoUseEffectVol4 = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup"); //뒷정리 함수는 useEffect훅에서 반환되는 함수를 얘기함
      /**이 함수는 useEffect 내에서 설정한 효과(effect)이후에 컴포넌트가 언마운트되기 전에 실행
       * 뒷정리 함수를 사용하면 리소스 누수(resource leaks)효과를 방지함
       */
      /**
       * 위의 코드에서는 console.log('clenaup')이라는 뒷정리 함수를 설정하여,
       * 컴포넌트가 언마운트되기 전에 'cleanup' 이라는 메시지가 출력되도록 했음
       * 이는 컴포넌트가 소멸되기 전에 실행되는 작업을 수행할 수 있게 해줌
       *
       * 즉, useEffect 훅에서 반환된 함수는 해당효과(effect)이후에 실행되는 뒷정리
       * clean-up작업을 수행하는 역할을 함
       */
    };
  });
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

export default InfoUseEffectVol4;
