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
      <VStack align="start" spacing="8px">
        <AvatarGroup max={3} include={['plus']}>
          <Avatar src="https://i.pravatar.cc/200?u=1" />
          <Avatar src="https://i.pravatar.cc/200?u=2" />
          <Avatar src="https://i.pravatar.cc/200?u=3" />
          <Avatar src="https://i.pravatar.cc/200?u=4" />
          <Avatar src="https://i.pravatar.cc/200?u=5" />
        </AvatarGroup>
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
