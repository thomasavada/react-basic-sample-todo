import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo/Todo";
import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    setTodos((previousTodos) => [...previousTodos, { text }]);
  };

  const completeTodo = index => {
    setTodos((previousTodos) => previousTodos.map((todo, i) => i === index ? { ...todo, isCompleted: true } : todo));
  };

  const removeTodo = async (index) => {
    setTodos((previousTodos) =>  previousTodos.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
