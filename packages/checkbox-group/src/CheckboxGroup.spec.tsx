import { Box } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
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
  it("Should render children properly", () => {
    const { queryAllByRole } = render(
      <CheckboxGroup items={items} value={items[0]} onChange={jest.fn()}>
        {({ item, getProps }) => {
          const { container } = getProps();

          return (
            <Box key={item.id} {...container}>
              {item.name}
            </Box>
          );
        }}
      </CheckboxGroup>,
    );

    expect(queryAllByRole("checkbox", { name: /select item \d/i })).toHaveLength(items.length);
  });

  it("Should handle (de)selecting items", async () => {
    const handleChange = jest.fn();

    const { getAllByRole } = render(
      <CheckboxGroup
        items={items}
        value={[items[0]]}
        onChange={handleChange}
        multiple
        compareFn={({ id }) => id}
      >
        {({ item, getProps }) => {
          const { container } = getProps();

          return (
            <Box key={item.id} {...container}>
              {item.name}
            </Box>
          );
        }}
      </CheckboxGroup>,
    );

    fireEvent.click(getAllByRole("checkbox", { name: /select item \d/i })[0]);

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith([]);
    });

    // value will not actually change
    // since CheckboxGroup is controlled

    // fireEvent.click(getAllByRole("checkbox", { name: /select item \d/i })[1]);

    // await waitFor(() => {
    //   expect(handleChange).toHaveBeenCalledWith(expect.arrayContaining([items[1]]));
    // });
  });

  it("Should be able to pass default value", () => {
    const { queryAllByRole } = render(
      <CheckboxGroup items={items} value={[items[0], items[1]]} onChange={jest.fn()} multiple>
        {({ item, getProps }) => {
          const { container } = getProps();

          return (
            <Box key={item.id} {...container}>
              {item.name}
            </Box>
          );
        }}
      </CheckboxGroup>,
    );

    expect(queryAllByRole("checkbox", { name: /select item \d/i, checked: true })).toHaveLength(2);
  });

  it("Should be able to disable item", () => {
    const { getAllByRole } = render(
      <CheckboxGroup items={items} value={[items[0], items[1]]} onChange={jest.fn()} multiple>
        {({ item, index, getProps }) => {
          const { container } = getProps({ disabled: [0, 1].includes(index) });

          return (
            <Box key={item.id} {...container}>
              {item.name}
            </Box>
          );
        }}
      </CheckboxGroup>,
    );

    const checkboxes = getAllByRole("checkbox", { name: /select item \d/i });

    expect(checkboxes[0]).toHaveAttribute("aria-disabled", "true");
    expect(checkboxes[1]).toHaveAttribute("aria-disabled", "true");
  });

  it.todo("Should be able to toggle multiple");

  it("Should call onChange when selected items change", async () => {
    const handleChange = jest.fn();

    const { getAllByRole } = render(
      <CheckboxGroup items={items} value={[items[0], items[1]]} onChange={handleChange} multiple>
        {({ item, getProps }) => {
          const { container } = getProps();

          return (
            <Box key={item.id} {...container}>
              {item.name}
            </Box>
          );
        }}
      </CheckboxGroup>,
    );

    fireEvent.click(getAllByRole("checkbox", { name: /select item \d/i })[0]);

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith(expect.arrayContaining([items[1]]));
    });
  });
});
