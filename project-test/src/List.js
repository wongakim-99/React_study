// import TodoForm from "./TodoForm";
// import SingleTodo from "./SingleTodo";

// export default function List({
//   todos,
//   handleSubmit,
//   handleClickTodo,
//   deleteTodo,
// }) {
//   const handleClick = (e, id) => {
//     handleClickTodo(
//       todos.map((todo) => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed;
//         }
//         return todo;
//       })
//     );
//   };
//   return (
//     <div className="List">
//       <TodoForm handleSubmit={handleSubmit} />
//       <ul className="todo-list">
//         {todos.map((todo) => (
//           <SingleTodo
//             todo={todo}
//             handleClick={handleClick}
//             deleteTodo={deleteTodo}
//             key={todo.id}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

/**List 컴포넌트는 새로운 To-do를 작성하는 부분인 TodoForm과 state에 있는
 * 개별 todo들이 SingleTodo가 되어 map으로 그려지는 두 부분으로 나뉘어 있다.
 */
import TodoForm from "./TodoForm";
import SingleTodo from "./SingleTodo";

function List({ todos, handleSubmit, handleClickTodo, deleteTodo }) {
  /**todos, handleSubmit, handleClickTodo, deleteTodo 4개의 props를 받는다. */
  const handleClick = (e, id) => {
    //e는 클릭 이벤트를 나타내는 객체, id는 클릭된 To-Do항목의 고유 식별자
    handleClickTodo(
      //handleClickTodo함수는 업데이트 된 To-Do항목 목록을 받아서 이를 처리하는 과정 수행
      todos.map((todo) => {
        /**todos.map() 메서드 = 이 메서드는 todos배열의 각 항목에 대해 주어진 함수를 호출하고 그 결과로
         * 새로운 배열을 생성함. 여기서는 각 To-Do항목에 대해 다음을 수행함
         *
         * 1. todo.id === id 인 경우
         * 해당 To-Do항목의 'completed' 속성을 토글(toggle)함. 이는 클릭된 To-Do 항목의 완료 상태를 변경하는 역할
         *
         * 2. 나머지 To-Do 항목은 변경x
         */
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
        //그런 다음, handleClickTodo 함수에 변경된 To-do 목록을 전달하여 업데이트 된 To-Do 목록을 처리하도록 함
      })
      //즉, 위의 함수는 To-Do 항목을 클릭하면 해당 항목의 완료 상태를 토글(toggle)하고, 이를 처리하기 위해
      //handleClickTodo 함수에 업데이트된 To-Do 목록을 전달
    );
  };

  return (
    <div className="List">
      <TodoForm handleSubmit={handleSubmit} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            handleClick={handleClick}
            deleteTodo={deleteTodo}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
