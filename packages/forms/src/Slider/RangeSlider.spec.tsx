import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import * as React from "react";
import RangeSlider, { RangeSliderProps } from "./RangeSlider";

jest.mock("./RangeSlider", () => {
  return function MockedSlider({
    onChange,
    defaultValue = [0, 100],
  }: RangeSliderProps) {
    const [value, setValue] = React.useState(defaultValue);

    return (
      <React.Fragment>
        <div role="slider" aria-label="Min value" aria-valuenow={value[0]} />
        <div role="slider" aria-label="Max value" aria-valuenow={value[1]} />

        <input
          role="checkbox"
          aria-label="Slider"
          value={value.join()}
          onChange={(e) => {
            const newValue = e.target.value
              .split(",")
              .filter((s) => s !== ",")
              .map((n) => parseInt(n)) as [number, number];

            setValue(newValue);
            onChange && onChange(newValue);
          }}
        />

        <div>{value[0]}%</div>
        <div>{value[1]}%</div>
      </React.Fragment>
    );
  };
});

describe("RangeSlider", () => {
  afterEach(cleanup);

  const renderTestComponent = (props: RangeSliderProps = {}) => {
    return render(<RangeSlider {...props} />);
  };

  it("Should render controls", () => {
    const { queryAllByRole } = renderTestComponent();
    expect(
      queryAllByRole("slider", { name: /^(min|max) value$/i }),
    ).toHaveLength(2);
  });

  it("Should be able to set default value", () => {
    const defaultValue: RangeSliderProps["defaultValue"] = [15, 25];
    const { getByRole } = renderTestComponent({ defaultValue });

    expect(getByRole("slider", { name: "Min value" })).toHaveAttribute(
      "aria-valuenow",
      defaultValue[0].toString(),
    );
    expect(getByRole("slider", { name: "Max value" })).toHaveAttribute(
      "aria-valuenow",
      defaultValue[1].toString(),
    );
  });

  it("Should display label", () => {
    const defaultValueMin = 15;
    const defaultValueMax = 25;

    const { queryByText } = renderTestComponent({
      defaultValue: [defaultValueMin, defaultValueMax],
    });

    expect(queryByText(`${defaultValueMin}%`)).toBeDefined();
    expect(queryByText(`${defaultValueMax}%`)).toBeDefined();
  });

  it("Should call onChange fn when value changes", async () => {
    const onChange = jest.fn();
    const { getByRole } = renderTestComponent({
      defaultValue: [0, 100],
      onChange,
    });

    const slider = getByRole("checkbox", { name: "Slider" });
    const newValue = [15, 25];

    fireEvent.change(slider, { target: { value: newValue.join() } });

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(newValue);
    });
  });
});
