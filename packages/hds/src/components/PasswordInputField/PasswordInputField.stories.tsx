import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ThemeProvider from '../ThemeProvider';
import PasswordInputField from './PasswordInputField';

export default {
  title: 'Components/Form Fields/Password Input Field',
  component: PasswordInputField,
} as ComponentMeta<typeof PasswordInputField>;

const Template: ComponentStory<typeof PasswordInputField> = (args) => (
  <ThemeProvider>
    <PasswordInputField {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
