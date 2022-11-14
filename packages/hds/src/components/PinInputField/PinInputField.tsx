import {
  Box,
  HStack,
  PinInput,
  PinInputField as Pin,
  PinInputProps,
  useStyleConfig,
} from '@chakra-ui/react';
import React, { forwardRef, useId, useMemo } from 'react';
import { ChangeHandler } from 'react-hook-form';

import FormContainer, {
  FormContainerProps,
} from '../FormContainer/FormContainer';
import InputField from '../InputField/InputField';

export interface PinInputFieldProps
  extends Omit<
      FormContainerProps,
      'onChange' | 'partProps' | 'size' | 'variant'
    >,
    Omit<PinInputProps, 'onChange' | 'children' | 'id'> {
  numberOfFields?: number;
  onChange: ChangeHandler;
  errorMsg?: string | undefined;
}

const PinInputField = forwardRef<HTMLInputElement, PinInputFieldProps>(
  (props, _) => {
    const {
      numberOfFields = 3,
      onChange,
      size,
      variant = 'outline',
      name,
      type = 'alphanumeric',
      onComplete,
      disabled,
    } = props;
    const styles = useStyleConfig('PinInputField', { size, variant });

    const fieldsArray = useMemo(() => {
      return numberOfFields <= 6
        ? Array.from({ length: numberOfFields })
        : Array.from({ length: 3 });
    }, [numberOfFields]);

    const uid = useId();

    return (
      <FormContainer {...props}>
        <HStack spacing={3}>
          <PinInput
            autoFocus
            otp
            focusBorderColor="brand.primary.700"
            errorBorderColor="red.300"
            isInvalid={Boolean(props?.errorMsg)}
            type={type}
            isDisabled={disabled}
            variant={variant}
            {...props}
            placeholder="0"
            onChange={(value) => {
              onChange?.({ target: { value, name } });
            }}
            onComplete={onComplete}
            data-testid={`${uid}-pininput-input`}
          >
            {fieldsArray.map((_, idx) => {
              return (
                <React.Fragment key={idx}>
                  {fieldsArray.length === 6 && idx === 3 && (
                    <Box
                      fontSize="60px"
                      fontWeight="500"
                      color="#D0D5DD"
                      height="64px"
                      textAlign="center"
                      display="flex"
                      alignItems="center"
                      pb="10px"
                    >
                      -
                    </Box>
                  )}
                  <Pin
                    fontWeight="semibold"
                    w="12"
                    h="12"
                    key={idx}
                    sx={styles}
                    data-testid={`${uid}-pininput-pin-${idx}`}
                  />
                </React.Fragment>
              );
            })}
          </PinInput>
        </HStack>
        <InputField />
      </FormContainer>
    );
  }
);

PinInputField.displayName = 'PinInputField';

export default PinInputField;
