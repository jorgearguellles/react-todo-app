import "../styles/CreateTodoBtn.css";

function CreateTodoBtn({ setTodos }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        console.log("Create todo button clicked");
        setTodos((prevTodos) => [
          ...prevTodos,
          { text: "New Todo", completed: false },
        ]);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoBtn };
