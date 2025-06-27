import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./components/Todo/Todo";
import TodoForm from "./components/TodoForm/TodoForm";
import useFetchApi from "./useFetchApi";

function App() {
  const { data: todos, loading, error, setData: setTodos } = useFetchApi("https://jsonplaceholder.typicode.com/todos?_limit=10");

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
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error loading todos.</div>
        ) : (
          todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))
        )}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
