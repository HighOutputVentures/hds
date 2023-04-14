import { Box } from "@chakra-ui/react";
import { ThemeProvider } from "@highoutput/hds/src";
import { ComponentStory, Meta } from "@storybook/react";
import React from "react";
import Radio from "./Radio";

const Story: Meta<typeof Radio> = {
  title: "Components/Forms/Radio",
  component: Radio,
};

export default Story;

const Template: ComponentStory<typeof Radio> = (args) => {
  return (
    <ThemeProvider>
      <Box p={4}>
        <Radio {...args} />
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
  label: "Remember me",
  hint: "Save my login details for next time.",
};
