import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as React from "react";
import Slider, { SliderProps } from "./Slider";

describe("RangeSlider", () => {
  const renderTestComponent = (props: SliderProps = {}) => {
    return render(<Slider {...props} />);
  };

  it.skip("Should render range input", () => {
    const { debug } = renderTestComponent();

    debug();
    expect(true).toBeDefined();
  });

  it.todo("Should render controls");

  it.todo("Should be able to set default value");

  it.todo("Should be able to adjust value");

  it.todo("Should call onChange fn when value changes");

  it.todo("Should display label");
});
