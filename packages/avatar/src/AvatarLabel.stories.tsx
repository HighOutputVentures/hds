// @ts-nocheck

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
  argTypes: {
    size: {
      name: 'size',
      type: {
        name: 'string',
        required: false,
      },
      defaultValue: 'md',
      control: 'select',
      options: 'sm|md|lg|xl'.split(/\|/g),
    },
  },
} as ComponentMeta<typeof AvatarLabel>;

const Template: ComponentStory<typeof Avatar> = (args) => {
  return (
    <ThemeProvider theme={extendTheme(theme, withAvatar(), withAvatarLabel())}>
      <VStack align="start" spacing={4}>
        <AvatarLabel
          src="https://i.pravatar.cc/300"
          name="JP Calvo"
          supportText="calvojp92@gmail.com"
          online
          {...args}
        >
          <Avatar />
        </AvatarLabel>

        <AvatarLabel name="JP Calvo" supportText="calvojp92@gmail.com" online {...args}>
          <Avatar />
        </AvatarLabel>

        <AvatarLabel
          name="JP Calvo"
          fallback={false}
          supportText="calvojp92@gmail.com"
          online
          {...args}
        >
          <Avatar />
        </AvatarLabel>
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};
