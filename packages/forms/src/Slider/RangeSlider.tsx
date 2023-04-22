import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Tooltip,
} from '@chakra-ui/react';
import * as React from 'react';
import { useStyles } from './hooks';
import type { SliderProps } from './Slider';

type RangeSliderValue = [number, number];

type InheritedSliderProps = Omit<SliderProps, 'onChange' | 'defaultValue'>;

type RangeBaseProps = {
  onChange?: (newValue: RangeSliderValue) => void;
  defaultValue?: RangeSliderValue;
};

export type RangeSliderProps = InheritedSliderProps & RangeBaseProps;

export default React.forwardRef<HTMLDivElement, RangeSliderProps>(function HdsRangeSlider(
  props,
  ref,
) {
  const {
    min = 0,
    max = 100,
    step = 1,
    defaultValue = [0, 100],
    hasLabel,
    keepLabelOpened,
    onChange,
    ...others
  } = props;

  const [value, setValue] = React.useState(defaultValue || []);
  const styles = useStyles();

  return (
    <RangeSlider
      variant="hds"
      ref={ref}
      min={min}
      max={max}
      step={step}
      aria-label={['Min value', 'Max value']}
      orientation="horizontal"
      defaultValue={defaultValue}
      data-testid="hds.range-slider"
      onChange={(newValue) => {
        setValue([newValue[0], newValue[1]]);
      }}
      onChangeEnd={(newValue) => {
        onChange && onChange([newValue[0], newValue[1]]);
      }}
      sx={{
        ...styles.slider,
        ...others,
      }}
    >
      <RangeSliderTrack sx={styles.track} data-testid="hds.range-slider.track">
        <RangeSliderFilledTrack
          sx={styles.filledTrack}
          data-testid="hds.range-slider.filled.track"
        />
      </RangeSliderTrack>

      <Tooltip
        label={<React.Fragment>{value[0]}%</React.Fragment>}
        placement="top"
        sx={styles.tooltip}
        isOpen={!hasLabel ? false : keepLabelOpened ? true : undefined}
      >
        <RangeSliderThumb
          index={0}
          sx={styles.thumb}
          data-testid="hds.range-slider.thumb.0"
        />
      </Tooltip>

      <Tooltip
        label={<React.Fragment>{value[1]}%</React.Fragment>}
        placement="top"
        sx={styles.tooltip}
        isOpen={!hasLabel ? false : keepLabelOpened ? true : undefined}
      >
        <RangeSliderThumb
          index={1}
          sx={styles.thumb}
          data-testid="hds.range-slider.thumb.1"
        />
      </Tooltip>
    </RangeSlider>
  );
});
