import { Box } from "@chakra-ui/react";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import { ThemeProvider } from "../../hds/src";
import Slider from "./Slider";

const Story: Meta<typeof Slider> = {
  title: "Components/Slider/Slider",
  component: Slider,
};

const Template: ComponentStory<typeof Slider> = (args) => {
  return (
    <ThemeProvider>
      <Box p={12}>
        <Slider {...args} />
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
  defaultValue: 25,
  hasLabel: true,
  keepLabelOpened: false,
};

export default Story;
