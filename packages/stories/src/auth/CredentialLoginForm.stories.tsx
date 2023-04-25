import { ThemeProvider } from '@highoutput/hds';
import { CredentialLoginForm } from '@highoutput/hds-auth';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof CredentialLoginForm> = {
  title: 'Templates/Login/CredentialLoginForm',
  component: CredentialLoginForm,
};

export default Story;

const Template: StoryFn<typeof CredentialLoginForm> = (args) => (
  <ThemeProvider>
    <CredentialLoginForm maxW="400px" {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  variant: 'email-password',
  onSubmit(data: unknown) {
    alert(JSON.stringify(data));
  },
};
