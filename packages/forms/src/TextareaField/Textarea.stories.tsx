import { Flex, ThemeProvider } from '@highoutput/hds';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TextareaField from './TextareaField';

export default {
  title: 'Components/Form Fields/Preview/Textarea Field',
  component: TextareaField,
} as ComponentMeta<typeof TextareaField>;

const Template: ComponentStory<typeof TextareaField> = (args) => (
  <ThemeProvider>
    <Flex flexDirection="column" gap={4}>
      <TextareaField {...args} helperMsg="This is a hint to help user" />
      <TextareaField
        {...args}
        value="Hello world"
        helperMsg="This is a hint to help user"
      />
      <TextareaField
        {...args}
        value="Hello world"
        name="textAreaField"
        helperMsg="This is a hint to help user"
        disabled
      />
      <TextareaField
        {...args}
        value="Hello world"
        name="textAreaField"
        errorMsg="This is a error message"
      />
    </Flex>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  id: 'description',
  label: 'Description',
  placeholder: 'Write something here ...',
};
