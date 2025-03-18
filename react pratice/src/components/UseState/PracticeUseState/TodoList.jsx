import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodo([...todo, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      TodoList
      <br />
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Add a new Todo"
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todo.map((todos, index) => (
          <li key={index}>{todos}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
