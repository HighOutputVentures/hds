import { render, screen } from "@testing-library/react";
import React from "react";
import Checkbox from "./Checkbox";

describe("Checkbox Component", () => {
  beforeEach(() => {
    render(<Checkbox label="Label" hint="this is a hint to help user" />);
  });

  it("Should render checkbox", async () => {
    expect(screen.getByTestId("hds.checkbox.input")).toBeDefined();
  });

  it("Should render hint", () => {
    expect(screen.getByTestId("hds.checkbox.hint")).toBeInTheDocument();
  });

  it("Should render label", () => {
    expect(screen.getByTestId("hds.checkbox.label")).toBeInTheDocument();
  });
});
