import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  ThemingProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';


export interface FormContainerProps
  extends Partial<UseFormRegisterReturn>,
    ThemingProps {
  id?: string;
  label?: string;
  errorMsg?: string;
  helperMsg?: string;
  disabled?: boolean;
  children?: ReactNode;
  __formControlTestId?: string;
  __formLabelTestId?: string;
  __formErrorMessageTestId?: string;
  __formHelperTextTestId?: string;
}

const FormContainer: FC<FormContainerProps> = ({
  id,
  label,
  errorMsg,
  helperMsg,
  children,
  disabled,
  variant,
  __formControlTestId,
  __formErrorMessageTestId,
  __formHelperTextTestId,
  __formLabelTestId,
}) => {
  const styles = useMultiStyleConfig('Form', { variant });

  return (
    <FormControl
      id={id}
      isInvalid={Boolean(errorMsg)}
      isReadOnly={disabled}
      data-testid={__formControlTestId ?? 'hds.form.control'}
      sx={styles.formControl}
      aria-label="Form Group"
    >
      {label && (
        <FormLabel
          borderRadius="4px"
          data-testid={__formLabelTestId ?? `hds.form.control.label`}
          sx={styles.formLabel}
        >
          {label}
        </FormLabel>
      )}
      {children}
      <FormErrorMessage
        sx={styles.formErrorMessage}
        data-testid={
          __formErrorMessageTestId ?? `hds.form.control.error.message`
        }
      >
        {errorMsg}
      </FormErrorMessage>
      {helperMsg && (
        <FormHelperText
          sx={styles.formHelperText}
          data-testid={
            __formHelperTextTestId ?? `hds.form.container.helper.message`
          }
        >
          {helperMsg}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default FormContainer;
