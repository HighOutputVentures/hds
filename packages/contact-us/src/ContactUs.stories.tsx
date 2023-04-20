import { ThemeProvider } from "@highoutput/hds";
import { ComponentStory, Meta } from "@storybook/react";
import React from "react";
import { ContactUs } from "./ContactUs";

const Story: Meta<typeof ContactUs> = {
  title: "Templates/ContactUs",
  component: ContactUs,
};

export default Story;

const Template: ComponentStory<typeof ContactUs> = (args) => (
  <ThemeProvider>
    <ContactUs {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  url: "https://jsonplaceholder.typicode.com/posts",
};
