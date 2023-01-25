import { ChakraProvider } from "@chakra-ui/react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import * as React from "react";
import { ToastExample } from "./Toast.example";

const onCloseComplete = jest.fn();

describe("Toast", () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <ToastExample onCloseComplete={onCloseComplete} />
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

  it("Should be able to close toast", async () => {
    const trigger = screen.getByText("Success", { selector: "button" });

    fireEvent.click(trigger);

    await waitFor(() => {
      expect(screen.queryByText("This is a success message!!")).toBeDefined();
    });

    fireEvent.click(screen.getByRole("button", { name: "Close alert" }));

    await waitFor(() => {
      expect(screen.queryByText("This is a success message!!")).toBeNull();
    });
  });

  it("Should be able to pass 'onCloseComplete'", async () => {
    const trigger = screen.getByText("Success", { selector: "button" });

    fireEvent.click(trigger);

    await waitFor(() => {
      expect(screen.queryByText("This is a success message!!")).toBeDefined();
    });

    fireEvent.click(screen.getByRole("button", { name: "Close alert" }));

    await waitFor(() => {
      expect(screen.queryByText("This is a success message!!")).toBeNull();
    });

    await waitFor(() => {
      expect(onCloseComplete).toHaveBeenCalled();
    });
  });
});
