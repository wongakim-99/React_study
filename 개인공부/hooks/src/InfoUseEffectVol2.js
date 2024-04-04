// 마운트될 때만 실행하고 싶을 때

// useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고, 업데이트될 때는 실행하지
// 않으려면 함수의 두 번째 파라미터로 비어 있는 배열을 넣어 주면 된다.
// useEffect 코드를 다음과 같이 변경 해보자.

import { useState, useEffect } from "react";

const InfoUseEffectVol2 = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  /**useEffect에서 두 번째 파라미터로 의존성 배열을 전달해줬다.
   * 빈 배열을 의존성 배열로 사용하면 'useEffect'의 콜백 함수가 컴포넌트가 마운트될때 한 번만
   * 실행되며, 이후에는 다시 실행되지 않는다. 따라서 '마운트될 때만 실행됩니다' 메시지는
   * 컴포넌트가 처음으로 렌더링되어 DOM에 삽입될 때만 콘솔에 출력된다.
   *
   * 의존성 배열이 비어있기 때문에 useEffect안의 콜백 함수는 컴포넌트가 마운트 될 때만 실행되고,
   * 그 이후에는 상태나 props의 변경 여부와 상관없이 다시 실행되지 않는다.
   */
  useEffect(() => {
    console.log("마운트될 때만 실행됩니다.");
  }, []);

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

export default InfoUseEffectVol2;
