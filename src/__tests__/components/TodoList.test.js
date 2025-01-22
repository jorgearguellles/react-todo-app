import { render, screen } from "@testing-library/react";
import { TodoList } from "../../components/TodoList";

describe("TodoList Component", () => {
  test("renders TodoList component correctly", () => {
    render(
      <TodoList>
        <li>Todo 1</li>
        <li>Todo 2</li>
      </TodoList>
    );

    // Verify the TodoList container is in the document
    const todoList = screen.getByRole("list");
    expect(todoList).toBeInTheDocument();

    // Verify that the list contains the correct number of items
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(2);
  });

  test("renders children passed to TodoList", () => {
    render(
      <TodoList>
        <li>Todo 1</li>
        <li>Todo 2</li>
      </TodoList>
    );

    // Verify the content of the list items is rendered correctly
    expect(screen.getByText("Todo 1")).toBeInTheDocument();
    expect(screen.getByText("Todo 2")).toBeInTheDocument();
  });

  test("renders an empty list correctly", () => {
    render(<TodoList />);

    // Verify that there are no list items
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);
  });
});
