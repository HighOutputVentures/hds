import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Box, useBoolean } from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import InputField, { InputFieldProps } from '../InputField/InputField';

export type PasswordInputFieldProps = Omit<
  InputFieldProps,
  'type' | 'leftIcon' | 'rightIcon'
>;

export default forwardRef<HTMLInputElement, PasswordInputFieldProps>(
  function PasswordInputField({ __testId, ...props }, ref) {
    const [hidden, { toggle }] = useBoolean(true);

    const toggleControl = (
      <Box
        as="span"
        role="button"
        aria-live="polite"
        aria-label={hidden ? 'Show password' : 'Hide password'}
        cursor="pointer"
        bgColor="transparent"
        onClick={toggle}
        tabIndex={-1}
      >
        {hidden && <ViewIcon role="img" aria-label="Eye open" />}
        {!hidden && <ViewOffIcon role="img" aria-label="Eye closed" />}
      </Box>
    );

    return (
      <InputField
        ref={ref}
        __testId={__testId ?? 'hds.password.input.field'}
        rightIcon={toggleControl}
        {...(hidden && { type: 'password' })}
        {...props}
      />
    );
  }
);
