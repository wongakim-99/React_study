/**새로운 to-do를 작성하는 부분.
 * e.target 의 [0]번째는 <input>이며, 이 <input>의 value를 찝어다가 조상님으로부터 전해받은
 * props인 handleSubmit에 전달해준다.
 */

export default function TodoForm({ handleSubmit }) {
  const addNewTodo = (e, newTodo) => {
    e.preventDefault();
    handleSubmit(newTodo);
    e.target[0].value = "";
  };
  //한 번 to-do를 작성한 다음 input칸을 깨끗이 비워줘야 됨
  return (
    <form
      className="TodoForm"
      onSubmit={(e) => addNewTodo(e, e.target[0].value)}
    >
      <input type="text" />
      <button type="submit">추가</button>
    </form>
  );
}
