import React from "react";
import { TodoProvider } from "./context/todoContext";
import { AppUI } from "./AppUI";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;

// localStorage.removeItem("TODOS_V1");

// const defaultTodos = [
//   { text: "Cut onion", completed: true },
//   { text: "Take intro react course", completed: false },
//   { text: "Crying with cry", completed: false },
//   { text: "LALA", completed: false },
//   { text: "Derivate states", completed: true },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
