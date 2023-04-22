import { ThemeProvider } from '@highoutput/hds';
import { OtpLoginForm } from '@highoutput/hds-auth';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof OtpLoginForm> = {
  title: 'Templates/Login/OtpLoginForm',
  component: OtpLoginForm,
};

export default Story;

const Template: StoryFn<typeof OtpLoginForm> = (args) => (
  <ThemeProvider>
    <OtpLoginForm {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  onSubmit(data: unknown) {
    alert(JSON.stringify(data));
  },
};
