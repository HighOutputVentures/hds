import { ThemeProvider } from '@highoutput/hds';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Breadcrumbs from './Breadcrumbs';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => {
  return (
    <ThemeProvider>
      <Breadcrumbs {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  homeHref: '/',
  items: [
    {
      href: '/settings',
      label: 'Settings',
    },
    {
      href: '/#',
      label: '...',
      isDisabled: true,
    },
    {
      href: '/teams',
      label: 'Teams',
      isActive: true,
    },
  ],
};
