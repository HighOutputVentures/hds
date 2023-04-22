import { ThemeProvider } from '@highoutput/hds';
import { Tabs } from '@highoutput/hds-tab';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof Tabs> = {
  title: 'Components/Tabs/Tabs',
  component: Tabs,
};

export default Story;

const Template: StoryFn<typeof Tabs> = (args) => {
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
  variant: 'plain',
  items: [
    {
      label: 'My details',
      render() {
        return <div style={{ padding: 16 }}>One</div>;
      },
      badgeCount: numberFormatter.format(2),
    },
    {
      label: 'Profile',
      render() {
        return <div style={{ padding: 16 }}>Two</div>;
      },
    },
    {
      label: 'Password',
      render() {
        return <div style={{ padding: 16 }}>Three</div>;
      },
    },
    {
      label: 'Team',
      render() {
        return <div style={{ padding: 16 }}>Four</div>;
      },
      badgeCount: numberFormatter.format(4),
    },
    {
      label: 'Plan',
      render() {
        return <div style={{ padding: 16 }}>Five</div>;
      },
    },
    {
      label: 'Billing',
      render() {
        return <div style={{ padding: 16 }}>Six</div>;
      },
    },
    {
      label: 'Email',
      render() {
        return <div style={{ padding: 16 }}>Seven</div>;
      },
      badgeCount: numberFormatter.format(2150),
    },
    {
      label: 'Notifications',
      render() {
        return <div style={{ padding: 16 }}>Eight</div>;
      },
      badgeCount: numberFormatter.format(1500),
    },
    {
      label: 'Integrations',
      render() {
        return <div style={{ padding: 16 }}>Nine</div>;
      },
    },
    {
      label: 'API',
      render() {
        return <div style={{ padding: 16 }}>Ten</div>;
      },
    },
  ],
};
