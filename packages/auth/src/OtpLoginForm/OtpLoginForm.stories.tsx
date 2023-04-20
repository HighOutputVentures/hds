import { ThemeProvider } from "@highoutput/hds";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import { OtpLoginForm } from "./OtpLoginForm";

const Story: Meta<typeof OtpLoginForm> = {
  title: "Templates/Login/OtpLoginForm",
  component: OtpLoginForm,
};

export default Story;

const Template: ComponentStory<typeof OtpLoginForm> = (args) => (
  <ThemeProvider>
    <OtpLoginForm {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  onSubmit(data: unknown) {
    alert(JSON.stringify(data));
  },
};
