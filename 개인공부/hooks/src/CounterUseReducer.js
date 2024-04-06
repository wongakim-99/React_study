/**useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로
 * 업데이트해 주곳 싶을 때 사용하는 Hook이다.
 *
 * 리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은(action)값을 전달받아 새로운 상태를 반환하는 함수
 * 리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜 주어야 한다.
 */

/**
 *
 * function reducer(state, action) {
 *  return {...}; //불변성을 지키면서 업데이트한 새로운 상태를 반환
 * }
 *
 * {
 *  type : 'INCREMENT',
 *  //다른 값들이 필요하면 추가로 들어감
 * }
 *
 * 뒤에서 배울 리덕스에서 사용하는 액션 객체에는 어떤 액션인지 알려주는 type 필드가 꼭 있어야 하지만,
 * useReducer에서 사용하는 액션 객체는 반드시 type을 지니고 있을 필요가x
 *
 * 심지어 객체가 아니라 문자열이나 숫자여도 상관x
 */

import React, { useReducer } from "react";

/**reducer 함수 -> 이 함수는 현재 상태 state와 action을 받아서 다음 상태를 반환한다.
 * action.type에 따라 다른 작업을 수행한다.
 * 아래의 예제에서는 INCREMENT 액션과 DECREMENT 액션을 처리하여 상태의 value 값을 증가 또는 감소시킴
 * 기본적으로는 이전 상태를 그대로 반환
 */
function reducer(state, action) {
  //action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      //아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  //useReducer 훅을 사용하여 상태(state)와 상태를 업데이트하기 위한 디스패치(dispatch)함수를 생성
  //state : 현재의 상태를 나타냄. 여기서는 카운터의 값을 포함하는 객체로 구성됨
  //dispatch : 상태를 변경하기 위한 액션을 발생시키는 함수
  //->dispatch 함수를 호출하면 리듀서 함수에게 해당 액션을 전달하여 상태를 업데이트함
  //이 예제에서는 dispatch 함수를 사용하여 'INCREMENT' 또는 'DECREMENT' 액션을 발생시킴

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default CounterUseReducer;

//useReducer 함수 사용의 장점 -> 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 것
