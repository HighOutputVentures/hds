import { ChakraProvider } from "@chakra-ui/react";
import { act, fireEvent, render } from "@testing-library/react";
import * as React from "react";
import OtpField, { OtpFieldProps } from "./OtpField";

describe("OtpField", () => {
  const renderComponent = (props: OtpFieldProps = {}) => {
    return render(
      <ChakraProvider>
        <OtpField {...props} />
      </ChakraProvider>,
    );
  };

  it("Should render fields", () => {
    const { getAllByTestId } = renderComponent();

    expect(getAllByTestId("hds.otp-field.input")).toHaveLength(4);
  });

  it("'fieldCount'", () => {
    const { getAllByTestId } = renderComponent({ fieldCount: 6 });

    expect(getAllByTestId("hds.otp-field.input")).toHaveLength(6);
  });

  it("'onChange' event", async () => {
    const onChange = jest.fn();
    const onComplete = jest.fn();

    const { getAllByTestId } = renderComponent({
      onChange,
      onComplete,
    });

    const fields = getAllByTestId("hds.otp-field.input");

    await act(async () => {
      fireEvent.change(fields[0], { target: { value: "1" } });
    });

    expect(onChange).toHaveBeenCalledWith("1");

    await act(async () => {
      fireEvent.change(fields[1], { target: { value: "2" } });
    });

    expect(onChange).toHaveBeenCalledWith("12");

    await act(async () => {
      fireEvent.change(fields[2], { target: { value: "3" } });
    });

    expect(onChange).toHaveBeenCalledWith("123");

    await act(async () => {
      fireEvent.change(fields[3], { target: { value: "4" } });
    });

    expect(onChange).toHaveBeenCalledWith("1234");
    expect(onComplete).toHaveBeenCalledWith("1234");
  });
});
