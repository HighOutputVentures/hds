import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as React from "react";
import RangeSlider, { RangeSliderProps } from "./RangeSlider";

describe("RangeSlider", () => {
  const renderTestComponent = (props: RangeSliderProps = {}) => {
    return render(<RangeSlider {...props} />);
  };

  it.skip("Should render range input", () => {
    const { debug } = renderTestComponent();

    debug();
    expect(true).toBeDefined();
  });

  it.todo("Should render controls");

  it.todo("Should be able to set default value");

  it.todo("Should be able to adjust value index 0");

  it.todo("Should be able to adjust value index 1");

  it.todo("Should call onChange fn when value changes");

  it.todo("Should display min label");

  it.todo("Should display max label");
});
