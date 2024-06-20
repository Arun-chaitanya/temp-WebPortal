import { render, screen, fireEvent, act } from "@testing-library/react";
import SignupForm from "@views/SignupModal/SignupForm";

describe("Signup form test", () => {
  const setStepNumber = jest.fn();
  const setFormData = jest.fn();

  const renderComponent = (formData) =>
    render(<SignupForm setStepNumber={setStepNumber} formData={formData} setFormData={setFormData} />);

  it("should disable the Continue button when the name is empty", () => {
    renderComponent({ name: "", email: "test@example.com", password: "password" });

    const continueButton = screen.getByRole("button", { name: /continue/i });
    expect(continueButton).toBeDisabled();
  });

  it("should disable the Continue button when the email is empty", () => {
    renderComponent({ name: "John Doe", email: "", password: "password" });

    const continueButton = screen.getByRole("button", { name: /continue/i });
    expect(continueButton).toBeDisabled();
  });

  it("should disable the Continue button when the password is empty", () => {
    renderComponent({ name: "John Doe", email: "test@example.com", password: "" });

    const continueButton = screen.getByRole("button", { name: /continue/i });
    expect(continueButton).toBeDisabled();
  });

  it("should disable the Continue button when the email is invalid", () => {
    renderComponent({ name: "John Doe", email: "invalid-email", password: "password" });

    // Simulate email validation error
    fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
      target: { value: "invalid-email" },
    });

    const continueButton = screen.getByRole("button", { name: /continue/i });
    expect(continueButton).toBeDisabled();
  });

  it("should enable the Continue button when all fields are valid", () => {
    renderComponent({ name: "John Doe", email: "test@example.com", password: "password" });

    const continueButton = screen.getByRole("button", { name: /continue/i });
    expect(continueButton).not.toBeDisabled();
  });
});
