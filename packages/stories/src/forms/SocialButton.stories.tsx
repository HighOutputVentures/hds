import { ThemeProvider } from '@highoutput/hds';
import { SocialButton } from '@highoutput/hds-forms';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof SocialButton> = {
  title: 'Components/Button/SocialButton',
  component: SocialButton,
};

export default Story;

const Template: StoryFn<typeof SocialButton> = (args) => (
  <ThemeProvider>
    <SocialButton {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  icon: 'google',
  label: 'Sign in with Google',
};
