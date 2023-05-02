import { Box } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { ComboboxField } from '@highoutput/hds-forms';
import { useState } from '@storybook/addons';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof ComboboxField> = {
  title: 'Components/Forms/ComboboxField',
  component: ComboboxField,
};

export default Story;

const options = [
  { value: 1, label: 'John' },
  { value: 2, label: 'Paul' },
  { value: 3, label: 'Mark' },
  { value: 4, label: 'Mary' },
  { value: 5, label: 'Jake' },
];

const Template: StoryFn<typeof ComboboxField> = (args) => {
  const [state, setState] = useState<number | null>(options[0].value);

  return (
    <ThemeProvider>
      <Box height="500px">
        <ComboboxField<{
          label: string;
          value: number;
        }>
          {...args}
          options={options}
          value={state}
          onChange={setState}
        />
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  error: false,
  label: 'Label',
  hint: 'This is a hint',
  placeholder: 'Please Select',
  isClearable: true,
  isDisabled: false,
  onChange(newValue) {
    alert(JSON.stringify({ newValue }));
  },
};
