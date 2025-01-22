import { render, screen, fireEvent } from "@testing-library/react"; // Importing functions for rendering and interacting with components
import { TodoProvider, TodoContext } from "../../context/todoContext"; // Importing TodoProvider and TodoContext
import { useContext } from "react"; // Importing useContext hook to access context
import { useLocalStorage } from "../../hooks/useLocalStorage"; // Importing custom hook useLocalStorage

// Mock of useLocalStorage to prevent actual interaction with localStorage
jest.mock("../../hooks/useLocalStorage");

const TestComponent = () => {
  // Accessing values from TodoContext
  const {
    loading,
    error,
    completedTodos,
    totalTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    searchValue,
    setSearchValue,
    searchedTodos,
  } = useContext(TodoContext);

  return (
    <div>
      {/* Displaying totalTodos, completedTodos, loading, and error */}
      <p>Total Todos: {totalTodos}</p>
      <p>Completed Todos: {completedTodos}</p>
      <p>Loading: {loading ? "True" : "False"}</p>
      <p>Error: {error ? "True" : "False"}</p>

      {/* Input field for search value */}
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search"
      />
      {/* Buttons to add, complete, and delete todos */}
      <button onClick={() => addTodo("New Todo")}>Add Todo</button>
      <button onClick={() => completeTodo("New Todo")}>Complete Todo</button>
      <button onClick={() => deleteTodo("New Todo")}>Delete Todo</button>

      {/* Displaying todos filtered by search */}
      <ul>
        {searchedTodos.map((todo) => (
          <li key={todo.key}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

describe("TodoProvider", () => {
  beforeEach(() => {
    // Mocking useLocalStorage to prevent real localStorage interaction
    useLocalStorage.mockReturnValue({
      item: [],
      saveItem: jest.fn(),
      loading: false,
      error: false,
    });
  });

  it("should render totalTodos and completedTodos correctly", () => {
    // Rendering TodoProvider with TestComponent
    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );

    // Verifying that initial totalTodos and completedTodos are 0
    expect(screen.getByText("Total Todos: 0")).toBeInTheDocument();
    expect(screen.getByText("Completed Todos: 0")).toBeInTheDocument();
  });

  it("should call addTodo and update the totalTodos count", () => {
    const saveItemMock = jest.fn();

    // Mocking useLocalStorage to simulate an empty todo list
    useLocalStorage.mockReturnValue({
      item: [],
      saveItem: saveItemMock,
      loading: false,
      error: false,
    });

    // Rendering TodoProvider with TestComponent
    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );

    // Simulating a click on the "Add Todo" button
    const addButton = screen.getByText("Add Todo");
    fireEvent.click(addButton);

    // Verifying saveItemMock has been called with the correct arguments
    expect(saveItemMock).toHaveBeenCalledTimes(1);
    expect(saveItemMock).toHaveBeenCalledWith([
      { key: expect.any(String), text: "New Todo", completed: false },
    ]);
  });

  it("should call completeTodo and update the completedTodos count", () => {
    const saveItemMock = jest.fn();

    // Mocking useLocalStorage with an incomplete todo
    useLocalStorage.mockReturnValue({
      item: [{ key: "1", text: "New Todo", completed: false }],
      saveItem: saveItemMock,
      loading: false,
      error: false,
    });

    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );

    // Simulating a click on the "Complete Todo" button
    const completeButton = screen.getByText("Complete Todo");
    fireEvent.click(completeButton);

    // Verifying saveItemMock has been called with the updated todo
    expect(saveItemMock).toHaveBeenCalledTimes(1);
    expect(saveItemMock).toHaveBeenCalledWith([
      { key: "1", text: "New Todo", completed: true },
    ]);
  });

  it("should call deleteTodo and remove the todo", () => {
    const saveItemMock = jest.fn();

    // Mocking useLocalStorage with an existing todo
    useLocalStorage.mockReturnValue({
      item: [{ key: "1", text: "New Todo", completed: false }],
      saveItem: saveItemMock,
      loading: false,
      error: false,
    });

    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );

    // Simulating a click on the "Delete Todo" button
    const deleteButton = screen.getByText("Delete Todo");
    fireEvent.click(deleteButton);

    // Verifying saveItemMock has been called with an empty array
    expect(saveItemMock).toHaveBeenCalledTimes(1);
    expect(saveItemMock).toHaveBeenCalledWith([]);
  });

  it("should filter todos based on search input", () => {
    const saveItemMock = jest.fn();

    // Mocking useLocalStorage with two todos
    useLocalStorage.mockReturnValue({
      item: [
        { key: "1", text: "Buy milk", completed: false },
        { key: "2", text: "Walk the dog", completed: false },
      ],
      saveItem: saveItemMock,
      loading: false,
      error: false,
    });

    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );

    // Simulating typing "milk" in the search input
    const searchInput = screen.getByPlaceholderText("Search");
    fireEvent.change(searchInput, { target: { value: "milk" } });

    // Verifying that the todo list only displays the filtered todo
    const todoList = screen.getByRole("list");
    expect(todoList).toHaveTextContent("Buy milk");
    expect(todoList).not.toHaveTextContent("Walk the dog");
  });
});
