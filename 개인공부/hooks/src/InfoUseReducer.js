//useMemo를 사용하면 함수 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있다.
//먼저 리스트에 숫자를 추가하면 추가된 숫자들의 평균을 보여주는 함수 컴포넌트 작성

import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const InfoUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
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
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default InfoUseReducer;
