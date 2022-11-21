import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import * as React from "react";
import Switch, { SwitchProps } from "./Switch";

describe("Switch", () => {
  const renderTestComponent = (props: SwitchProps = {}) => {
    return render(<Switch {...props} />);
  };

  it("Should render FormControl", () => {
    const { queryByRole } = renderTestComponent();
    expect(queryByRole("group")).toBeDefined();
  });

  it("Should render switch", () => {
    const { queryByRole } = renderTestComponent();
    expect(queryByRole("checkbox")).toBeDefined();
  });

  it("Should be able to set checked", () => {
    const { getByRole } = renderTestComponent({ checked: true });
    expect(getByRole("checkbox")).toHaveAttribute("checked");
  });

  it("Should be able to set label", () => {
    const { queryByText } = renderTestComponent({ label: "Checkbox label" });
    expect(queryByText("Checkbox label")).toBeDefined();
  });

  it("Should be able to set helper text", () => {
    const { queryByText } = renderTestComponent({ helperText: "Checkbox helper text" });
    expect(queryByText("Checkbox helper text")).toBeDefined();
  });

  it("Should call callback fn when check is toggled", async () => {
    const onCheck = jest.fn();
    const { getByRole } = renderTestComponent({ onCheck });

    fireEvent.click(getByRole("checkbox"));

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledWith(expect.any(Boolean));
    });
  });
});
