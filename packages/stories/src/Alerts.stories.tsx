import { ThemeProvider } from '@highoutput/hds';
import { Alert } from '@highoutput/hds-alerts';
import { Button } from '@highoutput/hds-forms';
import { useState } from '@storybook/addons';
import { Meta, StoryFn } from '@storybook/react';

const Story: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
};

export default Story;

const Template: StoryFn<typeof Alert> = (args) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <ThemeProvider>
      <Button onClick={() => setOpen((n) => !n)}>Show/Hide</Button>

      <Alert {...args} mt={4} isOpen={isOpen} onClose={() => setOpen(false)} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  accent: 'primary',
  title: <>We&rsquo;ve just released a new feature</>,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
  primaryButton: 'View changes',
  secondaryButton: 'Learn more',
};
