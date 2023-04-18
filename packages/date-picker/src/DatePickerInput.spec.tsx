import { ChakraProvider } from "@chakra-ui/react";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { format } from "date-fns";
import * as React from "react";
import DatePickerInput from "./DatePickerInput";

describe.skip("DatePickerInput", () => {
  beforeEach(() => {
    render(<TestComponent />);
  });

  it("Should render 'DatePickerInput'", () => {
    expect(screen.getByTestId("hds.datepicker-input")).toBeInTheDocument();
  });

  it("Should render datepicker input control", () => {
    expect(screen.getByTestId("hds.datepicker-input.controls.input")).toBeInTheDocument();
  });

  it("Should render datepicker calendar", async () => {
    const input = screen.getByTestId("hds.datepicker-input.controls.input");

    expect(input).toBeInTheDocument();

    await act(async () => {
      fireEvent.focus(input);
    });

    await waitFor(() => {
      expect(screen.getByTestId("hds.datepicker.calendar")).toBeInTheDocument();
    });
  });

  it("Should display selected date in input", async () => {
    const input = screen.getByTestId("hds.datepicker-input.controls.input");
    const target = new Date();

    expect(input).toBeInTheDocument();

    await act(async () => {
      fireEvent.focus(input);
    });

    await waitFor(() => {
      expect(screen.getByTestId("hds.datepicker.calendar")).toBeInTheDocument();
    });

    const dateButton = screen.getByTestId(
      `hds.datepicker.calendar.date.${format(target, "yyyy-MM-dd")}`,
    );
    expect(dateButton).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(dateButton);
    });

    await waitFor(() => {
      expect(input).toHaveValue(format(target, "MMM dd, yyyy"));
    });
  });

  it("Should be able to clear selected date", async () => {
    const input = screen.getByTestId("hds.datepicker-input.controls.input");
    const target = new Date();

    expect(input).toBeInTheDocument();

    await act(async () => {
      fireEvent.focus(input);
    });

    await waitFor(() => {
      expect(screen.getByTestId("hds.datepicker.calendar")).toBeInTheDocument();
    });

    const dateButton = screen.getByTestId(
      `hds.datepicker.calendar.date.${format(target, "yyyy-MM-dd")}`,
    );

    expect(dateButton).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(dateButton);
    });

    await waitFor(() => {
      expect(input).toHaveValue(format(target, "MMM dd, yyyy"));
    });

    await act(async () => {
      fireEvent.focus(input);
    });

    await waitFor(() => {
      expect(screen.getByTestId("hds.datepicker-input.controls.clear")).toBeInTheDocument();
    });

    await waitFor(async () => {
      fireEvent.click(screen.getByTestId("hds.datepicker-input.controls.clear"));
    });

    await waitFor(() => {
      expect(input).toHaveValue("");
    });
  });
});

function TestComponent() {
  const [date, setDate] = React.useState<Date | null>(null);

  return (
    <ChakraProvider>
      <DatePickerInput value={date} onChange={setDate} isClearable />
    </ChakraProvider>
  );
}
