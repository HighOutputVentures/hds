import { extendTheme } from "@chakra-ui/react";
import { useArgs } from "@storybook/addons";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import { ThemeProvider } from "../../hds/src";
import RangeSlider, { RangeSliderProps } from "./RangeSlider";
import withSlider from "./withSlider";

const meta: Meta = {
  title: "Components/Slider/RangeSlider",
  component: RangeSlider,
};

const Template: ComponentStory<typeof RangeSlider> = () => {
  const [args, setArgs] = useArgs();

  const handleChange = (value: RangeSliderProps["defaultValue"]) => {
    setArgs({ ...args, value });
  };

  return (
    <ThemeProvider theme={extendTheme(withSlider())}>
      <RangeSlider min={0} max={100} step={1} defaultValue={args.value} onChange={handleChange} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  min: 0,
  max: 100,
  step: 1,
  defaultValue: [25, 75],
};

export default meta;
