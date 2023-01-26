import { TabPanel, TabPanels } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ThemeProvider } from '~/hds';
import ButtonTabs from './ButtonTabs';
import Tab from './tab';

export default {
  title: 'Components/Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>;
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
const Template: ComponentStory<typeof Tab> = (args) => {
  return (
    <ThemeProvider>
      <Tab {...args} tabLabel={tabs} tabItems={tabItems} />
    </ThemeProvider>
  );
};
const ButtonTabsTemplate: ComponentStory<typeof Tab> = (args) => {
  return (
    <ThemeProvider>
      <ButtonTabs {...args} tabLabel={tabs} tabItems={tabItems} size={'sm'} />
      <ButtonTabs {...args} tabLabel={tabs} tabItems={tabItems} size={'md'} />
    </ThemeProvider>
  );
};
export const Default = Template.bind({});
export const ButtonTab = ButtonTabsTemplate.bind({});
Default.args = {
  ...Default.args,
};
ButtonTab.args = {
  ...ButtonTab.args,
};
const tabs = [
  'My details',
  'Profile',
  'Password',
  'Team',
  'Plan',
  'Billing',
  'Email',
  'Notifications 2',
  'Integrations',
  'API',
];
