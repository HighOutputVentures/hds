import { Box } from "@chakra-ui/react";
import { ThemeProvider } from "@highoutput/hds";
import { ComponentStory, Meta } from "@storybook/react";
import * as React from "react";
import { RangeDatePicker } from "./RangeDatePicker";

const Story: Meta<typeof RangeDatePicker> = {
  title: "Components/DatePicker/RangeDatePicker",
  component: RangeDatePicker,
};

export default Story;

const Template: ComponentStory<typeof RangeDatePicker> = (args) => {
  return (
    <ThemeProvider>
      <Box p={4}>
        <RangeDatePicker {...args} />
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  events: [],
  hasTimeAdverbial: true,
  includePreviousMonth: true,
  onApply(value: unknown) {
    console.log({ value });
  },
  onCancel(value: unknown) {
    console.log(value);
  },
};
