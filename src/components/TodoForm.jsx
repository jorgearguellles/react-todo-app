import { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";

import "../styles/TodoForm.css";

export function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
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
      ></textarea>
      <div className="TodoForm-btns-container">
        <button
          className="TodoForm-btn Todo-btn--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button className="TodoForm-btn Todo-btn--create" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}
