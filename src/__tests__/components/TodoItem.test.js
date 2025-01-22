import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../components/TodoItem";

describe("TodoItem Component", () => {
  const mockOnComplete = jest.fn();
  const mockOnDelete = jest.fn();

  test("renders the TodoItem with text", () => {
    render(
      <TodoItem
        completed={false}
        text="Test Todo"
        onComplete={mockOnComplete}
        onDelete={mockOnDelete}
      />
    );

    // Check if the text content is rendered
    const todoText = screen.getByText("Test Todo");
    expect(todoText).toBeInTheDocument();
  });

  test("does not have 'complete' class when not completed", () => {
    render(
      <TodoItem
        completed={false}
        text="Test Todo"
        onComplete={mockOnComplete}
        onDelete={mockOnDelete}
      />
    );

    // Check if the 'TodoItem-p' element does not have the 'TodoItem-p--complete' class
    const todoItemText = screen.getByText("Test Todo");
    expect(todoItemText).not.toHaveClass("TodoItem-p--complete");
  });

  test("has 'complete' class when completed", () => {
    render(
      <TodoItem
        completed={true}
        text="Test Todo"
        onComplete={mockOnComplete}
        onDelete={mockOnDelete}
      />
    );

    // Check if the 'TodoItem-p' element has the 'TodoItem-p--complete' class
    const todoItemText = screen.getByText("Test Todo");
    expect(todoItemText).toHaveClass("TodoItem-p--complete");
  });

  // test("calls onComplete when the check icon span is clicked", () => {
  //   render(
  //     <TodoItem
  //       completed={false}
  //       text="Test Todo"
  //       onComplete={mockOnComplete}
  //       onDelete={mockOnDelete}
  //     />
  //   );

  //   // Find the check icon span and click it
  //   const checkIconSpan = screen.getByLabelText(/check/i).closest("span");
  //   fireEvent.click(checkIconSpan);

  //   // Check that the onComplete function was called
  //   expect(mockOnComplete).toHaveBeenCalledTimes(1);
  // });

  // test("calls onDelete when the delete icon span is clicked", () => {
  //   render(
  //     <TodoItem
  //       completed={false}
  //       text="Test Todo"
  //       onComplete={mockOnComplete}
  //       onDelete={mockOnDelete}
  //     />
  //   );

  //   // Find the delete icon span and click it
  //   const deleteSpan = screen
  //     .getByRole("button", { name: /delete/i })
  //     .closest("span");
  //   fireEvent.click(deleteSpan);

  //   // Check that the onDelete function was called
  //   expect(mockOnDelete).toHaveBeenCalledTimes(1);
  // });

  // test("applies active class to check icon span when completed", () => {
  //   render(
  //     <TodoItem
  //       completed={true}
  //       text="Test Todo"
  //       onComplete={mockOnComplete}
  //       onDelete={mockOnDelete}
  //     />
  //   );

  //   // Check if the check icon span has the 'Icon-check--active' class when completed
  //   const checkSpan = screen
  //     .getByRole("button", { name: /check/i })
  //     .closest("span");
  //   expect(checkSpan).toHaveClass("Icon-check--active");
  // });
});
