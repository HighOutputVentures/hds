import { Box } from "@chakra-ui/react";
import { ThemeProvider } from "@highoutput/hds";
import { useArgs } from "@storybook/addons";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import { DatePickerInput } from "./DatePickerInput";

const Story: Meta<typeof DatePickerInput> = {
  title: "Components/DatePicker/DatePickerInput",
  component: DatePickerInput,
};

export default Story;

const Template: ComponentStory<typeof DatePickerInput> = () => {
  const [args, setArgs] = useArgs();

  return (
    <ThemeProvider>
      <Box p={4} h="340px">
        <DatePickerInput
          {...args}
          width="340px"
          onChange={(newValue) =>
            setArgs({
              ...args,
              value: newValue,
            })
          }
        />
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
