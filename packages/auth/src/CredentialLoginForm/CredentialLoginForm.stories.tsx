import { ThemeProvider } from "@highoutput/hds";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import CredentialLoginForm from "./CredentialLoginForm";

const Story: Meta<typeof CredentialLoginForm> = {
  title: "Templates/Login/CredentialLoginForm",
  component: CredentialLoginForm,
};

export default Story;

const Template: ComponentStory<typeof CredentialLoginForm> = (args) => (
  <ThemeProvider>
    <CredentialLoginForm maxW="400px" {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  variant: "email-password",
  onSubmit(data) {
    alert(JSON.stringify(data));
  },
};
