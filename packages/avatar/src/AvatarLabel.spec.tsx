import { render, screen } from "@testing-library/react";
import * as React from "react";
import renderer from "react-test-renderer";
import Avatar from "./Avatar";
import AvatarLabel from "./AvatarLabel";

describe("AvatarLabel", () => {
  beforeEach(() => {
    render(
      <AvatarLabel src="" name="John Doe" supportText="johndoe@dummy.blaa">
        <Avatar />
      </AvatarLabel>,
    );
  });

  it("Should render avatar", () => {
    expect(screen.queryByRole("img", { name: "avatar" })).toBeDefined();
  });

  it("Should render name", () => {
    expect(screen.queryByText("John Doe")).toBeDefined();
  });

  it("Should render support text", () => {
    expect(screen.queryByText("johndoe@dummy.blaa")).toBeDefined();
  });

  describe("Snapshot", () => {
    it("Should match snapshot", () => {
      const component = renderer.create(
        <AvatarLabel src="" name="John Doe" supportText="johndoe@dummy.blaa">
          <Avatar />
        </AvatarLabel>,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
      component.unmount();
    });
  });
});
