/**useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는
 * Hook이다. 클래스형 컴포넌트의 componentDidMount 와 componentDidUpdate를 합친 형태로 보아도 무방하다.
 */

/**코드 */

import { useState, useEffect } from "react";

const InfoUseEffectVol1 = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  /**
   * useEffect 훅은 함수형 컴포넌트에서 부수 효과(side effect)를 수행할 수 있도록 해주는 훅이다.
   * 부수효과란 주로 데이터 가져오기, 구독설정, DOM조작 등의 작업을 말한다.
   * useEffect 훅은 컴포넌트가 렌더링 될때마다 실행되며, 두 번째 매개변수로 전달된 의존성 배열에
   * 변화가 있을 때에도 실행될 수 있다.
   * 의존성 배열이 없으면 컴포넌트가 렌더링될때마다 항상 실행된다.
   *
   * (참고로 의존성 배열이란 useEffect훅의 두 번째 매개변수로 전달되는 배열을 가리킨다. 이 배열에는
   * useEffect 안에서 사용되는 상태나 props가 포함된다.
   * 이 배열을 사용하여 'useEffect'안의 함수가 실행되는 조건을 설정할 수 있다. 만약 이 배열이 비어 있다면
   * useEffect 안의 함수는 컴포넌트가 렌더링 될 때마다 실행된다.)
   */
  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log({
      name,
      nickname,
    });
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

export default InfoUseEffectVol1;
