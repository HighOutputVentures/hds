import { Icon, VStack } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { Button } from '@highoutput/hds-forms';
import { Meta, StoryFn } from '@storybook/react';
import PlaceholderIcon from '../examples/PlaceholderIcon';

const Story: Meta<typeof Button> = {
  title: 'Components/Button/Button',
  component: Button,
};

export default Story;

const Template: StoryFn<typeof Button> = (args) => {
  const isGrayAccent = args.accent === 'gray';

  return (
    <ThemeProvider>
      <VStack align="start" spacing={4}>
        {!isGrayAccent && (
          <Button variant="solid" {...args}>
            Button
          </Button>
        )}

        <Button variant="outline" {...args}>
          Button
        </Button>

        {!isGrayAccent && (
          <Button variant="subtle" {...args}>
            Button
          </Button>
        )}

        <Button variant="ghost" {...args}>
          Button
        </Button>

        <Button variant="link" {...args}>
          Button
        </Button>

        <Button variant="unstyled" {...args}>
          Button
        </Button>
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  size: 'md',
  width: '150px',
  accent: 'primary',
  isActive: false,
  isLoading: false,
  isDisabled: false,
  forceAccent: false,
  leftIcon: <Icon as={PlaceholderIcon} />,
  rightIcon: <Icon as={PlaceholderIcon} />,
};
