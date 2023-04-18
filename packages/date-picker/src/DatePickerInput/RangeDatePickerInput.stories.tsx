import { Box } from "@chakra-ui/react";
import { ThemeProvider } from "@highoutput/hds";
import { useArgs } from "@storybook/addons";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import { RangeDatePickerInput } from "./RangeDatePickerInput";

const Story: Meta<typeof RangeDatePickerInput> = {
  title: "Components/DatePicker/RangeDatePickerInput",
  component: RangeDatePickerInput,
};

export default Story;

const Template: ComponentStory<typeof RangeDatePickerInput> = () => {
  const [args, setArgs] = useArgs();

  return (
    <ThemeProvider>
      <Box p={4} h="340px">
        <RangeDatePickerInput
          {...args}
          width="340px"
          onChange={(newValue) => {
            setArgs({
              ...args,
              value: newValue,
            });
          }}
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
  placeholder: "Select Dates",
  zIndex: 1,
};
