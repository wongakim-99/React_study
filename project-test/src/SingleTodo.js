/**상태에 저장된 개별 todo가 하나씩 해당되는 컴포넌트
 * 깔끔해보였던 아이콘들을 React icons에서 가져와서 사용함.
 * todo 상태의 완료 체크 여부(todo.completed)에 따라 아이콘이 바뀜
 */

import { BsCircle, BsCheckCircle, BsXCircleFill } from "react-icons/bs";

export default function SingleTodo({ todo, handleClick, deleteTodo }) {
  return (
    <li
      className="SingleTodo"
      onClick={(e) => {
        if (e.target.localName !== "path") handleClick(e, todo.id);
      }}
    >
      <div>
        {todo.completed ? <BsCheckCircle /> : <BsCircle />}
        <div style={completed(todo.completed)}>{todo.todo}</div>
      </div>
      <button className="deleteBtn" onClick={() => deleteTodo(todo.id)}>
        {todo.completed ? <BsXCircleFill /> : ""}
      </button>
    </li>
  );
}

function completed(boolean) {
  if (boolean === true) {
    return { TextDecoration: "line-through", color: "#d3d3d3" };
  } else {
    return { TextDecoration: "" };
  }
}
