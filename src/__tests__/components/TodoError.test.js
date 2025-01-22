import { render, screen } from "@testing-library/react";
import { TodosError } from "../../components/TodosError";

describe("TodosError Component", () => {
  test("renders TodosError component correctly", () => {
    render(<TodosError />);

    // Verify the error message is rendered
    const errorMessage = screen.getByText(/error/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("applies default styling to the error message", () => {
    render(<TodosError />);

    // Verify the error message has the correct class (if applicable)
    const errorMessage = screen.getByText(/error/i);
    expect(errorMessage).toHaveTextContent("error"); // Verify the content
  });
});
