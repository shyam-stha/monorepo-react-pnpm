import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from ".";

describe("Button", () => {
  it("should render button", () => {
    render(<Button colorSchema="blue">Click Here</Button>);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeInTheDocument();
  });
});
