import { Flex, ThemeProvider } from '@highoutput/hds';
import { ArrowPositiveChange } from '@highoutput/hds-icons';
import { Metrics } from '@highoutput/hds-metrics';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Metrics',
  component: Metrics,
} as Meta<typeof Metrics>;

const Template: StoryFn<typeof Metrics> = (args) => {
  return (
    <ThemeProvider>
      <Metrics {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  metricLabel: 'Views 24 hours',
  icon: (
    <Flex
      alignItems="center"
      justify="center"
      w={8}
      h={8}
      bg="green.100"
      borderRadius={100}
    >
      <ArrowPositiveChange w={5} h={5} mt={1.5} />
    </Flex>
  ),
  metricValue: '4000',
  lastViewedText: 'vs last month',
  viewDetailsText: 'View Details',
  metricChange: 'positive',
  percentage: 23,
};
