import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ThemeProvider } from '~/hds';
import Tabs from './Tabs';

export default { title: 'Components/Tabs/Tabs', component: Tabs } as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  return (
    <ThemeProvider>
      <Tabs {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

const numberFormatter = Intl.NumberFormat('en', { notation: 'compact' });

Default.args = {
  ...Default.args,
  items: [
    {
      label: 'My details',
      render() {
        return <div>One</div>;
      },
      badgeCount: numberFormatter.format(2),
    },
    {
      label: 'Profile',
      render() {
        return <div>Two</div>;
      },
    },
    {
      label: 'Password',
      render() {
        return <div>Three</div>;
      },
    },
    {
      label: 'Team',
      render() {
        return <div>Four</div>;
      },
      badgeCount: numberFormatter.format(4),
    },
    {
      label: 'Plan',
      render() {
        return <div>Five</div>;
      },
    },
    {
      label: 'Billing',
      render() {
        return <div>Six</div>;
      },
    },
    {
      label: 'Email',
      render() {
        return <div>Seven</div>;
      },
      badgeCount: numberFormatter.format(2150),
    },
    {
      label: 'Notifications',
      render() {
        return <div>Eight</div>;
      },
      badgeCount: numberFormatter.format(1500),
    },
    {
      label: 'Integrations',
      render() {
        return <div>Nine</div>;
      },
    },
    {
      label: 'API',
      render() {
        return <div>Ten</div>;
      },
    },
  ],
};