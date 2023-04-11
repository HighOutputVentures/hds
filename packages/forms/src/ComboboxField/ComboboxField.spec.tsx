import { ChakraProvider } from "@chakra-ui/react";
import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import * as React from "react";
import ComboboxField, { ComboboxFieldProps } from "./ComboboxField";

const options = [
  {
    label: "One",
    value: 1,
  },
  {
    label: "Two",
    value: 2,
  },
  {
    label: "Three",
    value: 3,
  },
];

const onChange = jest.fn();

describe("ComboboxField", () => {
  afterEach(cleanup);

  const renderComponent = (props: ComboboxFieldProps<any> = {}) => {
    return render(
      <ChakraProvider>
        <ComboboxField {...props} />
      </ChakraProvider>,
    );
  };

  it("Should render field", () => {
    const { getByTestId } = renderComponent({ options });

    expect(getByTestId("hds.combobox")).toBeInTheDocument();
    expect(getByTestId("hds.combobox.controls.input")).toBeInTheDocument();
  });

  it("Should render options", async () => {
    const { getByTestId, getAllByTestId } = renderComponent({ options });

    expect(getByTestId("hds.combobox")).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(getByTestId("hds.combobox.controls.input"));
    });

    expect(getByTestId("hds.combobox.options")).toBeInTheDocument();
    expect(getAllByTestId("hds.combobox.options.option")).toHaveLength(
      options.length,
    );
  });

  it("'onChange' event", async () => {
    const { getByTestId, getAllByTestId } = renderComponent({
      options,
      onChange,
    });

    const field = getByTestId("hds.combobox.controls.input");

    expect(getByTestId("hds.combobox")).toBeInTheDocument();

    await act(async () => {
      fireEvent.focus(field);
    });

    await act(async () => {
      fireEvent.change(field, {
        target: {
          value: options[0].label,
        },
      });
    });

    expect(getByTestId("hds.combobox.options")).toBeInTheDocument();

    await waitFor(() => {
      expect(getAllByTestId("hds.combobox.options.option")).toHaveLength(1);
    });

    await act(async () => {
      fireEvent.click(getAllByTestId("hds.combobox.options.option")[0]);
    });

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(options[0].value.toString());
      expect(getByTestId("hds.combobox.controls.input")).toHaveValue(
        options[0].label,
      );
    });
  });
});
