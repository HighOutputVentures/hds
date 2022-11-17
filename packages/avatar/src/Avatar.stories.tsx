import { extendTheme, VStack } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { theme, ThemeProvider } from '../../hds/src';
import Avatar from './Avatar';
import withAvatar from './withAvatar';

export default {
  title: 'Components/Avatar/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = () => {
  return (
    <ThemeProvider theme={extendTheme(theme, withAvatar())}>
      <VStack align="start" spacing={4}>
        <Avatar size="xs" src="https://i.pravatar.cc/300" />
        <Avatar size="sm" />
        <Avatar size="md" name="John Calvo" />
        <Avatar size="lg" />
        <Avatar size="xl" src="https://i.pravatar.cc/300" clickable onClick={() => {}} />
        <Avatar size="2xl" clickable onClick={() => {}} />
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
