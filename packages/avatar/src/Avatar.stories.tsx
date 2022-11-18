import { extendTheme, VStack } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { theme, ThemeProvider } from '../../hds/src';
import Avatar from './Avatar';
import CompanyIcon from './examples/CompanyIcon';
import withAvatar from './withAvatar';

export default {
  title: 'Components/Avatar/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = () => {
  return (
    <ThemeProvider theme={extendTheme(theme, withAvatar())}>
      <VStack align="start" spacing={4}>
        <Avatar size="xs" badge badgeIcon={CompanyIcon} clickable onClick={() => {}} />
        <Avatar size="sm" badge badgeIcon={CompanyIcon} clickable onClick={() => {}} />
        <Avatar size="md" badge badgeIcon={CompanyIcon} clickable onClick={() => {}} />
        <Avatar size="lg" badge badgeIcon={CompanyIcon} clickable onClick={() => {}} />
        <Avatar size="xl" badge badgeIcon={CompanyIcon} clickable onClick={() => {}} />
        <Avatar size="2xl" badge badgeIcon={CompanyIcon} clickable onClick={() => {}} />

        <Avatar size="sm" src="https://i.pravatar.cc/300" verified />
        <Avatar size="md" src="https://i.pravatar.cc/300" verified />
        <Avatar size="lg" src="https://i.pravatar.cc/300" verified />
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
