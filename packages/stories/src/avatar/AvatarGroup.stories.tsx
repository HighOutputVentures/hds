import { VStack } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { AvatarGroup } from '@highoutput/hds-avatar';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof AvatarGroup> = {
  title: 'Components/Avatar/AvatarGroup',
  component: AvatarGroup,
};

export default Story;

const Template: StoryFn<typeof AvatarGroup> = (args) => {
  return (
    <ThemeProvider>
      <VStack align="start" spacing="8px">
        <AvatarGroup {...args} />
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  max: 5,
  size: 'sm',
  hasAddButton: true,
  items: [
    { name: '', src: 'https://i.pravatar.cc/200?u=0' },
    { name: '', src: 'https://i.pravatar.cc/200?u=1' },
    { name: '', src: 'https://i.pravatar.cc/200?u=2' },
    { name: '', src: 'https://i.pravatar.cc/200?u=3' },
    { name: '', src: 'https://i.pravatar.cc/200?u=4' },
    { name: '', src: 'https://i.pravatar.cc/200?u=5' },
    { name: '', src: 'https://i.pravatar.cc/200?u=6' },
    { name: '', src: 'https://i.pravatar.cc/200?u=7' },
    { name: '', src: 'https://i.pravatar.cc/200?u=8' },
    { name: '', src: 'https://i.pravatar.cc/200?u=9' },
  ],
};
