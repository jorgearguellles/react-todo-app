import "../styles/TodoCounter.css";

function TodoCounter({ completed = 0, total = 0 }) {
  let message;
  if (total === 0) {
    message = "Create a ToDo !";
  } else if (completed === total) {
    message = "You finished all your ToDos, Congratulations!!!";
  } else {
    message = `You finished ${completed} from ${total} ToDos`;
  }

  return <h3 className="TodoCounter">{message}</h3>;
}

export { TodoCounter };
