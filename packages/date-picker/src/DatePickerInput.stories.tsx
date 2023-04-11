import { Box } from "@chakra-ui/react";
import ThemeProvider from "@highoutput/hds/src/components/ThemeProvider";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import DatePickerInput from "./DatePickerInput";

const meta: Meta<typeof DatePickerInput> = {
  title: "Components/DatePicker/DatePickerInput",
  component: DatePickerInput,
};

export default meta;

const Template: ComponentStory<typeof DatePickerInput> = (args) => {
  return (
    <ThemeProvider>
      <Box p={4} h="340px">
        <DatePickerInput width="340px" {...args} />
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  isInvalid: false,
  isReadOnly: false,
  isDisabled: false,
  isClearable: true,
  placeholder: "Select Date",
  zIndex: 1,
};
