import { ThemeProvider } from '@highoutput/hds';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import LoadingIndicator from './LoadingIndicator';

export default {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicator,
} as ComponentMeta<typeof LoadingIndicator>;

const Template: ComponentStory<typeof LoadingIndicator> = (args) => {
  return (
    <ThemeProvider>
      <LoadingIndicator {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
