import { ThemeProvider } from "@highoutput/hds";
import { ComponentStory, Meta } from "@storybook/react";
import React from "react";
import Switch from "./Switch";

const Story: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
};

export default Story;

const Template: ComponentStory<typeof Switch> = (args) => {
  return (
    <ThemeProvider>
      <Switch {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  size: "md",
  hint: "Save my login details for next time.",
  label: "Remember me",
  isChecked: false,
  isDisabled: false,
  colorScheme: "light",
};
