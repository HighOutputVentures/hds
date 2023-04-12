import { ThemeProvider } from "@highoutput/hds";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import TextField from "./TextField";

const Story: Meta<typeof TextField> = {
  title: "Components/Forms/TextField",
  component: TextField,
};

export default Story;

const Template: ComponentStory<typeof TextField> = (args) => {
  return (
    <ThemeProvider>
      <TextField {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  hint: "This is a hint text to help user.",
  label: "Email",
  placeholder: "Enter your email",
};
