//CounterUseReducer 과 유사한 방식으로 작업을 처리할 수 있다.

import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    //기존의 상태 객체를 복사하고, 새로운 값을 추가하거나 업데이트 할 수 있다.
    //현재 상태를 복사하고 새로운 키 - 값 쌍을 추가 또는 업데이트
    //
    [action.name]: action.value,
    /**액션 객체에서 받은 'name'과 'value'를 사용하여 새로운 키 - 값 쌍을 추가하거나 업데이트
     * 이렇게 함으로서 'reducer' 함수는 현재 상태를 기반으로 새로운 상태를 생성하게 됨
     */
  };
}

const InfoUseReducer = () => {
  /**바로 아래의 코드는 useReducer 훅을 사용하여 상태와 디스패치 함수를 생성
   * reducer는 앞서 정의된 상태를 업데이트 하는 함수
   * 여기서는 name과 nickname 을 가진 빈 문자열로 초기화된 객체를 초기 상태로 사용
   */
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state; //객체 분해 할당을 사용하여 'state'객체에서 'name' 과 'nickname'필드를
  //추출 -> 이를 통해 각각의 필드에 대한 변수를 선언할 수 있음
  const onChange = (e) => {
    dispatch(e.target);
  };
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
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

export default InfoUseReducer;
