import { VStack } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { AvatarProfile } from '@highoutput/hds-avatar';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof AvatarProfile> = {
  title: 'Components/Avatar/AvatarProfile',
  component: AvatarProfile,
};

export default Story;

const Template: StoryFn<typeof AvatarProfile> = (args) => {
  const onClick = function noop() {};

  return (
    <ThemeProvider>
      <VStack align="start" spacing={4}>
        <AvatarProfile
          src="https://i.pravatar.cc/300"
          size={args.size}
          name="John Doe"
          onClick={onClick}
        />
        <AvatarProfile size={args.size} name="John Doe" onClick={onClick} />
        <AvatarProfile size={args.size} onClick={onClick} />
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};
