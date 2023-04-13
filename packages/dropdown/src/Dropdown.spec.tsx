import "@testing-library/jest-dom/extend-expect";

import { Box, ChakraProvider } from "@chakra-ui/react";
import { SettingIcon, UserIcon, ZapIcon } from "@highoutput/hds-icons";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import Dropdown from "./Dropdown";

const items = [
  { label: "View Profile", command: "⌘K->P", icon: <UserIcon /> },
  { label: "Settings", command: "⌘S", icon: <SettingIcon /> },
  { label: "Keyboard shortcuts", command: "?", icon: <ZapIcon /> },
];

describe("Dropdown", () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <Dropdown items={items}>
          {({ onOpen }) => {
            return (
              <Box as="button" onClick={onOpen} data-testid="dropdown.button">
                Click
              </Box>
            );
          }}
        </Dropdown>
      </ChakraProvider>,
    );
  });

  it("Should render dropdown", async () => {
    await act(async () => {
      fireEvent.click(screen.getByTestId("dropdown.button"));
    });

    await waitFor(() => {
      expect(screen.getByTestId("hds.dropdown")).toBeInTheDocument();
    });
  });
});

describe("Snapshot", () => {
  const component = renderer.create(
    <ChakraProvider>
      <Dropdown items={items}>
        {({ onToggle }) => {
          return <Box as="button" onClick={onToggle} />;
        }}
      </Dropdown>
    </ChakraProvider>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  component.unmount();
});
