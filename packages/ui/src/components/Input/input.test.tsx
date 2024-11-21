import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Input from ".";

describe("input", () => {
  it("should render input field", () => {
    render(<Input colorSchema="blue" />);

    const inputElement = screen.getByRole("textbox");

    expect(inputElement).toBeInTheDocument();
  });
});
