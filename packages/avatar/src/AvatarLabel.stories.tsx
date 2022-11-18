// @ts-nocheck

import { extendTheme, Flex, HStack } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { theme, ThemeProvider } from '../../hds/src';
import Avatar from './Avatar';
import AvatarLabel from './AvatarLabel';
import CompanyIcon from './examples/CompanyIcon';
import withAvatar from './withAvatar';

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
    <ThemeProvider theme={extendTheme(theme, withAvatar())}>
      <HStack align="start" spacing={8}>
        <Flex gap={4} direction="column">
          <AvatarLabel src="https://i.pravatar.cc/300?u=1" online {...args}>
            <Avatar />
          </AvatarLabel>
          <AvatarLabel online {...args}>
            <Avatar />
          </AvatarLabel>
          <AvatarLabel online fallback={false} {...args}>
            <Avatar />
          </AvatarLabel>
        </Flex>

        <Flex gap={4} direction="column">
          <AvatarLabel src="https://i.pravatar.cc/300?u=2" verified {...args}>
            <Avatar />
          </AvatarLabel>
          <AvatarLabel verified {...args}>
            <Avatar />
          </AvatarLabel>
          <AvatarLabel verified fallback={false} {...args}>
            <Avatar />
          </AvatarLabel>
        </Flex>

        <Flex gap={4} direction="column">
          <AvatarLabel src="https://i.pravatar.cc/300?u=3" badge badgeIcon={CompanyIcon} {...args}>
            <Avatar />
          </AvatarLabel>
          <AvatarLabel badge badgeIcon={CompanyIcon} {...args}>
            <Avatar />
          </AvatarLabel>
          <AvatarLabel badge badgeIcon={CompanyIcon} fallback={false} {...args}>
            <Avatar />
          </AvatarLabel>
        </Flex>

        <Flex gap={4} direction="column">
          <AvatarLabel src="https://i.pravatar.cc/300?u=3" onlineIndicator {...args}>
            <Avatar />
          </AvatarLabel>
          <AvatarLabel onlineIndicator {...args}>
            <Avatar />
          </AvatarLabel>
          <AvatarLabel onlineIndicator fallback={false} {...args}>
            <Avatar />
          </AvatarLabel>
        </Flex>
      </HStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  name: 'John Doe',
  supportText: 'johndoe@dummy.bla',
  online: true,
};
