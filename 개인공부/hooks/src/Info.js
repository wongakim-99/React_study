//useState 여러 번 사용하기
//하나의 useState 함수는 하나의 상태 값만 관리가능. 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState를
//여러 번 사용하면 된다.

import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  /**비구조화 할당 문법을 통해 첫 번째 요소는 name 두번째 요소는 해당 상태 값을 업데이트 해주는 setName이라는
   * 변수에 할당하고 있음
   *
   * 배열의 첫번째 요소를 name이라는 이름의 변수에 할당하고, 두 번째 변수를 setName이라는 상태를 업데이트 해주는
   * 이름의 변수에 할당
   */
  const [nickname, setNickname] = useState(""); //마찬가지 논리

  //onChangeName 함수는 name의 상태를 업데이트 하는 함수
  //이 함수는 아래의 <input>요소의 onChange 이벤트 핸들러로 연결되어 있어 사용자의 입력을 감지하고
  //상태를 업데이트함
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  //onChangeNickname 함수는 nickname의 상태를 업데이트 하는 함수
  //이 함수도 마찬가지로 아래의 <input>요소의 onChange 이벤트 핸들러로 연결되어 있어 사용자의 입력을 감지하고
  //상태를 업데이트
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

export default Info;

/**하나의 useState함수는 하나의 상태 값만 관리 가능. 컴포넌트에서 관리해야 할 상태가 여러 개라면
 * useState를 여러 번 사용하면 된다.
 *
 * 이 코드를 통해 React의 useState훅을 여러 번 사용하여 여러 개의 상태 값을 관리하는 방법을 이해할 수 있다.
 */
