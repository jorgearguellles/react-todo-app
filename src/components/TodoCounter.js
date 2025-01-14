import "../styles/TodoCounter.css";

function TodoCounter({ completed = 0, total = 0 }) {
  const textToRender =
    completed === total
      ? "You finished all your ToDos, Congratulations!!!"
      : `You finished ${completed} from ${total} ToDos`;

  return <h3 className="TodoCounter">{textToRender}</h3>;
}

export { TodoCounter };
