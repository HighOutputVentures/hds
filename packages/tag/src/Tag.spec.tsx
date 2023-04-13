import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import renderer from "react-test-renderer";
import AUIcon from "./examples/AUIcon";
import Tag from "./Tag";

describe("Snapshot", () => {
  it("Should match snapshot", () => {
    const component = renderer.create(
      <Tag
        label="Tag Label"
        hasOnlineIndicator
        icon={AUIcon}
        avatar="https://i.pravatar.cc/25"
        hasCheckbox
        isChecked
        hasBadge
        badgeCount={1_000_000}
        isClosable
        onCheck={function () {}}
        onClose={function () {}}
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    component.unmount();
  });
});
