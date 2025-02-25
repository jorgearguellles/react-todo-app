import React from 'react';
import "../styles/TodoItem.css";
import { GoCheck, GoTrash } from "react-icons/go";
import PropTypes from 'prop-types';

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
        <GoTrash />
      </span>
    </li>
  );
}
TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { TodoItem };
