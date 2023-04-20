import { ThemeProvider } from "@highoutput/hds";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import OtpField from "./OtpField";

const Story: Meta<typeof OtpField> = {
  title: "Components/Forms/OtpField",
  component: OtpField,
};

export default Story;

const Template: ComponentStory<typeof OtpField> = (args) => {
  return (
    <ThemeProvider>
      <OtpField {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  error: true,
  label: "Enter OTP",
  hint: "This is a text to help user",
};
