import { ThemeProvider } from "@highoutput/hds";
import { ComponentStory, Meta } from "@storybook/react";
import React from "react";
import SocialButton from "./SocialButton";

const Story: Meta<typeof SocialButton> = {
  title: "Components/Button/SocialButton",
  component: SocialButton,
};

export default Story;

const Template: ComponentStory<typeof SocialButton> = (args) => (
  <ThemeProvider>
    <SocialButton {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  icon: "google",
  label: "Sign in with Google",
};
