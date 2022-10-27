import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ThemeProvider from '../../../hds/src/components/ThemeProvider';
import ContactForm from './ContactForm';
import ContactFormMDX from './ContactForm.mdx';

export default {
  title: 'Layouts/Contact/Contact Form',
  component: ContactForm,
  parameters: {
    docs: {
      page: ContactFormMDX,
    },
  },
} as ComponentMeta<typeof ContactForm>;

const Template: ComponentStory<typeof ContactForm> = (args) => (
  <ThemeProvider>
    <ContactForm {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
