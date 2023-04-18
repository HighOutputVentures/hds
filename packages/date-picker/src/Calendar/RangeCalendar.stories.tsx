import { Box } from "@chakra-ui/react";
import { ThemeProvider } from "@highoutput/hds";
import { useArgs } from "@storybook/addons";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import { RangeCalendar } from "./RangeCalendar";

const Story: Meta<typeof RangeCalendar> = {
  title: "Components/DatePicker/RangeCalendar",
  component: RangeCalendar,
};

export default Story;

const Template: ComponentStory<typeof RangeCalendar> = () => {
  const [args, setArgs] = useArgs();

  return (
    <ThemeProvider>
      <Box p={4}>
        <RangeCalendar defaultValue={args.value} onApply={() => {}} onCancel={() => {}} />
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
