import { ThemeProvider } from '@highoutput/hds';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ArrayField from './ArrayField';
import ArrayFieldMDX from './ArrayField.mdx';

export default {
  title: 'Components/Array Field',
  component: ArrayField,
  parameters: {
    docs: {
      page: ArrayFieldMDX,
    },
  },
} as ComponentMeta<typeof ArrayField>;

const Template: ComponentStory<typeof ArrayField> = (args) => (
  <ThemeProvider>
    <ArrayField {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  placeholder: 'Enter an Input',
  defaultValues: {
    input: [
      {
        value: '',
      },
    ],
  },
  maxValue: 10,
};
