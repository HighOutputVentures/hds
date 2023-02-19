import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";
import type { SliderProps } from "./Slider";
import invariant from "./utils";

type RangeSliderValue = [number, number];

type InheritedSliderProps = Omit<SliderProps, "onChange" | "defaultValue">;

type RangeBaseProps = {
  onChange?: (newValue: RangeSliderValue) => void;
  defaultValue?: RangeSliderValue;
};

export type RangeSliderProps = InheritedSliderProps & RangeBaseProps;

export default React.forwardRef<HTMLDivElement, RangeSliderProps>(function HdsRangeSlider(
  props,
  ref,
) {
  const { min, max, step, defaultValue, labeled, labelVariant, onChange, ...others } =
    Object.assign(defaultProps, props);

  const styles = useMultiStyleConfig("Slider", { variant: "hds" });

  const [value, setValue] = React.useState(defaultValue || []);

  return (
    <RangeSlider
      variant="hds"
      ref={ref}
      min={min}
      max={max}
      step={step}
      aria-label={["Min value", "Max value"]}
      orientation="horizontal"
      defaultValue={defaultValue}
      data-testid="hds.range-slider"
      onChange={(newValue) => {
        invariant(newValue.length === 2);
        setValue([newValue[0], newValue[1]]);
      }}
      onChangeEnd={(newValue) => {
        invariant(newValue.length === 2);
        onChange && onChange([newValue[0], newValue[1]]);
      }}
      sx={{
        ...others,
        ...styles.container,
      }}
    >
      <RangeSliderTrack data-testid="hds.range-slider.track">
        <RangeSliderFilledTrack data-testid="hds.range-slider.filled.track"/>
      </RangeSliderTrack>

      <RangeSliderThumb index={0} data-testid="hds.range-slider.thumb.0">
        {labeled && labelVariant === "static" && <Text sx={styles.staticLabel}>{value[0]}%</Text>}
        {labeled && labelVariant === "floating" && (
          <Text sx={styles.floatingLabel}>{value[0]}%</Text>
        )}
      </RangeSliderThumb>
      <RangeSliderThumb index={1} data-testid="hds.range-slider.thumb.1">
        {labeled && labelVariant === "static" && <Text sx={styles.staticLabel}>{value[1]}%</Text>}
        {labeled && labelVariant === "floating" && (
          <Text sx={styles.floatingLabel}>{value[1]}%</Text>
        )}
      </RangeSliderThumb>
    </RangeSlider>
  );
});

const defaultProps: Pick<
  RangeSliderProps,
  "min" | "max" | "step" | "defaultValue" | "labeled" | "labelVariant" | "onChange"
> = {
  min: 0,
  max: 100,
  step: 1,
  defaultValue: [0, 100],
  labeled: true,
  labelVariant: "static",
  onChange() {},
};
