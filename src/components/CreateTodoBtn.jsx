import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import "../styles/CreateTodoBtn.css";

function CreateTodoBtn() {
  const { totalTodos } = useContext(TodoContext);
  return (
    <button
      className={`CreateTodoButton ${totalTodos === 0 ? "empty-todos" : ""}`}
    >
      +
    </button>
  );
}

export { CreateTodoBtn };
