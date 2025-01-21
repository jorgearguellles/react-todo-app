import { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";

import "../styles/TodoForm.css";

export function TodoForm() {
  const { addTodo, setIsOpenModal } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setIsOpenModal(false);
  };

  const onCancel = () => {
    setIsOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Let's Create a new ToDo</label>
      <textarea
        placeholder="Do ..."
        value={newTodoValue}
        onChange={onChange}
        autoFocus
        required
      ></textarea>
      <div className="TodoForm-btns-container">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}
