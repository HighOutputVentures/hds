// @ts-nocheck

import { extendTheme, VStack } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import AUIcon from './examples/AUIcon';
import Tag from './Tag';
import { omit } from './utils';
import withTag from './withTag';

// @ts-ignore
import { theme, ThemeProvider } from '../../hds/src';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    size: {
      name: 'size',
      type: {
        name: 'string',
        required: false,
      },
      defaultValue: 'md',
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => {
  return (
    <ThemeProvider theme={extendTheme(theme, withTag())}>
      <VStack align="start" spacing={4}>
        <Tag label="" {...omit(args, 'icon', 'avatar', 'checkbox', 'indicator', 'closable')} />
        <Tag label="" {...omit(args, 'icon', 'avatar', 'checkbox', 'indicator')} />
        <Tag label="" {...omit(args, 'icon', 'avatar', 'checkbox')} />
        <Tag label="" {...omit(args, 'icon', 'indicator')} />
        <Tag label="" {...omit(args, 'avatar', 'indicator')} />
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Label',
  closable: true,
  onClose: () => {},
  avatar: 'https://i.pravatar.cc/25',
  indicator: true,
  checkbox: true,
  icon: AUIcon,
  onCheck: () => {},
  ...Default.args,
};
