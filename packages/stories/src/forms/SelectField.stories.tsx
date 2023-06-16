import { ThemeProvider } from '@highoutput/hds';
import { Badge } from '@highoutput/hds-badge';
import { SelectField } from '@highoutput/hds-forms';
import { useState } from '@storybook/addons';
import { Meta, StoryFn } from '@storybook/react';
import { RenderOption } from 'packages/forms/src/SelectField/SelectField';
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
  const valueOpt: RenderOption<{ value: Color; label: string }> = ({ label, value }) => {
    return value === Color.Red ? (
      <Badge accent="error" label="Red" />
    ) : value === Color.Blue ? (
      <Badge accent="blue" label={label} />
    ) : (
      <Badge accent="success" label={label} />
    );
  };
  return (
    <ThemeProvider>
      <SelectField<{
        label: string;
        value: Color;
      }>
        {...args}
        options={options}
        renderOption={valueOpt}
        renderValue={valueOpt}
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
