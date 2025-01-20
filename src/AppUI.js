import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoBtn } from "./components/CreateTodoBtn";
import { TodosLoading } from "./components/TodosLoading";
import { TodosError } from "./components/TodosError";

export function AppUI({
  completeTodo,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  filteredTodos,
  deleteTodo,
  saveTodos,
  loading,
  error,
}) {
  return (
    <div className="App">
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}

        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoBtn setTodos={saveTodos} totalTodos={totalTodos} />
    </div>
  );
}
