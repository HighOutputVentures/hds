import { Flex, HStack } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { Avatar } from '@highoutput/hds-avatar';
import { Meta, StoryFn } from '@storybook/react';
import CompanyIcon from '../examples/CompanyIcon';

const Story: Meta<typeof Avatar> = {
  title: 'Components/Avatar/Avatar',
  component: Avatar,
};

export default Story;

const Template: StoryFn<typeof Avatar> = (args) => {
  return (
    <ThemeProvider>
      <HStack align="start" spacing={8}>
        <Flex gap={6} direction="column">
          <Avatar src="https://i.pravatar.cc/300?u=1" {...args} />
          <Avatar name="John Doe" {...args} />
          <Avatar {...args} />
        </Flex>

        <Flex gap={6} direction="column">
          <Avatar hasOnlineIndicator src="https://i.pravatar.cc/300?u=2" {...args} />
          <Avatar hasOnlineIndicator name="John Doe" {...args} />
          <Avatar hasOnlineIndicator {...args} />
        </Flex>

        <Flex gap={6} direction="column">
          <Avatar isVerified src="https://i.pravatar.cc/300?u=3" {...args} />
          <Avatar isVerified name="John Doe" {...args} />
          <Avatar isVerified {...args} />
        </Flex>

        <Flex gap={6} direction="column">
          <Avatar badgeIcon={CompanyIcon} src="https://i.pravatar.cc/300?u=4" {...args} />
          <Avatar badgeIcon={CompanyIcon} name="John Doe" {...args} />
          <Avatar badgeIcon={CompanyIcon} {...args} />
        </Flex>
      </HStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  isOnline: true,
  onClick() {},
};
