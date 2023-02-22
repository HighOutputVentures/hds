import { ThemeProvider } from '@highoutput/hds';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import LoadingLite from './LoadingLite';

export default {
  title: 'Components/LoadingLite',
  component: LoadingLite,
} as ComponentMeta<typeof LoadingLite>;

const Template: ComponentStory<typeof LoadingLite> = (args) => {
  return (
    <ThemeProvider>
      <LoadingLite {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
