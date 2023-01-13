import { Box, Checkbox, Flex, FlexProps, Text, VStack } from '@highoutput/hds';
import React from 'react';

export interface StepperProps {
  steps: { label: string; description: string; step: number }[];
  active: number;
  onClickStep?: (activeStep: number) => void;
}

const Stepper = ({
  steps,
  active,
  onClickStep,

  children,

  ...props
}: StepperProps & React.PropsWithChildren<FlexProps>) => {
  const [newStep, setNewStep] = React.useState<
    {
      label: string;
      description: string;
      step: number;
      isDone: boolean;
    }[]
  >([]);
  const handleNewStepFormat = () => {
    const newStep = steps.map((step) => {
      return {
        label: step.label,
        description: step.description,
        step: step.step,
        isDone: false,
      };
    });
    setNewStep(newStep);
  };

  const handleToggleStep = (stepNumber: number) => {
    setNewStep(
      newStep.map((step) => {
        return { ...step, isDone: step.step < stepNumber ? true : false };
      })
    );
  };

  React.useEffect(() => {
    handleNewStepFormat();
  }, []);
  console.log(active);
  console.log(newStep);
  return (
    <Flex
      w="full"
      flexDirection="column"
      justify="center"
      align="center"
      mt="67px"
      {...props}
      gap="16px"
    >
      <Flex
        maxWidth="992px"
        position="relative"
        align="center"
        justify="center"
        w="full"
      >
        {newStep.map((step, idx) => {
          const { step: stepNumber } = step;
          const prevStep = active - 1;
          return (
            <>
              {idx !== 0 && (
                <Box
                  width="325px"
                  height="2px"
                  bgColor={stepNumber <= active ? '#7F56D9' : '#EAECF0'}
                />
              )}
              <Box position={'relative'}>
                <Checkbox
                  size="xl"
                  type="radioType"
                  radio_icon={
                    step.isDone || step.step < active
                      ? 'checkIcon'
                      : 'circleIcon'
                  }
                  variant="primary.solid"
                  onChange={() => {
                    step.step <= active + 1 && onClickStep?.(stepNumber);
                    handleToggleStep(stepNumber);
                  }}
                  isChecked={step.step <= active}
                  defaultChecked={prevStep < active}
                />
                <VStack
                  maxW="320px"
                  width="full"
                  key={`${step.label}-${idx}`}
                  spacing="2px"
                  position={'absolute'}
                >
                  <Text
                    size="label-sm-default"
                    color={
                      active === step.step ? 'primary.new-900' : 'neutrals.900'
                    }
                    width={'100%'}
                    textAlign={'center'}
                  >
                    {step.label}
                  </Text>
                  <Text
                    size="paragraph-md-default"
                    color={
                      active === step.step ? 'primary.new-700' : 'neutrals.600'
                    }
                    fontWeight="400"
                    width={'full'}
                    textAlign={'center'}
                  >
                    {step.description}
                  </Text>
                </VStack>
              </Box>
            </>
          );
        })}
        {/* <Checkbox
          size="xl"
          type="radioType"
          radio_icon={active === 2 || active === 3 ? 'checkIcon' : 'circleIcon'}
          variant="primary.solid"
          isChecked={active === 1 || active === 2 || active === 3}
          defaultChecked={active === 1 || active === 2 || active === 3}
        />
        <Box
          width="325px"
          height="2px"
          bgColor={active === 2 || active === 3 ? '#7F56D9' : '#EAECF0'}
        />
        <Checkbox
          size="xl"
          type="radioType"
          isChecked={active === 2 || active === 3}
          radio_icon={active === 3 ? 'checkIcon' : 'circleIcon'}
          variant="primary.solid"
          defaultChecked={active === 2 || active === 3}
        />
        <Box
          width="325px"
          height="2px"
          bgColor={active === 3 ? '#7F56D9' : '#EAECF0'}
        />
        <Checkbox
          defaultChecked={active === 3}
          isChecked={active === 3}
          variant="primary.solid"
          size="xl"
          type="radioType"
          radio_icon="checkIcon"
        /> */}
      </Flex>
      {/* <Flex w="full" gap="80px" maxW="992px" justify="space-around">
        {newStep.map((step, idx) => (
         
        ))}
      </Flex> */}
      <Flex flexDir="column" align="center" mt="105px" w="full">
        {children}
      </Flex>
      {/* <Button onClick={() => handleNextStepS()}>Next</Button>
      <Button onClick={() => handlePrevStepS()}>Prev</Button> */}
    </Flex>
  );
};

export default Stepper;
