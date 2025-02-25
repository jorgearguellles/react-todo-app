import React from "react";
import PropTypes from 'prop-types';
import "../styles/TodoList.css";

function TodoList({ children }) {
  return <ul className="TodoList">{children}</ul>;
}
TodoList.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TodoList };
