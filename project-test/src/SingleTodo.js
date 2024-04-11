/**상태에 저장된 개별 todo가 하나씩 해당되는 컴포넌트
 * 깔끔해보였던 아이콘들을 React icons에서 가져와서 사용함.
 * todo 상태의 완료 체크 여부(todo.completed)에 따라 아이콘이 바뀜
 */

import { BsCircle, BsCheckCircle, BsXCircleFill } from "react-icons/bs";
//위에는 ReactIcons라이브러리에서 'BsCircle, BsCheckCircle', 'BsXCircleFill'아이콘임
//각각 할 일의 미완료 상태, 완료 상태, 삭제를 나타냄

export default function SingleTodo({ todo, handleClick, deleteTodo }) {
  //SingleTodo라는 함수형 컴포넌트를 정의
  //이 컴포넌트는 'todo', 'handleClick', 'deleteTodo' props를 받는다.
  return (
    <li
      className="SingleTodo" //<li>요소의 클래스명을 SingleTodo로 지정
      onClick={(e) => {
        //해당 요소가 클릭되었을 때 실행할 함수를 정의
        if (e.target.localName !== "path") handleClick(e, todo.id);
        //클릭된 요소의 태그 이름이'path'가 아닌 경우를 확인한다.
        //여기서 'path'는 SVG요소 내에서 클릭된 부분을 나타내는 태그이다.

        /**handleClick(e, todo.id) -->  만약 클릭된 요소의 태그 이름이 'path'가 아니라면
         * handleClick 함수를 호출한다. 이 함수는 두 개의 인자를 받는다. 첫 번째는 이벤트 객체 e이며, 두 번째는 클릭된 할 일  todo 의
         * ID이다.
         */
      }}
      /**SVG아이콘 내의 경로가 클릭되었을 때는 토글 함수를 호출하지 않도록 하는 것
       * 왜냐하면 아이콘 내의 경로를 클릭했을 때에도 토글 동작이 발생하지 않도록 하기 위함인 것임.
       * 따라서 이벤트가 아이콘 내부의 경로로부터 발생했는지 여부를 확인하여 동작을 제어하고 있음
       */
    >
      <div>
        {todo.completed ? <BsCheckCircle /> : <BsCircle />}{" "}
        {/**todo.completed가 참이면 완료된 상태를 나타냄 */}
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
