import { Avatar, HStack, Text } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import * as React from "react";
import renderer from "react-test-renderer";
import Table from "./Table";

const items = new Array(5).fill(null).map(() => {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
  };
});

const onSort = jest.fn();
const onCheck = jest.fn();
const onClick = jest.fn();
const onCheckAll = jest.fn();

describe("Table", () => {
  afterEach(cleanup);
  beforeEach(() => {
    render(
      <Table
        items={items}
        columns={[
          {
            label: "Name",
            renderRow({ name, avatar }) {
              return (
                <HStack spacing={2}>
                  <Avatar src={avatar} name={name} />
                  <Text>{name}</Text>
                </HStack>
              );
            },
            onCheck,
            onCheckAll,
            onClick,
          },
          {
            label: "Email",
            renderRow({ email }) {
              return email;
            },
            onSort,
            onClick,
            defaultSort: "asc",
            tooltip: "Hint: This is your email",
          },
        ]}
      />,
    );
  });

  describe("Checkbox", () => {
    it("Should render master checkbox", () => {
      expect(
        screen.queryByRole("checkbox", {
          name: "Select all",
        }),
      ).toBeDefined();
    });

    it("Should render checkboxes", () => {
      expect(
        screen.queryAllByRole("checkbox", {
          name: "Select item",
        }),
      ).toHaveLength(items.length);
    });

    it("Should call onCheck callback when a checkbox is toggled", () => {
      fireEvent.click(
        screen.getAllByRole("checkbox", {
          name: "Select item",
        })[0],
      );

      expect(onCheck).toHaveBeenCalledWith(
        expect.objectContaining({
          isChecked: expect.any(Boolean),
          item: expect.any(Object),
        }),
      );
    });

    it("Should call onCheckAll callback when master checkbox is toggled", () => {
      fireEvent.click(
        screen.getByRole("checkbox", {
          name: "Select all",
        }),
      );

      expect(onCheckAll).toHaveBeenCalledWith(
        expect.objectContaining({
          isChecked: expect.any(Boolean),
          selected: expect.any(Array),
        }),
      );
    });
  });

  describe("Sort", () => {
    it("Should render sort button", () => {
      expect(screen.queryByRole("button", { name: /Sort (a|de)sc/i })).toBeDefined();
    });

    it("Should call sort callback when sort button is clicked", () => {
      fireEvent.click(
        screen.getByRole("button", {
          name: /Sort (a|de)sc/i,
        }),
      );

      expect(onSort).toHaveBeenCalled();
    });
  });

  describe("Tooltip", () => {
    it("Should render help icon", () => {
      expect(screen.queryByRole("button", { name: "Hint" })).toBeDefined();
    });

    it("Should display hint when tooltip button is clicked", async () => {
      const trigger = screen.getByRole("button", { name: "Hint" });
      fireEvent.click(trigger);
      await waitFor(() => {
        expect(screen.queryByText("Hint: This is your email")).toBeDefined();
      });
    });
  });

  it("Should call onClick callback when rows with handlers attached are clicked", () => {
    const td = document.querySelector("td") as HTMLTableCellElement;
    fireEvent.click(td);
    expect(onClick).toHaveBeenCalled();
  });

  it("Should match snapshot", () => {
    const component = renderer.create(
      <Table
        items={[
          {
            id: 1,
            name: "John",
            email: "john@domain.blah",
            avatar: "http://localhost:8080/images/john/pp",
          },
          {
            id: 2,
            name: "mary",
            email: "mary@domain.blah",
            avatar: "http://localhost:8080/images/mary/pp",
          },
        ]}
        columns={[
          {
            label: "Name",
            renderRow({ name, avatar }) {
              return (
                <HStack spacing={2}>
                  <Avatar src={avatar} name={name} />
                  <Text>{name}</Text>
                </HStack>
              );
            },
            onCheck: function () {},
            onCheckAll: function () {},
            onClick: function () {},
          },
          {
            label: "Email",
            renderRow({ email }) {
              return email;
            },
            onSort: function () {},
            onClick: function () {},
            defaultSort: "asc",
            tooltip: "Hint: This is your email",
          },
        ]}
      />,
    );

    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
    component.unmount();
  });
});
