import { Box } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { DatePicker } from '@highoutput/hds-date-picker';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker/Calendar',
  component: DatePicker,
};

export default Story;

const Template: StoryFn<typeof DatePicker> = (args) => {
  return (
    <ThemeProvider>
      <Box p={4}>
        <DatePicker {...args} />
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
