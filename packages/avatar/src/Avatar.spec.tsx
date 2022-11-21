import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as React from "react";
import Avatar from "./Avatar";
import CompanyIcon from "./examples/CompanyIcon";

describe("Avatar", () => {
  it("Should be able to render image", () => {
    // Need to mock avatar only in this test case
    // because it will fallback to name if not
    // since image are not actually loaded in tests
    // thus chakra treats it as a failed image
    jest.mock("./Avatar", () => {
      return function MockedAvatar({ src }: Record<string, any>) {
        return src ? <img src={src} alt="" /> : null;
      };
    });

    render(
      <ChakraProvider>
        <Avatar src="https://i.pravatar.cc/75" name="John Doe" />
      </ChakraProvider>,
    );

    expect(document.querySelector('img[src="https://i.pravatar.cc/75"]')).toBeDefined();
  });

  it("Should use name as fallback if no image not is defined", () => {
    const { queryByRole, getByRole } = render(
      <ChakraProvider>
        <Avatar src="https://i.pravatar.cc/75" name="John Doe" />
      </ChakraProvider>,
    );

    expect(queryByRole("img", { name: "John Doe" })).toBeDefined();
    expect(getByRole("img", { name: "John Doe" })).toHaveTextContent("JD");
  });

  it("Should render icon if no image and name is defined", () => {
    const { getByRole, queryByRole } = render(
      <ChakraProvider>
        <Avatar />
      </ChakraProvider>,
    );

    expect(queryByRole("img", { name: "avatar" })).toBeDefined();
    /* should be the user icon which is an svg */
    expect(getByRole("img", { name: "avatar" }).nodeName).toBe("svg");
  });

  describe("Online indicator", () => {
    it("Should be able to add online indicator", () => {
      const { queryByRole } = render(
        <ChakraProvider>
          <Avatar onlineIndicator online />
        </ChakraProvider>,
      );

      expect(queryByRole("presentation", { name: "Online" })).toBeDefined();
    });

    it("Should be able to add offline indicator", () => {
      const { queryByRole } = render(
        <ChakraProvider>
          <Avatar onlineIndicator />
        </ChakraProvider>,
      );

      expect(queryByRole("presentation", { name: "Offline" })).toBeDefined();
    });
  });

  it("Should be able to show verified icon", () => {
    const { queryByRole } = render(
      <ChakraProvider>
        <Avatar onlineIndicator />
      </ChakraProvider>,
    );

    expect(queryByRole("presentation", { name: "Verified" })).toBeDefined();
  });

  it("Should be able to set badge icon", () => {
    const { queryByRole } = render(
      <ChakraProvider>
        <Avatar badge badgeIcon={CompanyIcon} />
      </ChakraProvider>,
    );

    expect(queryByRole("presentation", { name: "Company Icon" })).toBeDefined();
  });
});
