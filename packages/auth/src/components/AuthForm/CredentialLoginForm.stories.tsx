import { ThemeProvider } from '@highoutput/hds';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CredentialLoginForm from './CredentialLoginForm';
import CredentialLoginFormMDX from './CredentialLoginForm.mdx';

export default {
  title: 'Components/Auth Form/Credential Login',
  component: CredentialLoginForm,
  parameters: {
    docs: {
      page: CredentialLoginFormMDX,
    },
  },
} as ComponentMeta<typeof CredentialLoginForm>;

const Template: ComponentStory<typeof CredentialLoginForm> = (args) => (
  <ThemeProvider>
    <CredentialLoginForm {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
