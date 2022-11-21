import { ThemeProvider } from '@highoutput/hds';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ContactPage from './ContactPage';
import ContactPageMDX from './ContactPage.mdx';

export default {
  title: 'Layouts/Contact/Contact Page',
  component: ContactPage,
  parameters: {
    docs: {
      page: ContactPageMDX,
    },
  },
} as ComponentMeta<typeof ContactPage>;

const Template: ComponentStory<typeof ContactPage> = (args) => (
  <ThemeProvider>
    <ContactPage {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
