import { Flex, ThemeProvider } from '@highoutput/hds';
import { ComponentStory, Meta } from '@storybook/react';
import * as React from 'react';
import ArrowPositiveChange from './icons/ArrowPositiveChange';
import Metrics from './Metrics';

export default {
  title: 'Components/Metrics',
} as Meta;

const Template: ComponentStory<typeof Metrics> = (args) => {
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
      <ArrowPositiveChange />
    </Flex>
  ),
  metricValue: '4000',
  lastViewedText: 'vs last month',
  viewDetailsText: 'View Details',
  metricChange: 'positive',
  percentage: 23,
};
