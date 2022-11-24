import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  ThemeTypings,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import React, { forwardRef, ReactNode, useId } from 'react';
import FormContainer, {
  FormContainerProps,
} from '../FormContainer/FormContainer';

// type WithoutChildren<T> = Omit<T, 'children'>;

// export interface InputFieldPartProps extends FormContainerPartProps {
//   input?: WithoutChildren<InputProps>;
//   inputGroup?: WithoutChildren<InputGroupProps>;
//   inputLeftElement?: WithoutChildren<InputElementProps>;
//   inputRightElement?: WithoutChildren<InputElementProps>;
// }
export interface InputFieldProps extends Omit<FormContainerProps, 'partProps'> {
  size?: ThemeTypings['sizes'];
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
  __testId?: string;
  variant?: string;
  onPressEnter?(): void;
  inputValue?: string | undefined;
  // partProps?: Partial<InputFieldPartProps>;
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
            // {...partProps?.input}
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
            onKeyPress={(e: { key: string }) => {
              if (e.key === 'Enter') {
                if (onPressEnter) onPressEnter();
              }
            }}
            value={inputValue ? inputValue.trim() : undefined}
            role="input"
            data-testid={__testId ?? `${uid}-input-field-input`}
          />
          {rightIcon && (
            <InputRightElement
              // {...partProps?.inputRightElement}
              data-testid={`${uid}-input-field-right-element`}
            >
              {rightIcon}
            </InputRightElement>
          )}
        </InputGroup>
      </FormContainer>
    );
  }
);

export default InputField;
