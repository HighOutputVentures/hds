import { ThemeProvider } from '@highoutput/hds';
import { TextField } from '@highoutput/hds-forms';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof TextField> = {
  title: 'Components/Forms/TextField',
  component: TextField,
};

export default Story;

const Template: StoryFn<typeof TextField> = (args) => {
  return (
    <ThemeProvider>
      <TextField {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  hint: 'This is a hint text to help user.',
  label: 'Email',
  placeholder: 'Enter your email',
};
