import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";
import Carousel from "./Carousel";

jest.mock("react-responsive-carousel/lib/styles/carousel.min.css", () => {
  return {};
});

describe("Carousel", () => {
  afterEach(cleanup);
  beforeEach(() => {
    const { debug } = render(
      <Carousel
        items={[
          "https://example-img-01.png",
          "https://example-img-02.png",
          "https://example-img-03.png",
          "https://example-img-04.png",
          "https://example-img-05.png",
        ]}
        loop
        autoPlay
        isSwipeable
      >
        {(src) => <img src={src} alt="" />}
      </Carousel>,
    );

    debug();
  });

  it("Should render next and previous button", () => {
    expect(screen.queryByRole("button", { name: "next slide" })).toBeDefined();
    expect(screen.queryByRole("button", { name: "previous slide" })).toBeDefined();
  });

  it("Should render first slide by default", () => {
    expect(screen.queryByRole("button", { name: "Slide 1" })).toHaveAttribute(
      "data-selected",
      "true",
    );
  });

  it("Should be able to go to next slide", () => {
    const button = screen.getByRole("button", { name: "next slide" });
    fireEvent.click(button);
    expect(screen.queryByRole("button", { name: "Slide 2" })).toHaveAttribute(
      "data-selected",
      "true",
    );
  });

  it("Should be able to go to prev slide", () => {
    const next = screen.getByRole("button", { name: "next slide" });
    const prev = screen.getByRole("button", { name: "previous slide" });

    fireEvent.click(next);
    fireEvent.click(prev);

    expect(screen.queryByRole("button", { name: "Slide 1" })).toHaveAttribute(
      "data-selected",
      "true",
    );
  });

  it("Should be able to jump to particular slide", () => {
    const button = screen.getByRole("button", { name: "Slide 3" });

    fireEvent.click(button);

    expect(screen.queryByRole("button", { name: "Slide 3" })).toHaveAttribute(
      "data-selected",
      "true",
    );
  });
});
