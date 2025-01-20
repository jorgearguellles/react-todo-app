import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { AppUI } from "./AppUI";

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cut onion', completed: true },
//   { text: 'Take intro react course', completed: false },
//   { text: 'Crying with cry', completed: false },
//   { text: 'LALA', completed: false },
//   { text: 'Derivates states', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      setSearchValue={setSearchValue}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      filteredTodos={filteredTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error}
    />
  );
}

export default App;
