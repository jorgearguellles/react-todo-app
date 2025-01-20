import "../styles/CreateTodoBtn.css";

function CreateTodoBtn({ setTodos, totalTodos }) {
  return (
    <button
      className={`CreateTodoButton ${totalTodos === 0 ? "empty-todos" : ""}`}
    >
      +
    </button>
  );
}

export { CreateTodoBtn };
