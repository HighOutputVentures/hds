import { Flex } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { Alert } from '@highoutput/hds-alerts';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta<typeof Alert>;

const Template: StoryFn<typeof Alert> = (props) => {
  return (
    <ThemeProvider>
      <Flex
        gap={'50px'}
        flexDir="column"
        width="full"
        justify={'center'}
        align={'center'}
      >
        <Alert {...props} isOpen={true} />
      </Flex>
    </ThemeProvider>
  );
};

export const Info = Template.bind({});
export const Default = Template.bind({});
export const Error = Template.bind({});
export const Warning = Template.bind({});
export const Success = Template.bind({});
Default.args = {
  ...Default.args,
  supportingDetail:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
  status: 'default',

  alertLabel: {
    label1: 'Learn More',
    label2: 'View Changes',
  },
  alertLinks: {
    link1: '#',
    link2: '#',
  },
  title: 'We’ve just released a new feature',
};
Info.args = {
  ...Default.args,
  supportingDetail:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
  status: 'info',
  alertLabel: {
    label1: 'Learn More',
    label2: 'View Changes',
  },
  alertLinks: {
    link1: '#',
    link2: '#',
  },
  title: 'We’ve just released a new feature',
};
Error.args = {
  ...Default.args,
  supportingDetail:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
  status: 'error',
  alertLabel: {
    label1: 'Learn More',
    label2: 'View Changes',
  },
  alertLinks: {
    link1: '#',
    link2: '#',
  },
  title: 'There was a problem with that action',
};
Warning.args = {
  ...Default.args,
  supportingDetail:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
  status: 'warning',
  alertLabel: {
    label1: 'Learn More',
    label2: 'View Changes',
  },
  alertLinks: {
    link1: '#',
    link2: '#',
  },
  title: 'Just to let you know this might be a problem',
};
Success.args = {
  ...Default.args,
  supportingDetail:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
  status: 'success',
  alertLabel: {
    label1: 'Learn More',
    label2: 'View Changes',
  },
  alertLinks: {
    link1: '#',
    link2: '#',
  },
  title: ' Successfully updated profile',
};
