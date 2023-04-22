import { ThemeProvider } from '@highoutput/hds';
import { MultilineField } from '@highoutput/hds-forms';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof MultilineField> = {
  title: 'Components/Forms/MultilineField',
  component: MultilineField,
};

export default Story;

const Template: StoryFn<typeof MultilineField> = (args) => {
  return (
    <ThemeProvider>
      <MultilineField {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  hint: 'This is a hint text to help user.',
  label: 'Message',
  error: false,
  placeholder: 'Enter you message...',
};
