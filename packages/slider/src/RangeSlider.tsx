import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  SystemStyleObject,
} from "@chakra-ui/react";
import * as React from "react";
import invariant from "./utils";

type RangeSliderValue = [min: number, max: number];

type RangeSliderBaseProps = {
  min: number;
  max: number;
  step: number;
  onChange: (newValue: RangeSliderValue) => void;
  defaultValue: RangeSliderValue;
};

type StylingProps = Omit<SystemStyleObject, "value">;

export type RangeSliderProps = Partial<RangeSliderBaseProps> & StylingProps;

export default React.forwardRef<HTMLDivElement, RangeSliderProps>(function HdsRangeSlider(
  props,
  ref,
) {
  const { min, max, step, defaultValue, onChange, ...others } = Object.assign(defaultProps, props);

  return (
    <RangeSlider
      variant="hds"
      ref={ref}
      min={min}
      max={max}
      step={step}
      aria-label={["Min value", "Max Value"]}
      orientation="horizontal"
      defaultValue={defaultValue}
      onChangeEnd={(value) => {
        invariant(value.length === 2);
        onChange([value[0], value[1]]);
      }}
      sx={others}
    >
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>
  );
});

const defaultProps: Pick<RangeSliderBaseProps, "min" | "max" | "step" | "defaultValue"> = {
  min: 0,
  max: 100,
  step: 1,
  defaultValue: [0, 100],
};
