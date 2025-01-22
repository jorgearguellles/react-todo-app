import { render, screen, fireEvent } from "@testing-library/react";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoContext } from "../../context/todoContext";

describe("TodoSearch Component", () => {
  const mockContextValue = {
    searchValue: "",
    setSearchValue: jest.fn(),
  };

  const renderWithContext = (value = mockContextValue) =>
    render(
      <TodoContext.Provider value={value}>
        <TodoSearch />
      </TodoContext.Provider>
    );

  test("renders the input with the correct placeholder", () => {
    renderWithContext();

    const inputElement = screen.getByPlaceholderText("Find you to do");
    expect(inputElement).toBeInTheDocument();
  });

  test("displays the value from the context in the input field", () => {
    renderWithContext({ ...mockContextValue, searchValue: "Test search" });

    const inputElement = screen.getByPlaceholderText("Find you to do");
    expect(inputElement.value).toBe("Test search");
  });

  test("calls setSearchValue when input value changes", () => {
    renderWithContext();

    const inputElement = screen.getByPlaceholderText("Find you to do");
    fireEvent.change(inputElement, { target: { value: "New value" } });

    expect(mockContextValue.setSearchValue).toHaveBeenCalledTimes(1);
    expect(mockContextValue.setSearchValue).toHaveBeenCalledWith("New value");
  });
});
