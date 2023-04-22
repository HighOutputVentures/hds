import { ThemeProvider } from '@highoutput/hds';
import { Switch } from '@highoutput/hds-forms';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof Switch> = {
  title: 'Components/Forms/Switch',
  component: Switch,
};

export default Story;

const Template: StoryFn<typeof Switch> = (args) => {
  return (
    <ThemeProvider>
      <Switch {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  size: 'md',
  hint: 'Save my login details for next time.',
  label: 'Remember me',
  isChecked: false,
  isDisabled: false,
  colorScheme: 'light',
};
