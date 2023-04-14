import { Flex, Text, VStack } from '@chakra-ui/react';
import { Checkbox } from '@highoutput/hds-forms';
import React, { PropsWithChildren } from 'react';
export interface StepperProps {
  items: {
    label: string;
    description: string;
  }[];
  value: number;
  onChange?: (activeStep: number) => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  orientation?: 'horizontal' | 'vertical';
  gap: string;
}

const Stepper = ({
  items,
  value,
  onChange,
  size = 'lg',
  children,
  orientation = 'horizontal',
  gap,
}: PropsWithChildren<StepperProps>) => {
  return (
    <Flex
      flexDirection="column"
      gap={gap}
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
        {items.map((step, idx) => {
          const stepNumber = idx + 1;

          const prevStep = value - 1;
          return (
            <>
              {idx !== 0 && orientation === 'horizontal' && (
                <Flex
                  width={'325px'}
                  height={'2px'}
                  bgColor={stepNumber <= value ? '#7F56D9' : '#EAECF0'}
                />
              )}
              <Flex
                position={'relative'}
                justifyContent="center"
                align={'start'}
              >
                <Flex zIndex={1}>
                  <Checkbox
                    size={size === 'sm' || size === 'md' ? 'sm' : 'md'}
                    variant="solid"
                    onChange={() => {
                      stepNumber <= value + 1 && onChange?.(stepNumber);
                    }}
                    isChecked={stepNumber <= value}
                    defaultChecked={prevStep < value}
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
                      value === stepNumber
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
                      value === stepNumber
                        ? 'brand.primary.700'
                        : 'neutrals.600'
                    }
                    fontWeight="400"
                    fontSize={size}
                    width={'full'}
                    {...(orientation === 'vertical' && {
                      borderLeft:
                        items.length - 1 !== idx
                          ? stepNumber < value
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
