import { render, screen } from "@testing-library/react";
import { Modal } from "../../components/Modal";

describe("Modal Component", () => {
  // Mock the modal container in the DOM
  beforeAll(() => {
    const modalDiv = document.createElement("div");
    modalDiv.setAttribute("id", "modal");
    document.body.appendChild(modalDiv);
  });

  afterAll(() => {
    // Clean up the mock DOM element
    const modalDiv = document.getElementById("modal");
    if (modalDiv) {
      document.body.removeChild(modalDiv);
    }
  });

  test("renders children inside the portal", () => {
    const modalContent = "This is modal content";

    render(
      <Modal>
        <p>{modalContent}</p>
      </Modal>
    );

    // Verify the content is rendered in the modal container
    const modalText = screen.getByText(modalContent);
    expect(modalText).toBeInTheDocument();

    // Verify the content is inside the modal element
    const modalContainer = document.getElementById("modal");
    expect(modalContainer).toContainElement(modalText);
  });

  test("applies the correct class to the modal background", () => {
    render(
      <Modal>
        <p>Content</p>
      </Modal>
    );

    // Verify the modal background has the correct class
    const modalBackground = screen
      .getByText("Content")
      .closest(".ModalBackground");
    expect(modalBackground).toHaveClass("ModalBackground");
  });
});
