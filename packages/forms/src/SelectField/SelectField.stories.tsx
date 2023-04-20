import { Box, ThemeProvider } from "@highoutput/hds";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import SelectField from "./SelectField";

const Story: Meta<typeof SelectField> = {
  title: "Components/Forms/SelectField",
  component: SelectField,
};

export default Story;

enum Color {
  Red,
  Blue,
  Green,
}

const Template: ComponentStory<typeof SelectField> = (args) => {
  return (
    <ThemeProvider>
      <Box h="400px">
        <SelectField {...args} />
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  options: [
    {
      label: "Red",
      value: Color.Red,
    },
    {
      label: "Blue",
      value: Color.Blue,
    },
    {
      label: "Green",
      value: Color.Green,
    },
  ],
  placeholder: "Select Item",
  hint: "This is a hint to help user",
  label: "Color",
  error: false,
  isDisabled: false,
  isClearable: true,
};
