import { Icon } from '@chakra-ui/icons';
import { Flex, ThemeProvider } from '@highoutput/hds';
import { EmptyState } from '@highoutput/hds-empty-state';
import { SearchIcon } from '@highoutput/hds-icons';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Empty State',
  component: EmptyState,
} as Meta<typeof EmptyState>;

const Template: StoryFn<typeof EmptyState> = (args) => {
  return (
    <ThemeProvider>
      <Flex justify="center">
        <EmptyState
          {...args}
          icon={<Icon color="#7F56D9" h="1.5rem" w="1.5rem" as={SearchIcon} />}
        />
      </Flex>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  header: 'No projects found',
  subHeader:
    'Your search “Landing page design” did not match any projects. Please try again.',
  primaryLabel: 'New project',
  secondaryLabel: 'Clear search',
};
