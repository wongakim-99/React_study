import React, { useReducer } from "react";

//reducer 함수 : 'reducer'함수는 현재 상태(state)와 액션(action)을 받아들여서 새로운 상태를 반환
//switch문을 사용하여 액션 타입에 따라 다른 작업을 수행하도록 구현
function reducer(state, action) {
  //action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  /**
   * useReduver의 첫 번째 파라미터에는 리듀서 함수를 넣고, 두 번째 파라미터에는 해당 리듀서의 기본값을 넣음
   * 이 Hook을 사용하면 state값과 dispatch 함수를 받아옴. 여기서 state는 현재 가리키고 있는 상태고,
   * dispatch는 액션을 발생시키는 함수. dispatch(action)과 같은 형태로, 함수 안에 파라미터로 액션 값을 넣어 주면
   * 리듀서 함수가 호출되는 구조
   */

  return (
    <div>
      <p>{state.value}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default CounterReducer;

/**이 코드에서 dispatch함수는 리듀서(reducer)에게 액션(action)을 보내는 역할을 한다.
 * 리듀서는 이 액션을 기반으로 상태를 어떻게 변경할지 결정함. 간단하게 설명하면 'dispatch'는 리듀서에게
 * 이렇게 해야 한다고 알려주는 메시지라고 할 수 있음.
 *
 * 요약하면 dispatch는 상태를 변경하기 위한 명령을 내리는 역할을 함 -> 이를 통해 상태 관리를 간편하게 할 수 있다.
 */
