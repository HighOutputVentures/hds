import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  SystemStyleObject,
  Tooltip,
} from "@chakra-ui/react";
import * as React from "react";
import { useStyles } from "./hooks";

type SliderBaseProps = {
  min?: number;
  max?: number;
  step?: number;
  onChange?: (newValue: number) => void;
  defaultValue?: number;
  hasLabel?: boolean;
  keepLabelOpened?: boolean;
};

export type SliderProps = SliderBaseProps & Omit<SystemStyleObject, "value">;

export default React.forwardRef<HTMLDivElement, SliderProps>(function HdsSlider(
  props,
  ref,
) {
  const {
    min = 0,
    max = 100,
    step = 1,
    defaultValue = 0,
    hasLabel,
    keepLabelOpened,
    onChange,
    ...others
  } = props;

  const [value, setValue] = React.useState(defaultValue);
  const styles = useStyles();

  return (
    <Slider
      ref={ref}
      min={min}
      max={max}
      step={step}
      aria-label="Value"
      orientation="horizontal"
      defaultValue={defaultValue}
      data-testid="hds.slider"
      onChange={setValue}
      onChangeEnd={onChange}
      sx={{
        ...styles.slider,
        ...others,
      }}
    >
      <SliderTrack sx={styles.track} data-testid="hds.slider.track">
        <SliderFilledTrack
          sx={styles.filledTrack}
          data-testid="hds.slider.filled.track"
        />
      </SliderTrack>

      <Tooltip
        label={<React.Fragment>{value}%</React.Fragment>}
        placement="top"
        sx={styles.tooltip}
        isOpen={!hasLabel ? false : keepLabelOpened ? true : undefined}
      >
        <SliderThumb sx={styles.thumb} data-testid="hds.slider.thumb" />
      </Tooltip>
    </Slider>
  );
});
