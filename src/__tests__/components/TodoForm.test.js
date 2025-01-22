import { render, screen, fireEvent } from "@testing-library/react";
import { TodoForm } from "../../components/TodoForm";
import { TodoContext } from "../../context/todoContext";

// Mocking TodoContext functions
const mockAddTodo = jest.fn();
const mockSetIsOpenModal = jest.fn();

const renderWithContext = () => {
  return render(
    <TodoContext.Provider
      value={{ addTodo: mockAddTodo, setIsOpenModal: mockSetIsOpenModal }}
    >
      <TodoForm />
    </TodoContext.Provider>
  );
};

describe("TodoForm Component", () => {
  test("renders the form with a label and textarea", () => {
    renderWithContext();

    const label = screen.getByText("Let's Create a new ToDo");
    const textarea = screen.getByPlaceholderText("Do ...");
    expect(label).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
  });

  test("handles input change correctly", () => {
    renderWithContext();

    const textarea = screen.getByPlaceholderText("Do ...");
    fireEvent.change(textarea, { target: { value: "New Todo" } });

    expect(textarea.value).toBe("New Todo");
  });

  test("calls addTodo and setIsOpenModal when form is submitted", () => {
    renderWithContext();

    const textarea = screen.getByPlaceholderText("Do ...");
    fireEvent.change(textarea, { target: { value: "New Todo" } });

    const submitButton = screen.getByText("Create");
    fireEvent.click(submitButton);

    expect(mockAddTodo).toHaveBeenCalledWith("New Todo");
    expect(mockSetIsOpenModal).toHaveBeenCalledWith(false);
  });

  test("calls setIsOpenModal when cancel button is clicked", () => {
    renderWithContext();

    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);

    expect(mockSetIsOpenModal).toHaveBeenCalledWith(false);
  });

  test("validates that textarea has 'required' attribute before form submission", () => {
    renderWithContext();

    // Get the textarea element
    const textarea = screen.getByPlaceholderText("Do ...");

    // Check if the textarea has the 'required' attribute
    expect(textarea).toHaveAttribute("required");
  });
});
