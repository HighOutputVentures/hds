import { ThemeProvider } from '@highoutput/hds';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
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
  label: 'Password',
  placeholder: 'Enter password',
  errorMsg: '',
  helperMsg: '',
  ...Default.args,
};
