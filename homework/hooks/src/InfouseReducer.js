//useReducer를 사용하여 인풋상태 관리하기

/**useReducer를 사용하여 Info 컴포넌트에서 인풋 상태를 관리해 보겠다.
 * 기존에는 인풋이 여러 개여서 useState를 여러 번 사용했다.
 * useReducer를 사용하면 클래스형 컴포넌트에서 input태그에 name값을 할당하고 e.target.name을 참조하여
 * useState를 해 준 것과 유사한 방식으로 작업을 처리할 수 있다.
 */

import React, { useReducer, useEffect } from "react";

function reducer(state, action) {
  //현재 상태와 액션을 받아서 새로운 상태를 반환하는 함수.
  //전달된 액션의 name과 value를 사용하여 상태를 업데이트 하는 중
  //action은 상태를 업데이트하는 데 사용되는 정보를 포함하는 객체
  //action객체는 일반적으로 'type'속성을 포함하지만, 이 경우는 'name' 과 'value' 속성을 사용함
  //리듀서 함수는 전달된 액션 객체의 'name' 속성을 사용하여 해당하는 상태를 업데이트
  return {
    ...state /**새로운 상태를 반환하기 위해 먼저 현재 상태를 복사. 이때 전개 연산자('...')을 사용하여
    객체의 얕은 복사를 수행 */,
    [action.name]: action.value,
    /**그런 다음 액션 객체의 'name' 속성을 새로운 값으로 업데이트하여 새로운 상태를 생성
     * 이를 위해 계산된 속성 이름(computed property name)을 사용
     */
  };
}

const InfouseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "", //이름
    nickname: "", //닉네임
    address: "", //주소
    birth_date: "", //생년월일
    address_id: "", //주민번호 뒷자리
  });
  const { name, nickname, address, birth_date, address_id } = state;
  const onChange = (e) => {
    //console.log(e.target.value);
    const { name, value } = e.target;
    dispatch({ name, value });
  };

  useEffect(() => {
    console.log(name);
    console.log(nickname);
    console.log(address);
    console.log(birth_date);
    console.log(address_id);
  }, [name, nickname, address, birth_date, address_id]);

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <br />
        <input name="nickname" value={nickname} onChange={onChange} />
        <br />
        <input name="address" value={address} onChange={onChange} />
        <br />
        <input name="birth_date" value={birth_date} onChange={onChange} />
        <br />
        <input name="address_id" value={address_id} onChange={onChange} />
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
        <div>
          <b>주소:</b>
          {address}
        </div>
        <div>
          <b>생년월일:</b>
          {birth_date}
        </div>
        <div>
          <b>주민번호 뒷자리:</b>
          {address_id}
        </div>
      </div>
    </div>
  );
};

export default InfouseReducer;

/**dispatch는 리듀서 함수에게 상태를 업데이트하라는 명령을 보내는 역할
 * 일반적으로 React애플리케이션에서 상태를 변경하기 위해서는 setState를 사용
 * useReducer훅을 사용하여 상태를 관리하고 있기 때문에 dispatch 함수를 사용하여
 * 상태를 변경함
 *
 *  dispatch 함수는 액션(action)객체를 인자로 받고, 이 액션 객체는 상태를 변경하는 데
 * 사용됨
 */
