import { ThemeProvider } from "@highoutput/hds";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import SearchField from "./SearchField";

const Story: Meta<typeof SearchField> = {
  title: "Components/Forms/SearchField",
  component: SearchField,
};

export default Story;

const Template: ComponentStory<typeof SearchField> = (args) => {
  return (
    <ThemeProvider>
      <SearchField {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  hint: "This is a hint text to help user.",
  label: "Search",
  placeholder: "Enter keyword",
  error: false,
  isDisabled: false,
};
