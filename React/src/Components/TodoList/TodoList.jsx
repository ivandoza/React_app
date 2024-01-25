import { useState } from "react";

export function TodoList() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    setNewItem(e.target.value);
  };

  const handleAddItem = (e) => {
    setTodos((todos) => [...todos, newItem]);
  };

  const handleResetTodo = () => {
    setTodos([]);
    setNewItem("");
  };
  const handleDeleteTodo = (index) => {
    const afterDeleteTodo = [...todos];
    afterDeleteTodo.splice(index, 1);
    setTodos(afterDeleteTodo);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Add to List"
        onChange={handleInput}
      ></input>
      <button onClick={handleAddItem}>Add</button>
      <button onClick={handleResetTodo}>Reset</button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}
          <button onClick={() => handleDeleteTodo(index)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
