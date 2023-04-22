import { VStack } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { Tag } from '@highoutput/hds-tag';
import { Meta, StoryFn } from '@storybook/react';
import AUIcon from './examples/AUIcon';

const Story: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
};

export default Story;

const Template: StoryFn<typeof Tag> = (args) => {
  return (
    <ThemeProvider>
      <VStack align="start" spacing={4}>
        <Tag icon={AUIcon} {...args} />
        <Tag avatar="https://i.pravatar.cc/25" hasAvatar {...args} />
        <Tag hasCheckbox {...args} />
        <Tag hasOnlineIndicator {...args} />
        <Tag hasBadge badgeCount={4} {...args} />
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Label',
  isClosable: false,
  ...Default.args,
};
