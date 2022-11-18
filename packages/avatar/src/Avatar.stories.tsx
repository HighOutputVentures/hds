// @ts-nocheck

import { extendTheme, Flex, VStack } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { theme, ThemeProvider } from '../../hds/src';
import Avatar from './Avatar';
import CompanyIcon from './examples/CompanyIcon';
import withAvatar from './withAvatar';

export default {
  title: 'Components/Avatar/Avatar',
  argTypes: {
    size: {
      name: 'size',
      type: {
        name: 'string',
        required: false,
      },
      defaultValue: 'md',
      control: 'select',
      options: 'xs|sm|md|lg|xl|2xl'.split(/\|/g),
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => {
  const onClick = function noop() {};

  return (
    <ThemeProvider theme={extendTheme(theme, withAvatar())}>
      <VStack align="start" spacing={8}>
        <Flex gap={4}>
          <Avatar clickable onClick={onClick} {...args} />
          <Avatar online clickable onClick={onClick} {...args} />
          <Avatar verified clickable onClick={onClick} {...args} />
          <Avatar badge badgeIcon={CompanyIcon} clickable onClick={onClick} {...args} />
        </Flex>
        <Flex gap={4}>
          <Avatar name="John Doe" clickable onClick={onClick} {...args} />
          <Avatar name="John Doe" online clickable onClick={onClick} {...args} />
          <Avatar name="John Doe" verified clickable onClick={onClick} {...args} />
          <Avatar
            name="John Doe"
            badge
            badgeIcon={CompanyIcon}
            clickable
            onClick={onClick}
            {...args}
          />
        </Flex>
        <Flex gap={4}>
          <Avatar src="https://i.pravatar.cc/300?u=1" clickable onClick={onClick} {...args} />
          <Avatar
            src="https://i.pravatar.cc/300?u=2"
            online
            clickable
            onClick={onClick}
            {...args}
          />
          <Avatar
            src="https://i.pravatar.cc/300?u=3"
            verified
            clickable
            onClick={onClick}
            {...args}
          />
          <Avatar
            src="https://i.pravatar.cc/300?u=4"
            badge
            badgeIcon={CompanyIcon}
            clickable
            onClick={onClick}
            {...args}
          />
        </Flex>
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
