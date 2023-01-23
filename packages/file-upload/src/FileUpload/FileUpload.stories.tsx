import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FileUpload from './FileUpload';
import { Flex, ThemeProvider } from '@highoutput/hds';

export default {
  title: 'Components/File Upload/File Upload',
  component: FileUpload,
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => (
  <ThemeProvider>
    <Flex justify="center">
      <FileUpload {...args} />
    </Flex>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  accepts: '.png, .gif, .jpeg, .svg',
};
