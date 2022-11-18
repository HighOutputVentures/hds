import { extendTheme, VStack } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { theme, ThemeProvider } from '../../hds/src';
import AvatarProfile from './AvatarProfile';
import withAvatar from './withAvatar';

export default {
  title: 'Components/Avatar/AvatarProfile',
  argTypes: {
    size: {
      name: 'size',
      type: {
        name: 'string',
        required: false,
      },
      defaultValue: 'md',
      control: 'select',
      options: 'sm|md|lg'.split(/\|/g),
    },
  },
} as ComponentMeta<typeof AvatarProfile>;

const Template: ComponentStory<typeof AvatarProfile> = (args) => {
  return (
    <ThemeProvider theme={extendTheme(theme, withAvatar())}>
      <VStack align="start" spacing={4}>
        <AvatarProfile name="John Doe" src="https://i.pravatar.cc/300" {...args} />
        <AvatarProfile name="John Doe" {...args} />
        <AvatarProfile {...args} />
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  verified: true,
};
