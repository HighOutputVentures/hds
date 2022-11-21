import { ThemeProvider } from '@highoutput/hds';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ContactCard from './ContactCard';
import ContactCardMDX from './ContactCard.mdx';

export default {
  title: 'Layouts/Contact/Contact Card',
  component: ContactCard,
  parameters: {
    docs: {
      page: ContactCardMDX,
    },
  },
} as ComponentMeta<typeof ContactCard>;

const Template: ComponentStory<typeof ContactCard> = (args) => (
  <ThemeProvider>
    <ContactCard {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
