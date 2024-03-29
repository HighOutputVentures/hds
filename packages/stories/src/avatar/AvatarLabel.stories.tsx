import { Flex, HStack } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { AvatarLabel } from '@highoutput/hds-avatar';
import { Meta, StoryFn } from '@storybook/react';
import CompanyIcon from '../examples/CompanyIcon';

const Story: Meta<typeof AvatarLabel> = {
  title: 'Components/Avatar/AvatarLabel',
  component: AvatarLabel,
};

export default Story;

const Template: StoryFn<typeof AvatarLabel> = (args) => {
  return (
    <ThemeProvider>
      <HStack align="start" spacing={8}>
        <Flex gap={4} direction="column">
          <AvatarLabel src="https://i.pravatar.cc/300?u=1" {...args} />
          <AvatarLabel {...args} />
          <AvatarLabel {...args} />
        </Flex>

        <Flex gap={4} direction="column">
          <AvatarLabel isVerified src="https://i.pravatar.cc/300?u=2" {...args} />
          <AvatarLabel isVerified {...args} />
          <AvatarLabel isVerified {...args} />
        </Flex>

        <Flex gap={4} direction="column">
          <AvatarLabel
            src="https://i.pravatar.cc/300?u=3"
            badgeIcon={CompanyIcon}
            {...args}
          />
          <AvatarLabel badgeIcon={CompanyIcon} {...args} />
          <AvatarLabel badgeIcon={CompanyIcon} {...args} />
        </Flex>

        <Flex gap={4} direction="column">
          <AvatarLabel hasOnlineIndicator src="https://i.pravatar.cc/300?u=3" {...args} />
          <AvatarLabel hasOnlineIndicator {...args} />
          <AvatarLabel hasOnlineIndicator {...args} />
        </Flex>
      </HStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  name: 'John Doe',
  supportText: 'johndoe@dummy.bla',
  isOnline: true,
};
