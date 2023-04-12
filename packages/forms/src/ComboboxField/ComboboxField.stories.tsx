import { Box } from "@chakra-ui/react";
import { ThemeProvider } from "@highoutput/hds";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import ComboboxField from "./ComboboxField";

const Story: Meta<typeof ComboboxField> = {
  title: "Components/Forms/ComboboxField",
  component: ComboboxField,
};

export default Story;

enum IdEnum {
  One = "One",
  Two = "Two",
  Three = "Three",
  Four = "Four",
  Five = "Five",
}

const Template: ComponentStory<typeof ComboboxField> = (args) => {
  return (
    <ThemeProvider>
      <Box height="500px">
        <ComboboxField {...args} />
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  error: false,
  label: "Label",
  hint: "This is a hint",
  options: [
    { value: IdEnum.One, label: "John" },
    { value: IdEnum.Two, label: "Paul" },
    { value: IdEnum.Three, label: "Mark" },
    { value: IdEnum.Four, label: "Mary" },
    { value: IdEnum.Five, label: "Jake" },
  ],
  placeholder: "Please Select",
  isClearable: true,
  isDisabled: false,
  onChange(newValue) {
    alert(JSON.stringify({ newValue }));
  },
};
