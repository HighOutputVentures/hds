import { extendTheme } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import { ThemeProvider } from "../../hds/src";
import RangeSlider from "./RangeSlider";
import withRangeSlider from "./withRangeSlider";

export default {
  title: "Components/Slider/RangeSlider",
  component: RangeSlider,
  argTypes: {
    size: {
      name: "size",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: "md",
      control: "select",
      options: ["sm", "RangeSlider"],
    },
  },
} as ComponentMeta<typeof RangeSlider>;

const Template: ComponentStory<typeof RangeSlider> = (args) => {
  return (
    <ThemeProvider theme={extendTheme(withRangeSlider())}>
      <RangeSlider {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};
