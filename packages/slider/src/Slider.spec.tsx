import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import * as React from "react";
import { extendTheme, ThemeProvider } from "../../hds/src";
import Slider, { SliderProps } from "./Slider";
import withSlider from "./withSlider";

jest.mock("./Slider", () => {
  return function MockedSlider({
    min = 0,
    max = 100,
    step = 1,
    onChange,
    defaultValue = 0,
  }: SliderProps) {
    const [value, setValue] = React.useState(defaultValue ?? 0);

    return (
      <React.Fragment>
        <input
          role="slider"
          type="range"
          min={min}
          max={max}
          step={step}
          defaultValue={defaultValue}
          onChange={(e) => {
            setValue(parseInt(e.target.value));
            onChange && onChange(parseInt(e.target.value));
          }}
        />
        <div>{value}%</div>
      </React.Fragment>
    );
  };
});

describe("RangeSlider", () => {
  afterEach(cleanup);

  const renderTestComponent = (props: SliderProps = {}) => {
    return render(
      <ThemeProvider theme={extendTheme(withSlider())}>
        <Slider {...props} />
      </ThemeProvider>,
    );
  };

  it("Should render control", () => {
    const { queryByRole } = renderTestComponent();

    expect(queryByRole("slider")).toBeDefined();
  });

  it("Should be able to set default value", () => {
    const defaultValue = 15;
    const { getByRole } = renderTestComponent({ defaultValue });

    expect(getByRole("slider")).toHaveValue(defaultValue.toString());
  });

  it("Should display label", () => {
    const defaultValue = 50;
    const { queryByText } = renderTestComponent({ defaultValue });
    expect(queryByText(`${defaultValue}%`)).toBeDefined();
  });

  it("Should call onChange fn when value changes", async () => {
    const onChange = jest.fn();
    const { getByRole } = renderTestComponent({ defaultValue: 0, onChange });
    const slider = getByRole("slider");

    fireEvent.change(slider, { target: { value: 90 } });
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(90);
    });
  });
});
