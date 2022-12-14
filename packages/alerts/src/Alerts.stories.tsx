import { Flex } from '@chakra-ui/react';
import ThemeProvider from '@highoutput/hds/src/components/ThemeProvider';
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
  alertLinks: ['google.com', 'twitter.com'],
  alertLabel: ['Learn More', 'View Changes'],
  title: 'We’ve just released a new feature',
};
Info.args = {
  ...Default.args,
  supportingDetail:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
  status: 'info',
  alertLinks: ['google.com', 'twitter.com'],
  alertLabel: ['Learn More', 'View Changes'],
  title: 'We’ve just released a new feature',
};
Error.args = {
  ...Default.args,
  supportingDetail:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
  status: 'error',
  alertLinks: ['google.com', 'twitter.com'],
  alertLabel: ['Learn More', 'View Changes'],
  title: 'There was a problem with that action',
};
Warning.args = {
  ...Default.args,
  supportingDetail:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
  status: 'warning',
  alertLinks: ['google.com', 'twitter.com'],
  alertLabel: ['Learn More', 'View Changes'],
  title: 'Just to let you know this might be a problem',
};
Success.args = {
  ...Default.args,
  supportingDetail:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
  status: 'success',
  alertLinks: ['google.com', 'twitter.com'],
  alertLabel: ['Learn More', 'View Changes'],
  title: ' Successfully updated profile',
};
