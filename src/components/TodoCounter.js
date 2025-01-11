import "../styles/TodoCounter.css";

function TodoCounter({ completed = 0, total = 0 }) {
  return (
    <h3 className="TodoCounter">
      You finished {completed} from {total} ToDos
    </h3>
  );
}

export { TodoCounter };
