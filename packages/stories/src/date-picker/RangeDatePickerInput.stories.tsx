import { ThemeProvider } from '@highoutput/hds';
import { RangeDatePickerInput } from '@highoutput/hds-date-picker';
import { useState } from '@storybook/addons';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof RangeDatePickerInput> = {
  title: 'Components/DatePicker/RangeDatePickerInput',
  component: RangeDatePickerInput,
};

export default Story;

const Template: StoryFn<typeof RangeDatePickerInput> = (args) => {
  const [value, setValue] = useState<
    | {
        start: Date;
        until: Date;
      }
    | undefined
  >(undefined);

  return (
    <ThemeProvider>
      <RangeDatePickerInput {...args} value={value} onChange={setValue} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  error: false,
  isReadOnly: false,
  isDisabled: false,
  placeholder: 'Select Dates',
  label: 'Select Range',
  hint: 'This is a hint to help user',
};
