import { HStack, VStack } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ThemeProvider } from '@highoutput/hds/src';
import Checkbox from './checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <ThemeProvider>
      <HStack spacing="20px">
        <VStack>
          <VStack mb="20px">
            <Checkbox {...args} type="checkboxType" checkbox_icon="checkIcon" />
            <Checkbox
              {...args}
              disabled
              type="checkboxType"
              checkbox_icon="checkIcon"
            />
            <Checkbox
              {...args}
              isChecked
              type="checkboxType"
              checkbox_icon="checkIcon"
            />
            <Checkbox
              {...args}
              isChecked
              disabled
              type="checkboxType"
              checkbox_icon="checkIcon"
            />
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
