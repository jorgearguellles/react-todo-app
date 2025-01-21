import { useContext } from "react";
import { TodoContext } from "./context/todoContext";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoBtn } from "./components/CreateTodoBtn";
import { TodosLoading } from "./components/TodosLoading";
import { TodosError } from "./components/TodosError";
import { Modal } from "./components/Modal";
import { TodoForm } from "./components/TodoForm";

export function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    isModalOpen,
  } = useContext(TodoContext);
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!loading && <CreateTodoBtn />}

      {isModalOpen && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </div>
  );
}
