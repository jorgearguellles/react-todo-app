import { render, screen } from "@testing-library/react";
import { TodoCounter } from "../../components/TodoCounter";
import { TodoContext } from "../../context/todoContext";

// Mocking TodoContext
const mockContextValue = {
  completedTodos: 0,
  totalTodos: 0,
  loading: false,
};

const renderWithContext = (contextValue) => {
  return render(
    <TodoContext.Provider value={contextValue}>
      <TodoCounter />
    </TodoContext.Provider>
  );
};

describe("TodoCounter Component", () => {
  test("renders loading message when loading is true", () => {
    const contextValue = {
      ...mockContextValue,
      loading: true,
    };

    renderWithContext(contextValue);

    const loadingMessage = screen.getByText("Todo List App");
    expect(loadingMessage).toBeInTheDocument();
  });

  test('renders "Create your ToDo!" message when totalTodos is 0', () => {
    const contextValue = {
      ...mockContextValue,
      loading: false,
      totalTodos: 0,
    };

    renderWithContext(contextValue);

    const createTodoMessage = screen.getByText("Create you ToDo !");
    expect(createTodoMessage).toBeInTheDocument();
  });

  test('renders "You finished all your ToDos, Congratulations!!!" when completedTodos equals totalTodos', () => {
    const contextValue = {
      ...mockContextValue,
      loading: false,
      totalTodos: 5,
      completedTodos: 5,
    };

    renderWithContext(contextValue);

    const completedAllMessage = screen.getByText(
      "You finished all your ToDos, Congratulations!!!"
    );
    expect(completedAllMessage).toBeInTheDocument();
  });

  test('renders "You finished X from Y ToDos" message when some todos are completed', () => {
    const contextValue = {
      ...mockContextValue,
      loading: false,
      totalTodos: 5,
      completedTodos: 3,
    };

    renderWithContext(contextValue);

    const progressMessage = screen.getByText("You finished 3 from 5 ToDos");
    expect(progressMessage).toBeInTheDocument();
  });
});
