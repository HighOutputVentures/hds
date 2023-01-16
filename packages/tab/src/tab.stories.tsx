// @ts-nocheck
import { extendTheme, VStack, Box, TabPanel } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
// @ts-ignore
import { TabPanels, theme, ThemeProvider } from '../../hds/src';
import Tab from './tab';

export default {
  title: 'Components/Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => {
  const tabItems = (
    <TabPanels>
      <TabPanel>One</TabPanel>
      <TabPanel>Two</TabPanel>
      <TabPanel>Three</TabPanel>
      <TabPanel>Four</TabPanel>
      <TabPanel>Five</TabPanel>
      <TabPanel>Six</TabPanel>
      <TabPanel>Seven</TabPanel>
      <TabPanel>Eight</TabPanel>
      <TabPanel>Nine</TabPanel>
      <TabPanel>Ten</TabPanel>
    </TabPanels>
  );

  return (
    <ThemeProvider>
      <Tab {...args} tabLabel={tabs} tabItems={tabItems} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};

const tabs = [
  'My details',
  'Profile',
  'Password',
  'Team',
  'Plan',
  'Billing',
  'Email',
  'Notifiactions 2',
  'Integrations',
  'API',
];
