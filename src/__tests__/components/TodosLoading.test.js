import { render, screen } from "@testing-library/react";
import { TodosLoading } from "../../components/TodosLoading";

describe("TodosLoading Component", () => {
  test("renders the correct number of loading skeletons", () => {
    render(<TodosLoading />);

    // Verify there are three list items
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);

    // Verify each list item contains the expected skeleton elements
    listItems.forEach((item) => {
      const checkSkeleton = item.querySelector(".Icon-check.Loading-Skeleton");
      const textSkeleton = item.querySelector(".TodoItem-p.Loading-Skeleton");
      const deleteSkeleton = item.querySelector(
        ".Icon-delete.Loading-Skeleton"
      );

      expect(checkSkeleton).toBeInTheDocument();
      expect(textSkeleton).toBeInTheDocument();
      expect(deleteSkeleton).toBeInTheDocument();
    });
  });

  test("applies the correct class to the list container", () => {
    render(<TodosLoading />);

    // Verify the list container has the correct class
    const listContainer = screen.getByRole("list");
    expect(listContainer).toHaveClass("TodoList");
  });

  test("each list item has the correct class", () => {
    render(<TodosLoading />);

    // Verify each list item has the correct class
    const listItems = screen.getAllByRole("listitem");
    listItems.forEach((item) => {
      expect(item).toHaveClass("TodoItem");
    });
  });
});
