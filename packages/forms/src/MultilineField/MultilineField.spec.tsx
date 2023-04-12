import { ChakraProvider } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { fireEvent, render } from "@testing-library/react";
import * as React from "react";
import { act } from "react-test-renderer";
import MultilineField, { MultilineFieldProps } from "./MultilineField";

jest.mock("react-textarea-autosize", () => {
  return {
    __esModule: true,
    default({ minRows: _mxr, maxRows: _mnr, ...props }: any) {
      return <textarea {...props} />;
    },
  };
});

describe("MultilineField", () => {
  const renderComponent = (props: MultilineFieldProps = {}) => {
    return render(
      <ChakraProvider>
        <MultilineField {...props} />
      </ChakraProvider>,
    );
  };

  it("Should render multiline", () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId("hds.multiline-field.input")).toBeInTheDocument();
  });

  it("'onChange' event", async () => {
    const { getByTestId } = renderComponent();

    const field = getByTestId("hds.multiline-field.input");
    const value = faker.lorem.word();

    await act(async () => {
      fireEvent.change(field, { target: { value } });
    });

    expect(field).toHaveValue(value);
  });
});
