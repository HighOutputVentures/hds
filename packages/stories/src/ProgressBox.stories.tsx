import { Flex, ThemeProvider } from '@highoutput/hds';
import { ProgressBox } from '@highoutput/hds-file-upload';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/File Upload/Progress Box',
  component: ProgressBox,
} as Meta<typeof ProgressBox>;

const Template: StoryFn<typeof ProgressBox> = (args) => (
  <ThemeProvider>
    <Flex justify="center">
      <ProgressBox {...args} />
    </Flex>
  </ThemeProvider>
);

export const Default = Template.bind({});
export const Error = Template.bind({});

Default.args = {
  ...Default.args,
  value: 80,
};

Error.args = {
  ...Default.args,
  hasError: true,
};
