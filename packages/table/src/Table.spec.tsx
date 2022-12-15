import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import * as React from "react";
import Table from "./Table";

describe("Table", () => {
  afterEach(cleanup);
  beforeEach(() => {
    render(<Table />);
  });
});
