import { Box, extendTheme } from "@chakra-ui/react";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import { ThemeProvider } from "../../hds/src";
import RangeSlider from "./RangeSlider";
import withSlider from "./withSlider";

const meta: Meta = {
  title: "Components/Slider/RangeSlider",
  component: RangeSlider,
  argTypes: {
    labelVariant: {
      name: "labelVariant",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: "floating",
      control: "select",
      options: ["floating", "static"],
    },
  },
};

const Template: ComponentStory<typeof RangeSlider> = (args) => {
  return (
    <ThemeProvider theme={extendTheme(withSlider())}>
      <Box py={16} px={8}>
        <RangeSlider {...args} />
      </Box>
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
