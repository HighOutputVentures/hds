import { Flex, ThemeProvider } from '@highoutput/hds';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import InputField from './InputField';

export default {
  title: 'Components/Form Fields/Preview/Input Field',
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <ThemeProvider>
    <Flex gap={4} flexDirection="column">
      <InputField {...args} helperMsg="This is a hint text to help user" />
      <InputField
        {...args}
        inputValue="Hello world"
        helperMsg="This is a hint text to help user"
      />
      <InputField
        {...args}
        helperMsg="This is a hint text to help user"
        disabled
      />
      <InputField {...args} errorMsg="This is an error message" />
    </Flex>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  id: 'name',
  label: 'Name',
  placeholder: 'Input your name',
};
