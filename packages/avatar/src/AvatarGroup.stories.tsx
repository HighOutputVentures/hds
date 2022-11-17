import { extendTheme, VStack } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { theme, ThemeProvider } from '../../hds/src';
import Avatar from './Avatar';
import AvatarGroup from './AvatarGroup';
import withAvatar from './withAvatar';

export default {
  title: 'Components/Avatar/AvatarGroup',
  component: AvatarGroup,
} as ComponentMeta<typeof AvatarGroup>;

const Template: ComponentStory<typeof AvatarGroup> = () => {
  return (
    <ThemeProvider theme={extendTheme(theme, withAvatar())}>
      <VStack align="start" spacing={4}>
        <AvatarGroup>
          <Avatar size="sm" src={'https://i.pravatar.cc/200?u=' + Date.now()} />
          <Avatar size="md" src={'https://i.pravatar.cc/250?u=' + Date.now()} />
          <Avatar size="lg" src={'https://i.pravatar.cc/300?u=' + Date.now()} />
        </AvatarGroup>
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
