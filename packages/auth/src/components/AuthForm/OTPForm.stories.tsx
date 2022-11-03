import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ThemeProvider from '../../../../hds/src/components/ThemeProvider';
import OTPForm from './OTPForm';
import OTPFormMDX from './OTPForm.mdx';

export default {
  title: 'Components/Auth Form/OTP Form',
  component: OTPForm,
  parameters: {
    docs: {
      page: OTPFormMDX,
    },
  },
} as ComponentMeta<typeof OTPForm>;

const Template: ComponentStory<typeof OTPForm> = (args) => (
  <ThemeProvider>
    <OTPForm {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
