import { Flex } from '@chakra-ui/react';
import { ThemeProvider } from '@highoutput/hds';
import { Stepper } from '@highoutput/hds-stepper';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Stepper',
  component: Stepper,
} as Meta<typeof Stepper>;

const Template: StoryFn<typeof Stepper> = (props) => {
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
          onChange={(d) => handleOnClickStep(d)}
        ></Stepper>
      </Flex>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
