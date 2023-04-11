import { Flex, FlexProps, Text, VStack } from '@highoutput/hds';
import { Checkbox } from '@highoutput/hds-checkbox';
import React from 'react';
export interface StepperProps {
  steps: {
    label: string;
    description: string;
  }[];
  active: number;
  onClickStep?: (activeStep: number) => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  orientation?: 'horizontal' | 'vertical';
  stepContentGap: string;
}

const Stepper = ({
  steps,
  active,
  onClickStep,
  size = 'lg',
  children,
  orientation = 'horizontal',
  stepContentGap,
}: StepperProps & React.PropsWithChildren<FlexProps>) => {
  return (
    <Flex
      flexDirection="column"
      gap={stepContentGap}
      {...(orientation === 'horizontal' && {
        mx: '129px',
      })}
      w="fit-content"
    >
      <Flex
        position="relative"
        w="fit-content"
        direction={orientation === 'vertical' ? 'column' : 'row'}
        justifyContent="center"
        align={'center'}
      >
        {steps.map((step, idx) => {
          const stepNumber = idx + 1;

          const prevStep = active - 1;
          return (
            <>
              {idx !== 0 && orientation === 'horizontal' && (
                <Flex
                  width={'325px'}
                  height={'2px'}
                  bgColor={stepNumber <= active ? '#7F56D9' : '#EAECF0'}
                />
              )}
              <Flex
                position={'relative'}
                justifyContent="center"
                align={'start'}
              >
                <Flex zIndex={1}>
                  <Checkbox
                    size={size}
                    type="radioType"
                    radio_icon={
                      stepNumber < active ? 'checkIcon' : 'circleIcon'
                    }
                    variant="primary.solid"
                    onChange={() => {
                      stepNumber <= active + 1 && onClickStep?.(stepNumber);
                    }}
                    isChecked={stepNumber <= active}
                    defaultChecked={prevStep < active}
                    data-testid={`hds.stepper.checkbox.${idx}`}
                  />
                </Flex>
                <VStack
                  width="320px"
                  key={`${step.label}-${idx}`}
                  spacing="2px"
                  left={orientation === 'horizontal' ? '50%' : '120%'}
                  justify="start"
                  alignItems={'start'}
                  {...(orientation === 'horizontal' && {
                    transform: 'translateX(-50%)',
                    position: 'absolute',
                  })}
                  top={orientation === 'vertical' ? 0 : '130%'}
                >
                  <Text
                    size="label-sm-default"
                    color={
                      active === stepNumber
                        ? 'brand.primary.900'
                        : 'neutrals.900'
                    }
                    width={'100%'}
                    fontWeight={600}
                    fontSize={size}
                    {...(orientation === 'vertical' && {
                      pl: '4px',
                    })}
                    {...(orientation === 'vertical' &&
                      size !== 'sm' &&
                      size !== 'md' && {
                        pt: '4px',
                      })}
                    textAlign={
                      orientation === 'horizontal' ? 'center' : 'start'
                    }
                    data-testid={`hds.stepper.label.${idx}`}
                  >
                    {step.label}
                  </Text>
                  <Text
                    size="paragraph-md-default"
                    color={
                      active === stepNumber
                        ? 'brand.primary.700'
                        : 'neutrals.600'
                    }
                    fontWeight="400"
                    fontSize={size}
                    width={'full'}
                    {...(orientation === 'vertical' && {
                      borderLeft:
                        steps.length - 1 !== idx
                          ? stepNumber < active
                            ? '2px solid #7F56D9'
                            : '2px solid #EAECF0'
                          : '2px solid transparent',
                      pb: '26px',
                      left:
                        size === 'sm'
                          ? '-9px'
                          : size === 'lg'
                          ? '-4%'
                          : size === 'md'
                          ? '-3%'
                          : '-5%',
                      position: 'relative',
                      pl:
                        size === 'sm'
                          ? '10px'
                          : size === 'lg'
                          ? '15px'
                          : size === 'md'
                          ? '10px'
                          : '18px',
                    })}
                    textAlign={
                      orientation === 'horizontal' ? 'center' : 'start'
                    }
                  >
                    {step.description}
                  </Text>
                </VStack>
              </Flex>
            </>
          );
        })}
      </Flex>

      {children}
    </Flex>
  );
};

export default Stepper;
