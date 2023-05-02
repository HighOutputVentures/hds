import { ThemeProvider } from '@highoutput/hds';
import { DatePickerInput } from '@highoutput/hds-date-picker';
import { useState } from '@storybook/addons';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof DatePickerInput> = {
  title: 'Components/DatePicker/DatePickerInput',
  component: DatePickerInput,
};

export default Story;

const Template: StoryFn<typeof DatePickerInput> = (args) => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <ThemeProvider>
      <DatePickerInput {...args} value={value} onChange={setValue} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  label: 'Birthday',
  hint: 'Age must be 18+',
  error: false,
  isReadOnly: false,
  isDisabled: false,
  placeholder: 'Select Date',
};
