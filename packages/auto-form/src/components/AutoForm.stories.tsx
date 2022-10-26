import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ThemeProvider from '../../../hds/src/components/ThemeProvider';
import AutoForm from './AutoForm';
import { autoFormSchema } from './validations';
import AutoFormMDX from './AutoForm.mdx';

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
