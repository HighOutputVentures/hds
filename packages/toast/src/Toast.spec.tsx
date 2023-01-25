import { ChakraProvider } from "@chakra-ui/react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import * as React from "react";
import { ToastExample } from "./ToastExample";

describe("Toast", () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <ToastExample />
      </ChakraProvider>,
    );
  });

  it("Should toast (success)", async () => {
    const trigger = screen.getByText("Success", { selector: "button" });
    fireEvent.click(trigger);
    await waitFor(() => {
      expect(screen.queryByText("This is a success message!!")).toBeDefined();
    });
  });

  it("Should toast (error)", async () => {
    const trigger = screen.getByText("Error", { selector: "button" });
    fireEvent.click(trigger);
    await waitFor(() => {
      expect(screen.queryByText("This is an error message!!")).toBeDefined();
    });
  });
});
