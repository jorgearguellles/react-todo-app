import "../styles/TodoItem.css";
import { GoCheck, GoX } from "react-icons/go";

function TodoItem({ completed, text, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        <GoCheck />
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        <GoX />
      </span>
    </li>
  );
}

export { TodoItem };
