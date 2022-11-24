import { Box } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as React from "react";
import CheckboxGroup from "./CheckboxGroup";

const items = [
  { id: 1, name: "Mary" },
  { id: 2, name: "Will" },
  { id: 3, name: "Jane" },
  { id: 4, name: "Mark" },
  { id: 5, name: "Sean" },
];

describe("CheckboxGroup", () => {
  it("Should render children", () => {
    render(
      <CheckboxGroup items={items} value={items[0]} onChange={() => {}} compareFn={({ id }) => id}>
        {({ item }) => {
          return <Box key={item.id}>{item.name}</Box>;
        }}
      </CheckboxGroup>,
    );
  });
});
