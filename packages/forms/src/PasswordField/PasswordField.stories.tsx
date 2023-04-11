import { ThemeProvider } from "@highoutput/hds";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import PasswordField from "./PasswordField";

const meta: Meta<typeof PasswordField> = {
  title: "Components/Forms/PasswordField",
  component: PasswordField,
};

export default meta;

const Template: ComponentStory<typeof PasswordField> = (args) => {
  return (
    <ThemeProvider>
      <PasswordField {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  label: "Password",
  placeholder: "Please enter your password",
  hint: "Password must be 8 or more chars",
};
