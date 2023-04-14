import { Box } from "@chakra-ui/react";
import { ThemeProvider } from "@highoutput/hds/src";
import { ComponentStory, Meta } from "@storybook/react";
import React from "react";
import Checkbox from "./Checkbox";

const Story: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
};

export default Story;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <ThemeProvider>
      <Box p={4}>
        <Checkbox {...args} />
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  size: "md",
  variant: "outline",
  isChecked: false,
  isDisabled: false,
  isIndeterminate: false,
  label: "Remember me",
  hint: "Save my login details for next time.",
};
