import { ThemeProvider } from '@highoutput/hds';
import { ButtonTabs } from '@highoutput/hds-tab';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof ButtonTabs> = {
  title: 'Components/Tabs/ButtonTabs',
  component: ButtonTabs,
};

export default Story;

const Template: StoryFn<typeof ButtonTabs> = (args) => {
  return (
    <ThemeProvider>
      <ButtonTabs {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  defaultIndex: 2,
  items: [
    {
      label: 'My details',
      render() {
        return <div style={{ marginTop: 16 }}>One</div>;
      },
    },
    {
      label: 'Profile',
      render() {
        return <div style={{ marginTop: 16 }}>Two</div>;
      },
    },
    {
      label: 'Password',
      render() {
        return <div style={{ marginTop: 16 }}>Three</div>;
      },
    },
    {
      label: 'Team',
      render() {
        return <div style={{ marginTop: 16 }}>Four</div>;
      },
    },
    {
      label: 'Plan',
      render() {
        return <div style={{ marginTop: 16 }}>Five</div>;
      },
    },
    {
      label: 'Billing',
      render() {
        return <div style={{ marginTop: 16 }}>Six</div>;
      },
    },
    {
      label: 'Email',
      render() {
        return <div style={{ marginTop: 16 }}>Seven</div>;
      },
    },
    {
      label: 'Notifications',
      render() {
        return <div style={{ marginTop: 16 }}>Eight</div>;
      },
    },
    {
      label: 'Integrations',
      render() {
        return <div style={{ marginTop: 16 }}>Nine</div>;
      },
    },
    {
      label: 'API',
      render() {
        return <div style={{ marginTop: 16 }}>Ten</div>;
      },
    },
  ],
};
