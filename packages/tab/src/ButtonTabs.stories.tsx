import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ThemeProvider } from '~/hds';
import ButtonTabs from './ButtonTabs';

export default { title: 'Components/Tabs/ButtonTabs', component: ButtonTabs } as ComponentMeta<
  typeof ButtonTabs
>;

const Template: ComponentStory<typeof ButtonTabs> = (args) => {
  return (
    <ThemeProvider>
      <ButtonTabs {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  items: [
    {
      label: 'My details',
      render() {
        return <div>One</div>;
      },
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
    },
    {
      label: 'Notifications',
      render() {
        return <div>Eight</div>;
      },
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
