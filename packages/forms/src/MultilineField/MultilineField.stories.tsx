import { ThemeProvider } from "@highoutput/hds";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import MultilineField from "./MultilineField";

const Story: Meta<typeof MultilineField> = {
  title: "Components/Forms/MultilineField",
  component: MultilineField,
};

export default Story;

const Template: ComponentStory<typeof MultilineField> = (args) => {
  return (
    <ThemeProvider>
      <MultilineField {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  hint: "This is a hint text to help user.",
  label: "Message",
  error: false,
  placeholder: "Enter you message...",
};