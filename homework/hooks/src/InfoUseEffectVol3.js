//특정 값이 업데이트될 때만 실행하고 싶을 떄

import { useState, useEffect } from "react";

const InfoUseEffectVol3 = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  //useEffect를 사용할 때, 특정 값이 변경될 때만 호출하고 싶은 경우
  //useEffect의 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어주면 된다.
  //Info 컴포넌트의 useEffect 부분을 아래와 같이 수정하면 된다.
  useEffect(() => {
    console.log(name);
  }, [name]);
  /**useEffect훅은 컴포넌트가 렌더링될 때마다 특정 작업을 수행할 수 있게 해준다.
   * name의 상태가 변경될 때마다 console.log(name)을 실행하는 부분을 정의하고 있다.
   * 두 번째 매개변수로 전달된 배열[name]은 name 상태가 변경될 때마다 useEffect 콜백 함수를
   * 호출하도록 지정
   *
   * 여기서 두번째 파라미터로 전달된 [name]은 의존성 배열이라고도 함 이 배열은 해당 부수 효과
   * 함수가 실행되어야 하는 조건을 명시한다.
   * 이 배열에 포함된 값이 변경될 때만 부수 효과 함수가 실행된다.
   * 이 예제에서는 [name] 배열을 전달했으므로 'name'상태가 변경될 때마다 부수효과 함수가 실행
   *
   * *****************부수효과란?*****************
   * 부수효과란 상태를 변경하거나 DOM을 조작하거나 외부 데이터에 접근하는 등의 작업을 의미한다.
   * 이 예제에서는 console.log(name)이라는 간단한 부수효과를 정의했음.
   * 즉 name의 상태가 변경될 때마다 'name'의 현재 값을 콘솔에 출력
   *
   * 즉, 위의 예제는 name 상태가 변경될 때마다 해당 상태의 값을 콘솔에 출력하는 부수효과를
   * 정의하는 것이다. 이렇게 함으로서 name 상태의 변화를 감지하고, 그에 따른 작업을 수행할 수 있다.
   */

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
