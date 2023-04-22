import { Box } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { RangeDatePickerInput } from '@highoutput/hds-date-picker';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof RangeDatePickerInput> = {
  title: 'Components/DatePicker/RangeDatePickerInput',
  component: RangeDatePickerInput,
};

export default Story;

const Template: StoryFn<typeof RangeDatePickerInput> = (args) => {
  return (
    <ThemeProvider>
      <Box p={4} h="340px">
        <RangeDatePickerInput width="340px" {...args} />
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
  placeholder: 'Select Dates',
};
