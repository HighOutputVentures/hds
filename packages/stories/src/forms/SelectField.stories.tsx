import { ThemeProvider } from '@highoutput/hds';
import { SelectField } from '@highoutput/hds-forms';
import { useState } from '@storybook/addons';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof SelectField> = {
  title: 'Components/Forms/SelectField',
  component: SelectField,
};

export default Story;

enum Color {
  Red,
  Blue,
  Green,
}

const options = [
  {
    label: 'Red',
    value: Color.Red,
  },
  {
    label: 'Blue',
    value: Color.Blue,
  },
  {
    label: 'Green',
    value: Color.Green,
  },
];

const Template: StoryFn<typeof SelectField> = (args) => {
  const [state, setState] = useState(options[0].value);

  return (
    <ThemeProvider>
      <SelectField<{
        label: string;
        value: Color;
      }>
        {...args}
        options={options}
        value={state}
        onChange={setState}
      />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  placeholder: 'Select Item',
  hint: 'This is a hint to help user',
  label: 'Color',
  error: false,
  isDisabled: false,
};
