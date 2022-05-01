import React from "react";
import "./App.css";
import ListDisplay from "./components/ListDisplay";
import ListInput from "./components/ListInput";
import ListProvider from "./store/ListProvider";

function App() {
  // const [todos, setTodos] = useState([]);

  // const addTodoHandler = (todo) => {
  //   setTodos([...todos, todo]);
  // };

  return (
    <ListProvider>
      <header>
        <h1>Welcome ToDos App</h1>
      </header>
      {/* <ListInput addTodo={addTodoHandler} />
      <ListDisplay todoList={todos} /> */}
      <ListInput />
      <ListDisplay />
    </ListProvider>
  );
}

export default App;
