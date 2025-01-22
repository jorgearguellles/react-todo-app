import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import "../styles/TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos, loading } = useContext(TodoContext);

  let message;

  if (loading) {
    message = "Todo List App";
  } else if (totalTodos === 0) {
    message = "Create you ToDo !";
  } else if (completedTodos === totalTodos) {
    message = "You finished all your ToDos, Congratulations!!!";
  } else {
    message = `You finished ${completedTodos} from ${totalTodos} ToDos`;
  }

  return <h3 className="TodoCounter">{message}</h3>;
}

export { TodoCounter };
