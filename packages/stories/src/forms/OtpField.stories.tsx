import { ThemeProvider } from '@highoutput/hds';
import { OtpField } from '@highoutput/hds-forms';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof OtpField> = {
  title: 'Components/Forms/OtpField',
  component: OtpField,
};

export default Story;

const Template: StoryFn<typeof OtpField> = (args) => {
  return (
    <ThemeProvider>
      <OtpField {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  label: 'Enter OTP',
  hint: 'This is a text to help user',
};
