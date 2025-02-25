import React from 'react';
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import "../styles/CreateTodoBtn.css";

function CreateTodoBtn() {
  const { totalTodos, setIsOpenModal } = useContext(TodoContext);
  return (
    <button
      className={`CreateTodoButton ${totalTodos === 0 ? "empty-todos" : ""}`}
      onClick={() => setIsOpenModal((state) => !state)}
    >
      +
    </button>
  );
}

export { CreateTodoBtn };
