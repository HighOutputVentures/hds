import { Flex } from '@chakra-ui/react';
import ThemeProvider from '@highoutput/hds/src/components/ThemeProvider';
import { useArgs } from '@storybook/addons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import SearchIcon from '../Icon/SearchIcon';
import InputDropdown from './InputDropdown';

export default {
  title: 'Components/Input Dropdown',
  component: InputDropdown,
} as ComponentMeta<typeof InputDropdown>;

const Template: ComponentStory<typeof InputDropdown> = (props) => {
  const [args, setArgs] = useArgs();

  const onChange = (value: any[]) => {
    setArgs({ ...args, value });
  };

  return (
    <ThemeProvider>
      <Flex gap={4} flexDir="column">
        <InputDropdown
          {...props}
          onChangeValue={onChange}
          options={args.options}
          helperMsg="This is a hint to help user"
          inputLeftIcon={SearchIcon}
        />
      </Flex>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

const options = [
  {
    value: 'Phoenix',
    label: 'Phoenix',
    username: '@phoenix',
    avatar:
      'https://assets.teenvogue.com/photos/626abe370979f2c5ace0ab29/16:9/w_2560%2Cc_limit/GettyImages-1352932505.jpg',
  },
  {
    value: 'Olivia',
    label: 'Olivia',
    username: '@olivia',
    avatar:
      'https://static01.nyt.com/images/2021/05/21/arts/21review-rodrigo01/merlin_188054001_2a34e77d-e653-488a-a4d9-1a0f1ddf73e4-superJumbo.jpg',
  },
];

Default.args = {
  ...Default.args,
  label: 'Users',
  options: options,
  placeholder: 'Add users',
};
