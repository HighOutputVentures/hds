import { ThemeProvider } from '@highoutput/hds';
import { Breadcrumbs } from '@highoutput/hds-breadcrumbs';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
} as Meta<typeof Breadcrumbs>;

const Template: StoryFn<typeof Breadcrumbs> = (args) => {
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
