import React from "react";
import "../styles/TodosLoading.css";

export function TodosLoading() {
  return (
    <ul className="TodoList">
      <li className="TodoItem">
        <span className="Icon Icon-check Loading-Skeleton"></span>
        <p className="TodoItem-p Loading-Skeleton"></p>
        <span className="Icon Icon-delete Loading-Skeleton"></span>
      </li>
      <li className="TodoItem">
        <span className="Icon Icon-check Loading-Skeleton"></span>
        <p className="TodoItem-p Loading-Skeleton"></p>
        <span className="Icon Icon-delete Loading-Skeleton"></span>
      </li>
      <li className="TodoItem">
        <span className="Icon Icon-check Loading-Skeleton"></span>
        <p className="TodoItem-p Loading-Skeleton"></p>
        <span className="Icon Icon-delete Loading-Skeleton"></span>
      </li>
    </ul>
  );
}
