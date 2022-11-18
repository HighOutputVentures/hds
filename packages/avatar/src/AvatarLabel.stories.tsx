import { extendTheme, VStack } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { theme, ThemeProvider } from '../../hds/src';
import Avatar from './Avatar';
import AvatarLabel from './AvatarLabel';
import withAvatar from './withAvatar';
import withAvatarLabel from './withAvatarLabel';

export default {
  title: 'Components/Avatar/AvatarLabel',
  component: AvatarLabel,
} as ComponentMeta<typeof AvatarLabel>;

const Template: ComponentStory<typeof Avatar> = () => {
  return (
    <ThemeProvider theme={extendTheme(theme, withAvatar(), withAvatarLabel())}>
      <VStack align="start" spacing={4}>
        <AvatarLabel
          src="https://i.pravatar.cc/300"
          size="lg"
          name="JP Calvo"
          supportText="calvojp92@gmail.com"
          online
        >
          <Avatar />
        </AvatarLabel>
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
