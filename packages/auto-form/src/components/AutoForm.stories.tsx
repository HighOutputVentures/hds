import { ThemeProvider } from '@highoutput/hds';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import AutoForm from './AutoForm';
import AutoFormMDX from './AutoForm.mdx';
import { autoFormSchema } from './validations';

export default {
  title: 'Components/Auto Form',
  component: AutoForm,
  parameters: {
    docs: {
      page: AutoFormMDX,
    },
  },
} as ComponentMeta<typeof AutoForm>;

const Template: ComponentStory<typeof AutoForm> = (args) => (
  <ThemeProvider>
    <AutoForm {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  yupSchema: autoFormSchema,
  placeholders: ['Enter title', 'Enter description'],
};
