function TodoCounter({ completed = 0, total = 0 }) {
  return (
    <h2>
      You finished {completed} from {total} ToDos
    </h2>
  );
}

export { TodoCounter };
