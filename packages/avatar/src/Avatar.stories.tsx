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
  const src = 'https://i.pravatar.cc/300';

  const onClick = function noop() {};

  return (
    <ThemeProvider theme={extendTheme(theme, withAvatar())}>
      <VStack align="start" spacing={4}>
        <Avatar src={src} size="xs" online clickable onClick={onClick} />
        <Avatar src={src} size="sm" online clickable onClick={onClick} />
        <Avatar src={src} size="md" online clickable onClick={onClick} />
        <Avatar src={src} size="lg" online clickable onClick={onClick} />
        <Avatar src={src} size="xl" online clickable onClick={onClick} />
        <Avatar src={src} size="2xl" online clickable onClick={onClick} />
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
