import "@testing-library/jest-dom/extend-expect";

import { Box, ChakraProvider } from "@chakra-ui/react";
import { SettingIcon, UserIcon, ZapIcon } from "@highoutput/hds-icons";
import React from "react";
import renderer from "react-test-renderer";
import { Dropdown } from "./Dropdown";

const items = [
  { label: "View Profile", command: "⌘K->P", icon: <UserIcon /> },
  { label: "Settings", command: "⌘S", icon: <SettingIcon /> },
  { label: "Keyboard shortcuts", command: "?", icon: <ZapIcon /> },
];

describe("Snapshot", () => {
  it("Should match snapshot", () => {
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
});
