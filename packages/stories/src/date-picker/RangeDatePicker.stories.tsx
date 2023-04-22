import { Box } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { RangeDatePicker } from '@highoutput/hds-date-picker';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof RangeDatePicker> = {
  title: 'Components/DatePicker/RangeDatePicker',
  component: RangeDatePicker,
};

export default Story;

const Template: StoryFn<typeof RangeDatePicker> = (args) => {
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
