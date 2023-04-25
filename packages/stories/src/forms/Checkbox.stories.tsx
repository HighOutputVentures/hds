import { Box } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { Checkbox } from '@highoutput/hds-forms';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof Checkbox> = {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
};

export default Story;

const Template: StoryFn<typeof Checkbox> = (args) => {
  return (
    <ThemeProvider>
      <Box p={4}>
        <Checkbox {...args} />
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  size: 'md',
  variant: 'outline',
  isChecked: false,
  isDisabled: false,
  isIndeterminate: false,
  label: 'Remember me',
  hint: 'Save my login details for next time.',
};
