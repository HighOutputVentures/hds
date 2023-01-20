import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FileUpload from './FileUpload';
import { ThemeProvider } from '@highoutput/hds';

export default {
  title: 'Components/File Upload',
  component: FileUpload,
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => (
  <ThemeProvider>
    <FileUpload {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = { ...Default.args, accepts: '.png, .gif, .jpeg, .svg' };