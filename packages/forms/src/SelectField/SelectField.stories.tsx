import { ThemeProvider } from '@highoutput/hds';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import SelectField from './SelectField';

export default {
  title: 'Components/Form Fields/Select Field',
  component: SelectField,
  argTypes: {
    variant: {
      name: 'variant',
      type: {
        name: 'string',
        required: false,
      },
      defaultValue: 'outline',
      control: 'select',
      options: ['outline', 'filled', 'flushed', 'unstyled'],
    },
  },
} as ComponentMeta<typeof SelectField>;

const Template: ComponentStory<typeof SelectField> = (args) => (
  <ThemeProvider>
    <SelectField {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  id: 'category',
  label: 'Category',
  placeholder: 'Select category',
  options: [{ label: 'test', value: 'test' }],
};
