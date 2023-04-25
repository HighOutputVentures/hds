import { ThemeProvider } from '@highoutput/hds';
import { SearchField } from '@highoutput/hds-forms';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof SearchField> = {
  title: 'Components/Forms/SearchField',
  component: SearchField,
};

export default Story;

const Template: StoryFn<typeof SearchField> = (args) => {
  return (
    <ThemeProvider>
      <SearchField {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  hint: 'This is a hint text to help user.',
  label: 'Search',
  placeholder: 'Enter keyword',
  error: false,
  isDisabled: false,
};
