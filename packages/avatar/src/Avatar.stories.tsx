// @ts-nocheck

import { extendTheme, Flex, HStack } from '@chakra-ui/react';
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
      <HStack align="start" spacing={8}>
        {/* <!-- Basic --> */}
        <Flex gap={6} direction="column">
          <Avatar src="https://i.pravatar.cc/300?u=1" {...args} />
          <Avatar name="John Doe" {...args} />
          <Avatar {...args} />
        </Flex>

        {/* <!-- Online --> */}
        <Flex gap={6} direction="column">
          <Avatar onlineIndicator src="https://i.pravatar.cc/300?u=2" {...args} />
          <Avatar onlineIndicator name="John Doe" {...args} />
          <Avatar onlineIndicator {...args} />
        </Flex>

        {/* <!-- Verified --> */}
        <Flex gap={6} direction="column">
          <Avatar verified src="https://i.pravatar.cc/300?u=3" {...args} />
          <Avatar verified name="John Doe" {...args} />
          <Avatar verified {...args} />
        </Flex>

        {/* <!-- Badge --> */}
        <Flex gap={6} direction="column">
          <Avatar badge badgeIcon={CompanyIcon} src="https://i.pravatar.cc/300?u=4" {...args} />
          <Avatar badge badgeIcon={CompanyIcon} name="John Doe" {...args} />
          <Avatar badge badgeIcon={CompanyIcon} {...args} />
        </Flex>
      </HStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  online: true,
  clickable: true,
};
