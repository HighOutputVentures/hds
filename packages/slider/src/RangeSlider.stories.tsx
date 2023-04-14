import { Box } from "@chakra-ui/react";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import { ThemeProvider } from "../../hds/src";
import RangeSlider from "./RangeSlider";

const Story: Meta<typeof RangeSlider> = {
  title: "Components/Slider/RangeSlider",
  component: RangeSlider,
};

const Template: ComponentStory<typeof RangeSlider> = (args) => {
  return (
    <ThemeProvider>
      <Box py={16} px={8}>
        <RangeSlider {...args} />
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  min: 0,
  max: 100,
  step: 1,
  defaultValue: [25, 75],
  hasLabel: false,
  keepLabelOpened: false,
};

export default Story;
