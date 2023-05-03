import { Flex, ThemeProvider } from '@highoutput/hds';
import { EmptyState } from '@highoutput/hds-empty-state';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof EmptyState> = {
  title: 'Templates/EmptyState',
  component: EmptyState,
};

export default Story;

const Template: StoryFn<typeof EmptyState> = (args) => {
  return (
    <ThemeProvider>
      <Flex justify="center">
        <EmptyState {...args} />
      </Flex>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  header: 'No projects found',
  subHeader:
    'Your search “Landing page design” did not match any projects. Please try again.',
};
