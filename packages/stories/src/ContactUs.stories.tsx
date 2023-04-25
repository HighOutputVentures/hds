import { ThemeProvider } from '@highoutput/hds';
import { ContactUs } from '@highoutput/hds-contact-us';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof ContactUs> = {
  title: 'Templates/ContactUs',
  component: ContactUs,
};

export default Story;

const Template: StoryFn<typeof ContactUs> = (args) => (
  <ThemeProvider>
    <ContactUs {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  url: 'https://jsonplaceholder.typicode.com/posts',
};
