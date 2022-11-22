import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  SystemStyleObject,
  Text,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";

type RangeSliderLabelVariant = "static" | "floating";

type SliderBaseProps = {
  min?: number;
  max?: number;
  step?: number;
  onChange?: (newValue: number) => void;
  defaultValue?: number;
  labeled?: boolean;
  labelVariant?: RangeSliderLabelVariant;
};

export type SliderProps = SliderBaseProps & Omit<SystemStyleObject, "value">;

export default React.forwardRef<HTMLDivElement, SliderProps>(function HdsSlider(props, ref) {
  const { min, max, step, defaultValue, labeled, labelVariant, onChange, ...others } =
    Object.assign(defaultProps, props);

  const styles = useMultiStyleConfig("Slider", { variant: "hds" });

  const [value, setValue] = React.useState(defaultValue);

  return (
    <Slider
      variant="hds"
      ref={ref}
      min={min}
      max={max}
      step={step}
      aria-label="Value"
      orientation="horizontal"
      defaultValue={defaultValue}
      onChange={setValue}
      onChangeEnd={onChange}
      sx={{
        ...others,
        ...styles.container,
      }}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>

      <SliderThumb>
        {labeled && labelVariant === "static" && <Text sx={styles.staticLabel}>{value}%</Text>}
        {labeled && labelVariant === "floating" && <Text sx={styles.floatingLabel}>{value}%</Text>}
      </SliderThumb>
    </Slider>
  );
});

// prettier-ignore
const defaultProps: Pick<
  SliderProps,
  | "min"
  | "max"
  | "step"
  | "defaultValue"
  | "labeled"
  | "labelVariant"
  | "onChange"
> = {
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 0,
  labeled: true,
  labelVariant: "static",
  onChange(){}
};
