import { ThemeProvider } from '@highoutput/hds';
import { MultiSelectField } from '@highoutput/hds-forms';
import { useArgs } from '@storybook/addons';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof MultiSelectField> = {
  title: 'Components/Forms/MultiSelectField',
  component: MultiSelectField,
};

export default Story;

const Template: StoryFn<typeof MultiSelectField> = () => {
  const [args, setArgs] = useArgs();

  return (
    <ThemeProvider>
      <MultiSelectField
        label="Label"
        error="This is an error"
        hint="This is a helper"
        placeholder="Type here"
        options={[
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
          { label: 'Option 3', value: 3 },
          { label: 'Option 4', value: 4 },
          { label: 'Option 5', value: 5 },
        ]}
        value={args.value}
        onChange={(value) => {
          setArgs({
            ...args,
            value,
          });
        }}
      />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  value: [2],
};
