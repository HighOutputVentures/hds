import { Flex } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Alerts from './Alert';

export default {
  title: 'Components/Alerts',
  component: Alerts,
} as ComponentMeta<typeof Alerts>;

const Template: ComponentStory<typeof Alerts> = (props) => {
  return (
    <ThemeProvider>
      <Flex
        gap={'50px'}
        flexDir="column"
        width="full"
        justify={'center'}
        align={'center'}
      >
        <Alerts {...props} isOpen={true} />
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
