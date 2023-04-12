import { ChakraProvider } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { render } from "@testing-library/react";
import * as React from "react";
import FormGroup, { FormGroupProps } from "./FormGroup";

describe("FormGroup", () => {
  const renderComponent = (props: FormGroupProps = {}) => {
    return render(
      <ChakraProvider>
        <FormGroup {...props} />
      </ChakraProvider>,
    );
  };

  it("Should render parent", () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId("hds.form-group.group")).toBeInTheDocument();
  });

  it("Should render label", () => {
    const label = faker.random.word();
    const { getByTestId } = renderComponent({ label });

    expect(getByTestId("hds.form-group.label")).toBeInTheDocument();
    expect(getByTestId("hds.form-group.label")).toHaveTextContent(label);
  });

  it("Should render error", () => {
    const error = faker.random.word();
    const { getByTestId } = renderComponent({ error });

    expect(getByTestId("hds.form-group.error")).toBeInTheDocument();
    expect(getByTestId("hds.form-group.error")).toHaveTextContent(error);
  });

  it("Should render hint", () => {
    const hint = faker.random.word();
    const { getByTestId } = renderComponent({ hint });

    expect(getByTestId("hds.form-group.hint")).toBeInTheDocument();
    expect(getByTestId("hds.form-group.hint")).toHaveTextContent(hint);
  });

  it("Should render children", () => {
    const { getByTestId } = renderComponent({
      children: <input data-testid="hds.form-group.field" />,
    });

    expect(getByTestId("hds.form-group.field")).toBeInTheDocument();
  });
});
