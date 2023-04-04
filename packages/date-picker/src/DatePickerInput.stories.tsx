import { Box } from "@chakra-ui/react";
import ThemeProvider from "@highoutput/hds/src/components/ThemeProvider";
import { useArgs } from "@storybook/addons";
import { ComponentStory, Meta } from "@storybook/react";
import { format } from "date-fns";
import * as React from "react";
import { DatePicker } from "./DatePicker";
import DatePickerInput from "./DatePickerInput";

const meta: Meta<typeof DatePickerInput> = {
  title: "Components/DatePicker/DatePickerInput",
  component: DatePickerInput,
};

export default meta;

const Template: ComponentStory<typeof DatePicker> = () => {
  const [args, setArgs] = useArgs();

  return (
    <ThemeProvider>
      <Box height="500px">
        <DatePickerInput
          width="340px"
          value={args.value}
          isClearable
          placeholder="Select Date"
          onChange={(value) => {
            setArgs({ ...args, value });

            if (value) {
              console.log(format(value, "MMM dd, yyyy"));
            } else {
              console.log("No value");
            }
          }}
        />
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};