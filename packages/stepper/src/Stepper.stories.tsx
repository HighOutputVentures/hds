import { Flex } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '~/hds';
//@ts-ignore
import React from 'react';

import Stepper from './Stepper';

export default {
  title: 'Components/Stepper',
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (props) => {
  const items = [
    {
      label: 'Your details',
      description: 'Please provide your name and email',
    },
    {
      label: 'Company details',
      description: 'A few details about your company',
    },
    {
      label: 'Invite your team',
      description: 'Start collaborating with your team',
    },
  ];
  const [value, setValue] = React.useState<number>(1);

  const handleOnClickStep = (step: number) => {
    //  form validation eligible for next step
    //   if no error
    //   set active step
    setValue(step);
    // else
    // display errors
  };
  return (
    <ThemeProvider>
      <Flex alignItems="start" flexDir="row" height={'500px'}>
        <Stepper
          {...props}
          items={items}
          value={value}
          onChangeStep={(d) => handleOnClickStep(d)}
        ></Stepper>
      </Flex>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
