import { Box } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { DatePickerInput } from '@highoutput/hds-date-picker';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof DatePickerInput> = {
  title: 'Components/DatePicker/DatePickerInput',
  component: DatePickerInput,
};

export default Story;

const Template: StoryFn<typeof DatePickerInput> = (args) => {
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
  placeholder: 'Select Date',
  zIndex: 1,
};
