import { ThemeProvider } from '@highoutput/hds';
import { PasswordField } from '@highoutput/hds-forms';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof PasswordField> = {
  title: 'Components/Forms/PasswordField',
  component: PasswordField,
};

export default Story;

const Template: StoryFn<typeof PasswordField> = (args) => {
  return (
    <ThemeProvider>
      <PasswordField {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  label: 'Password',
  placeholder: 'Please enter your password',
  hint: 'Password must be 8 or more chars',
};
