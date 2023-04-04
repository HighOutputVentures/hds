import { Box, Icon } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { ComponentStory, Meta } from '@storybook/react';
import * as React from 'react';
import Combobox from './Combobox';
import SearchIcon from './examples/SearchIcon';

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
};

export default meta;

enum IdEnum {
  One,
  Two,
  Three,
  Four,
  Five,
}

const Template: ComponentStory<typeof Combobox> = (args) => {
  return (
    <ThemeProvider>
      <Box h="500px">
        <Box>
          <Combobox {...args} />
        </Box>
        <Box mt={4}>
          <Combobox {...args} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
  options: [
    { value: IdEnum.One, label: 'John' },
    { value: IdEnum.Two, label: 'Paul' },
    { value: IdEnum.Three, label: 'Mark' },
    { value: IdEnum.Four, label: 'Mary' },
    { value: IdEnum.Five, label: 'Jake' },
  ],
  placeholder: 'Please select',
  onChange(newValue) {
    console.log(newValue);
  },
  zIndex: 9,
  leftIcon: <Icon as={SearchIcon} w={5} h={5} />,
  isClearable: true,
};
