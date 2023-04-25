import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  SystemStyleObject,
} from '@chakra-ui/react';
import * as React from 'react';

type StylingProps = SystemStyleObject;

export type FormGroupProps = StylingProps & {
  id?: string;
  hint?: string;
  label?: string;
  error?: string | boolean;
  children?: JSX.Element;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;

  __hintTestId?: string;
  __errorTestId?: string;
  __labelTestId?: string;
  __groupTestId?: string;
};

export default React.forwardRef<HTMLDivElement, FormGroupProps>(function FormGroup(
  props,
  ref,
) {
  const {
    id,
    hint,
    label,
    error,
    children,
    isDisabled,
    isReadOnly,
    isRequired,

    __hintTestId = 'hds.form-group.hint',
    __errorTestId = 'hds.form-group.error',
    __labelTestId = 'hds.form-group.label',
    __groupTestId = 'hds.form-group.group',

    ...others
  } = props;

  const shouldShowError = typeof error === 'string' && !!error.trim().length;
  const shouldShowHint = !shouldShowError && !!hint;

  return (
    <FormControl
      id={id}
      ref={ref}
      isInvalid={!!error}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      data-testid={__groupTestId}
      sx={others}
    >
      {!!label && (
        <FormLabel
          color="neutrals.900"
          fontSize="14px"
          fontWeight="600"
          lineHeight="14px"
          letterSpacing="0.02em"
          marginBottom="6px"
          data-testid={__labelTestId}
          _disabled={{}}
        >
          {label}
        </FormLabel>
      )}

      {children}

      {shouldShowHint && (
        <FormHelperText
          color="neutrals.700"
          fontSize="14px"
          lineHeight="14px"
          letterSpacing="0.02em"
          marginTop="6px"
          data-testid={__hintTestId}
        >
          {hint}
        </FormHelperText>
      )}

      {shouldShowError && (
        <FormErrorMessage
          color="interface.error.700"
          fontSize="14px"
          lineHeight="14px"
          letterSpacing="0.02em"
          marginTop="6px"
          data-testid={__errorTestId}
        >
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
});
