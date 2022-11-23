import {
  FormControl,
  // FormControlProps,
  FormErrorMessage,
  // FormErrorMessageProps,
  FormHelperText,
  FormLabel,
  // FormLabelProps,
  // HelpTextProps,
  ThemingProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import React, { FC, ReactNode, useId } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

// type WithoutChildren<T> = Omit<T, 'children'>;

// export interface FormContainerPartProps {
//   formControl?: WithoutChildren<FormControlProps>;
//   formLabel?: WithoutChildren<FormLabelProps>;
//   formErrorMessage?: WithoutChildren<FormErrorMessageProps>;
//   formHelperText?: WithoutChildren<HelpTextProps>;
// }
export interface FormContainerProps
  extends Partial<UseFormRegisterReturn>,
    ThemingProps {
  id?: string;
  label?: string;
  labelColor?: string;
  errorMsg?: string;
  helperMsg?: string;
  disabled?: boolean;
  children?: ReactNode;
  // partProps?: Partial<FormContainerPartProps>;
}

const FormContainer: FC<FormContainerProps> = ({
  id,
  label,
  labelColor,
  errorMsg,
  helperMsg,
  children,
  disabled,
  variant,
}) => {
  const styles = useMultiStyleConfig('Form', { variant });
  const uid = useId();

  return (
    <FormControl
      id={id}
      isInvalid={Boolean(errorMsg)}
      isReadOnly={disabled}
      data-testid={`${uid}-form-container-form-control`}
      sx={styles.formControl}
      aria-label="Form Group"
    >
      {label && (
        <FormLabel
          borderRadius="4px"
          {...(labelColor && { color: labelColor })}
          data-testid={`${uid}-form-container-label`}
          sx={styles.formLabel}
        >
          {label}
        </FormLabel>
      )}
      {children}
      <FormErrorMessage
        sx={styles.formErrorMessage}
        data-testid={`${uid}-form-container-error`}
      >
        {errorMsg}
      </FormErrorMessage>
      {helperMsg && (
        <FormHelperText
          sx={styles.formHelperText}
          data-testid={`${uid}-form-container-helper`}
        >
          {helperMsg}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default FormContainer;
