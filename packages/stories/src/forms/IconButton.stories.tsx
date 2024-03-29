import { Icon, VStack } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { IconButton } from '@highoutput/hds-forms';
import { Meta, StoryFn } from '@storybook/react';
import PlaceholderIcon from '../examples/PlaceholderIcon';

const Story: Meta<typeof IconButton> = {
  title: 'Components/Button/IconButton',
  component: IconButton,
};

export default Story;

const Template: StoryFn<typeof IconButton> = (args) => {
  const isGrayAccent = args.accent === 'gray';

  return (
    <ThemeProvider>
      <VStack align="start" spacing={4}>
        {!isGrayAccent && <IconButton variant="solid" {...args} />}
        <IconButton variant="outline" {...args} />
        {!isGrayAccent && <IconButton variant="subtle" {...args} />}
        <IconButton variant="ghost" {...args} />
        <IconButton variant="link" {...args} />
        <IconButton variant="unstyled" {...args} />
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  size: 'md',
  accent: 'primary',
  isLoading: false,
  isDisabled: false,
  icon: <Icon as={PlaceholderIcon} />,
};
