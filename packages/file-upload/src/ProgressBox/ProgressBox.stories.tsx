import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ProgressBox from './ProgressBox';
import { Flex, ThemeProvider } from '@highoutput/hds';

export default {
  title: 'Components/File Upload/Progress Box',
  component: ProgressBox,
} as ComponentMeta<typeof ProgressBox>;

const Template: ComponentStory<typeof ProgressBox> = (args) => (
  <ThemeProvider>
    <Flex justify="center">
      <ProgressBox {...args} />
    </Flex>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  value: 80,
};
