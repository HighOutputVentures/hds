import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Flex, ThemeProvider } from '@highoutput/hds';
import CTA from './CTA';

export default {
  title: 'Components/CTA',
  component: CTA,
} as ComponentMeta<typeof CTA>;

const Template: ComponentStory<typeof CTA> = (args) => {
  return (
    <ThemeProvider>
      <Flex justify="center">
        <CTA {...args} />
      </Flex>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
export const SubscriptionCTA = Template.bind({});

Default.args = {
  ...Default.args,
  header: "We've just released a new update!",
  subHeader: 'Check out the all new dashboard view. Pages and now load faster.',
  primaryLabel: 'Changelog',
  secondaryLabel: 'Dismiss',
};

SubscriptionCTA.args = {
  ...Default.args,
  header: 'We’ve just released a new update!',
  subHeader: 'Check out the all new dashboard view. Pages and now load faster.',
  primaryLabel: 'Subscribe',
  isSubscription: true,
};
