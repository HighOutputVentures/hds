import { ThemeProvider } from '@highoutput/hds';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import OTPVerificationForm from './OTPVerificationForm';
import OTPVerificationFormMDX from './OTPVerificationForm.mdx';

export default {
  title: 'Components/Auth Form/OTP Login',
  component: OTPVerificationForm,
  parameters: {
    docs: {
      page: OTPVerificationFormMDX,
    },
  },
} as ComponentMeta<typeof OTPVerificationForm>;

const Template: ComponentStory<typeof OTPVerificationForm> = (args) => (
  <ThemeProvider>
    <OTPVerificationForm {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
