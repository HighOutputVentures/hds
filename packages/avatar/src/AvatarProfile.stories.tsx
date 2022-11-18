import { extendTheme, VStack } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { theme, ThemeProvider } from '../../hds/src';
import AvatarProfile from './AvatarProfile';
import withAvatar from './withAvatar';

export default {
  title: 'Components/Avatar/AvatarProfile',
  component: AvatarProfile,
} as ComponentMeta<typeof AvatarProfile>;

const Template: ComponentStory<typeof AvatarProfile> = () => {
  return (
    <ThemeProvider theme={extendTheme(theme, withAvatar())}>
      <VStack align="start" spacing={4}>
        <AvatarProfile src="https://i.pravatar.cc/300" verified size="sm" name="JP Calvo" />
        <AvatarProfile src="https://i.pravatar.cc/300" verified size="md" name="JP Calvo" />
        <AvatarProfile src="https://i.pravatar.cc/300" verified size="lg" name="JP Calvo" />
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
