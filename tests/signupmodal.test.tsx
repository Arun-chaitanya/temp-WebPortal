// src/components/Header/Header.test.tsx
import React from "react";
import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";

import useAppstore, { StoreState } from "@store/useAppstore";
import Header from "@components/Header";
import SignupModal from "@views/SignupModal";

describe("Signup modal", () => {
  const useRouter = jest.spyOn(require("next/router"), "useRouter");

  useRouter.mockImplementation(() => ({
    route: "/",
    pathname: "",
    query: "",
    asPath: "",
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
  }));
  beforeEach(() => {
    useRouter.mockReturnValue({
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
    });

    // Reset the store state before each test
    useAppstore.setState((state: StoreState) => ({
      ...state,
      signupModal: false,
    }));
  });

  it("does not render the modal when signupModal is false", () => {
    render(<Header />);

    const element = screen.queryByTestId("signup-modal");
    expect(element).not.toBeInTheDocument();
  });

  it("renders the modal when signupModal is true", () => {
    // Set the signupModal state to true
    useAppstore.setState((state: StoreState) => ({
      ...state,
      signupModal: true,
    }));

    render(<SignupModal />);

    const element = screen.queryByTestId("signup-modal");
    expect(element).toBeInTheDocument();
  });

  // it("should set signupModal to true when the Signup NavItem is clicked", () => {
  //   // Render the Header component
  //   render(<Header />);

  //   // Find the Signup NavItem
  //   const signupNavItem = screen.getByText("Signup");

  //   // Simulate a click event on the Signup NavItem
  //   act(() => {
  //     fireEvent.click(signupNavItem);
  //   });

  //   // Verify if the signupModal state is set to true
  //   const { signupModal } = useAppstore.getState();
  //   expect(signupModal).toBe(true);
  // });

  it("renders the modal correctly", async () => {
    render(<SignupModal />);

    expect(screen.getByText(/carecove/i)).toBeInTheDocument();
    expect(screen.getByText(/step 1 of 3/i)).toBeInTheDocument();
  });

  it("closes the modal when the close button is clicked", async () => {
    render(<SignupModal />);

    // Ensure the modal is initially in the document
    const element = screen.queryByTestId("signup-modal");
    expect(element).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("close-modal-button"));

    // Verify if the signupModal state is set to true
    const { signupModal } = useAppstore.getState();
    expect(signupModal).toBe(false);
  });

  test("changes step and renders RoleStep when SignupForm is filled and submitted", async () => {
    render(<SignupModal />);

    // Fill the SignupForm
    fireEvent.change(screen.getByPlaceholderText("Enter your first name"), { target: { value: "Test" } });
    fireEvent.change(screen.getByPlaceholderText("Enter your last name"), { target: { value: "User" } });
    fireEvent.change(screen.getByPlaceholderText("Enter your email"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Create a password"), { target: { value: "password" } });

    // Click the continue button
    fireEvent.click(screen.getByRole("button", { name: /Continue/i }));

    // Wait for the step change
    await waitFor(
      () => {
        // Check if the step has changed to RoleStep
        expect(screen.getByText(/Step 2 of 3/)).toBeInTheDocument();
      },
      { timeout: 2100 }
    );
  });
});
