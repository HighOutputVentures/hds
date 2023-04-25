import { Box } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { RangeDatePickerDropdown } from '@highoutput/hds-date-picker';
import { Button } from '@highoutput/hds-forms';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof RangeDatePickerDropdown> = {
  title: 'Components/DatePicker/RangeDatePickerDropdown',
  component: RangeDatePickerDropdown,
};

export default Story;

const Template: StoryFn<typeof RangeDatePickerDropdown> = (args) => {
  return (
    <ThemeProvider>
      <Box height="400px" padding={4}>
        <RangeDatePickerDropdown {...args}>
          {({ onToggle }) => <Button onClick={onToggle}>Open</Button>}
        </RangeDatePickerDropdown>

        <Box mt={4}>Hello</Box>
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
