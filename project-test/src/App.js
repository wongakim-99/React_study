import "./App.css";
import List from "./List";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const initialTodos = [
  // {
  //   id: uuid(),
  //   todo: "리액트 공부하기",
  //   completed: false,
  // },
  // {
  //   id: uuid(),
  //   todo: "블로그 쓰기",
  //   completed: false,
  // },
];

function App() {
  const [todos, setTodo] = useState(initialTodos);

  const handleSubmit = (newTodo) => {
    const todo = {
      id: uuid(),
      todo: newTodo,
      completed: false,
    };
    setTodo((prevState) => [...prevState, todo]);
  };
  const deleteTodo = (id) => {
    setTodo((prevState) => prevState.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <h1 id="heading">to-do-list</h1>
      <List
        todos={todos}
        handleSubmit={handleSubmit}
        handleClickTodo={setTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
