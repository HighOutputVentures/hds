import { ChakraProvider, Icon } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import renderer from "react-test-renderer";
import Badge from "./Badge";
import ExampleIcon from "./examples/ExampleIcon";

describe("Badge", () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <Badge
          label="Hello world"
          aria-label="testing"
          hasIndicator
          leftIcon={<Icon as={ExampleIcon} aria-label="Clickable icon" />}
          avatar="https://i.pravatar.cc/300"
        />
      </ChakraProvider>,
    );
  });

  it("Should render badge", () => {
    expect(screen.queryByRole("status", { name: "testing" })).toBeDefined();
  });

  it("Should render label", () => {
    expect(screen.queryByText("Hello world")).toBeDefined();
  });

  it("Should render indicator", () => {
    expect(screen.queryByRole("status", { name: "Online" })).toBeDefined();
  });

  it("Should render icon", () => {
    expect(screen.queryByRole("button", { name: "Clickable icon" })).toBeDefined();
  });

  it("Should render avatar", () => {
    expect(screen.queryByRole("img", { name: "Avatar" })).toBeDefined();
  });

  it("Should match Badge snapshot", () => {
    const component = renderer.create(<Badge label="Hello, Benjamen!😏" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    component.unmount();
  });
});
