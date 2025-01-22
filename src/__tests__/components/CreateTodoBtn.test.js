import { render, screen, fireEvent } from "@testing-library/react";
import { CreateTodoBtn } from "../../components/CreateTodoBtn";
import { TodoContext } from "../../context/todoContext";

describe("CreateTodoBtn", () => {
  it("should render the CreateTodoBtn button", () => {
    render(
      <TodoContext.Provider
        value={{ totalTodos: 0, setIsOpenModal: jest.fn() }}
      >
        <CreateTodoBtn />
      </TodoContext.Provider>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
  });

  it('should have the class "empty-todos" when totalTodos is 0', () => {
    const mockContext = {
      totalTodos: 0,
      setIsOpenModal: jest.fn(),
    };

    render(
      <TodoContext.Provider value={mockContext}>
        <CreateTodoBtn />
      </TodoContext.Provider>
    );

    expect(screen.getByRole("button")).toHaveClass(
      "CreateTodoButton empty-todos"
    );
  });

  it('should not have the class "empty-todos" when totalTodos is greater than 0', () => {
    const mockContext = {
      totalTodos: 5,
      setIsOpenModal: jest.fn(),
    };

    render(
      <TodoContext.Provider value={mockContext}>
        <CreateTodoBtn />
      </TodoContext.Provider>
    );

    expect(screen.getByRole("button")).toHaveClass("CreateTodoButton");
  });

  it("should call setIsOpenModal on button click", () => {
    const mockSetIsOpenModal = jest.fn();
    const mockContext = {
      totalTodos: 3,
      setIsOpenModal: mockSetIsOpenModal,
    };

    render(
      <TodoContext.Provider value={mockContext}>
        <CreateTodoBtn />
      </TodoContext.Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockSetIsOpenModal).toHaveBeenCalledTimes(1);
    expect(mockSetIsOpenModal).toHaveBeenCalledWith(expect.any(Function));
  });

  it("should toggle isOpenModal state when button is clicked", () => {
    const mockSetIsOpenModal = jest.fn();
    const mockContext = {
      totalTodos: 3,
      setIsOpenModal: mockSetIsOpenModal,
    };

    render(
      <TodoContext.Provider value={mockContext}>
        <CreateTodoBtn />
      </TodoContext.Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockSetIsOpenModal).toHaveBeenCalledWith(expect.any(Function)); // Verifica que se pasa una función al setState
  });

  it("should not throw error if TodoContext is not provided", () => {
    render(<CreateTodoBtn />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
