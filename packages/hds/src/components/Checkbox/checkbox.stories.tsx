import { HStack, VStack } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ThemeProvider } from '../..';
import Checkbox from './checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: {
      name: 'disabled',
      type: {
        name: 'boolean',
        required: false,
      },
      description: 'true, false',
      defaultValue: false,
      control: 'boolean',
    },
    size: {
      name: 'size',
      type: {
        name: 'string',
        required: false,
      },
      description: `"sm", "md", "lg", "xl"`,
      defaultValue: 'sm',
      control: 'radio',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    type: {
      name: 'checkbox type',
      type: {
        name: 'string',
        required: false,
      },
      defaultValue: 'checkboxType',
      description: 'checkboxType, radioType',
      control: 'radio',
      options: ['checkboxType', 'radioType'],
    },
    checkbox_icon: {
      name: 'checkbox icon type',
      type: {
        name: 'string',
        required: false,
      },
      defaultValue: 'checkIcon',
      control: 'radio',
      if: {
        arg: 'type',
        eq: 'checkboxType',
      },
      options: ['checkIcon', 'minusIcon'],
    },
    radio_icon: {
      name: 'radio icon type',
      type: {
        name: 'string',
        required: false,
      },
      defaultValue: 'circleIcon',
      control: 'radio',
      if: {
        arg: 'type',
        eq: 'radioType',
      },
      options: ['checkIcon', 'circleIcon'],
    },
    variant: {
      name: 'variant',
      type: {
        name: 'string',
        required: false,
      },
      description: "'primary.outlined','primary.solid'",
      defaultValue: 'primary.outlined',
      control: 'radio',
      options: ['primary.outlined', 'primary.solid'],
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <ThemeProvider>
      <HStack spacing="20px">
        <VStack>
          <VStack mb="20px">
            <Checkbox {...args} />
            <Checkbox {...args} disabled />
            <Checkbox {...args} isChecked />
            <Checkbox {...args} isChecked disabled />
          </VStack>
          <VStack>
            <Checkbox {...args} type="checkboxType" checkbox_icon="minusIcon" />
            <Checkbox
              {...args}
              type="checkboxType"
              checkbox_icon="minusIcon"
              disabled
            />
            <Checkbox
              {...args}
              type="checkboxType"
              checkbox_icon="minusIcon"
              isChecked
            />
            <Checkbox
              {...args}
              type="checkboxType"
              checkbox_icon="minusIcon"
              isChecked
              disabled
            />
          </VStack>
        </VStack>
        <VStack>
          <VStack mb="20px">
            <Checkbox {...args} type="radioType" radio_icon="circleIcon" />
            <Checkbox
              {...args}
              type="radioType"
              radio_icon="circleIcon"
              disabled
            />
            <Checkbox
              {...args}
              type="radioType"
              radio_icon="circleIcon"
              isChecked
            />
            <Checkbox
              {...args}
              type="radioType"
              radio_icon="circleIcon"
              isChecked
              disabled
            />
          </VStack>

          <VStack>
            <Checkbox {...args} type="radioType" radio_icon="checkIcon" />
            <Checkbox
              {...args}
              type="radioType"
              radio_icon="checkIcon"
              disabled
            />
            <Checkbox
              {...args}
              type="radioType"
              radio_icon="checkIcon"
              isChecked
            />
            <Checkbox
              {...args}
              type="radioType"
              radio_icon="checkIcon"
              isChecked
              disabled
            />
          </VStack>
        </VStack>
      </HStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  label: 'Remember me',
  helperMsg: 'Save my login details for next time.',
  onCheck: () => {},
};
