import {
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
  InputRightElement,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import React, { forwardRef, ReactNode, useId } from 'react';
import FormContainer, {
  FormContainerProps,
} from '../FormContainer/FormContainer';

export interface InputFieldProps extends Omit<FormContainerProps, 'partProps'> {
  size?: InputGroupProps['size'];
  type?: string;
  maxLength?: number;
  autoFocus?: boolean;
  placeholder?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  autoComplete?: string;
  disabled?: boolean;
  readOnly?: boolean;
  defaultValue?: string;
  variant?: string;
  onPressEnter?(event: React.KeyboardEvent<HTMLInputElement>): void;
  inputValue?: string | undefined;
  __testId?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const {
      type = 'text',
      size = 'md',
      __testId,
      maxLength,
      autoFocus,
      placeholder,
      leftIcon,
      rightIcon,
      onChange,
      onBlur,
      name,
      autoComplete,
      disabled,
      readOnly,
      defaultValue,
      variant = 'outline',
      onPressEnter,
      inputValue,
    } = props;
    const styles = useMultiStyleConfig('Form', { variant, size });
    const uid = useId();

    return (
      <FormContainer {...props}>
        <InputGroup
          sx={styles.formInputGroup}
          size={size}
          data-testid={`${uid}-input-field-group`}
        >
          {leftIcon && (
            <InputLeftElement data-testid={`${uid}-input-field-left-element`}>
              {leftIcon}
            </InputLeftElement>
          )}
          <Input
            sx={styles.formInput}
            errorBorderColor="red.500"
            autoFocus={autoFocus}
            ref={ref}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            disabled={disabled}
            readOnly={readOnly}
            defaultValue={defaultValue}
            maxLength={maxLength}
            variant={variant}
            onKeyDown={(e) => {
              if (e.key === 'Enter') onPressEnter?.(e);
            }}
            value={inputValue ? inputValue.trim() : undefined}
            role="input"
            data-testid={__testId ?? `${uid}-input-field-input`}
          />
          {rightIcon && (
            <InputRightElement data-testid={`${uid}-input-field-right-element`}>
              {rightIcon}
            </InputRightElement>
          )}
        </InputGroup>
      </FormContainer>
    );
  }
);

export default InputField;
