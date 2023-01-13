import { Button, Flex } from '@chakra-ui/react';
import ThemeProvider from '@highoutput/hds/src/components/ThemeProvider';
import { ComponentMeta, ComponentStory } from '@storybook/react';
//@ts-ignore
import React from 'react';

import Stepper from './Stepper';
// const avatar = require('../../../../../assets/avatar.png');
export default {
  title: 'Components/Stepper',
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (props) => {
  const steps = [
    {
      label: 'App details',
      description: 'Please provide your app details',
      step: 1,
    },
    {
      label: 'Setting up Page',
      description: 'Start populating the page',
      step: 2,
    },
    { label: 'Review', description: 'Publish the page', step: 3 },
    { label: 'Finish', description: 'Finish', step: 4 },
  ];
  const [active, setActive] = React.useState<any>(1);
  const handleNextStep = () => {
    setActive((prev: number) => prev + 1);
  };
  const handlePrevStep = () => {
    setActive((prev: number) => prev - 1);
  };
  const handleOnClickStep = (step: number) => {
    //  form validation eligible for next step
    //   if no error
    //   set active step

    setActive(step);
    // else
    // display errors
  };
  return (
    <ThemeProvider>
      <Flex alignItems="start" flexDir="row" height={'500px'}>
        <Stepper
          {...props}
          steps={steps}
          active={active}
          onClickStep={(d: any) => handleOnClickStep(d)}
        >
          <Button onClick={() => handleNextStep()}>Next</Button>
          <Button onClick={() => handlePrevStep()}>Prev</Button>
        </Stepper>
      </Flex>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
