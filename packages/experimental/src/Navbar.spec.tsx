import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import * as React from "react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  afterEach(cleanup);

  beforeEach(() => {
    render(
      <Navbar>
        <div>Hello world</div>
      </Navbar>,
    );
  });

  it("Should render navbar", () => {
    expect(screen.queryByRole("banner", { name: "Page header" })).toBeDefined();
  });

  it("Should render children", () => {
    expect(screen.queryByText("Hello world")).toBeDefined();
  });
});
