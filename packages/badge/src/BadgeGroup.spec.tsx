import { ChakraProvider, Icon } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import * as React from "react";
import renderer from "react-test-renderer";
import BadgeGroup from "./BadgeGroup";
import ExampleIcon from "./examples/ExampleIcon";

const handleClick = jest.fn();

describe("BadgeGroup", () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <BadgeGroup
          title="Title"
          description="Description"
          icon={<Icon as={ExampleIcon} role="img" aria-label="Example icon" />}
          onClick={handleClick}
        />
      </ChakraProvider>,
    );
  });

  it("Should render badge group", () => {
    expect(screen.queryByRole("alert")).toBeDefined();
  });

  it("Should render title", () => {
    expect(screen.queryByText("Title")).toBeDefined();
  });

  it("Should render description", () => {
    expect(screen.queryByText("Description")).toBeDefined();
  });

  it("Should render icon", () => {
    expect(screen.queryByRole("img", { name: "Example icon" })).toBeDefined();
  });

  it("Should run callback fn when button is clicked", async () => {
    expect(screen.queryByRole("button")).toBeDefined();
    const button = screen.getByRole("button");
    fireEvent.click(button);
    await waitFor(() => {
      expect(handleClick).toHaveBeenCalled();
    });
  });

  it("Should match BadgeGroup snapshot", () => {
    const component = renderer.create(
      <ChakraProvider>
        <BadgeGroup title="Title" description="Description" icon={<Icon as={ExampleIcon} />} />
      </ChakraProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    component.unmount();
  });
});
