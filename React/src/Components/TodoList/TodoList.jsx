import { useState } from "react";
import styles from './TodoList.module.scss'

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
    <div className={styles.container}>
      <h2 className={styles.title}>Todo List</h2>
      <div className={styles.form}>
      <input
        type="text"
        placeholder="Add to List"
        onChange={handleInput}
        className={styles.input}
      ></input>
      <button onClick={handleAddItem} className={styles.button}>Add</button>
      <button onClick={handleResetTodo} className={styles.button}>Reset</button>
      </div>
      <ul className={styles.list}>
        {todos.map((item, index) => (
          <li key={index}>{item}
          <button onClick={() => handleDeleteTodo(index)} className={styles.buttonRemove}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
