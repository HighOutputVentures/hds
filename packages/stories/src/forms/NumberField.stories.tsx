import { ThemeProvider } from '@highoutput/hds';
import { NumberField } from '@highoutput/hds-forms';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof NumberField> = {
  title: 'Components/Forms/NumberField',
  component: NumberField,
};

export default Story;

const Template: StoryFn<typeof NumberField> = (args) => {
  return (
    <ThemeProvider>
      <NumberField {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  hint: 'This is a hint text to help user.',
  label: 'Count',
  placeholder: 'Enter number',
  error: false,
  isDisabled: false,
};
