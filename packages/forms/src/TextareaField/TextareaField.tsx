import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Textarea,
  TextareaProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import omit from 'lodash/omit';
import React, { forwardRef, ReactNode } from 'react';
import FormContainer, {
  FormContainerProps,
} from '../FormContainer/FormContainer';

export interface TextAreaFieldProps
  extends FormContainerProps,
    Omit<TextareaProps, 'onBlur' | 'id' | 'onChange' | 'size' | 'labelColor'> {
  type?: string;
  autoFocus?: boolean;
  placeholder: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  limit?: number | undefined;
  isInvalid?: boolean | undefined;
  isDisabled?: boolean;
  variant?: string;
  __testId?: string;
}

const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  (props, ref) => {
    const {
      isDisabled = false,
      autoFocus,
      leftIcon,
      rightIcon,
      onChange,
      onBlur,
      __testId,
      name,
      limit,
      variant = 'outline',
      size,
    } = props;
    const styles = useMultiStyleConfig('Form', { variant, size });

    return (
      <FormContainer {...props}>
        <InputGroup>
          {leftIcon && (
            <InputLeftElement pointerEvents="none">{leftIcon}</InputLeftElement>
          )}
          <Textarea
            isDisabled={isDisabled}
            maxLength={limit}
            errorBorderColor="red.500"
            autoFocus={autoFocus}
            ref={ref}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            sx={styles.formTextarea}
            color="gray.700"
            resize="vertical"
            {...omit(props, 'errorMsg')}
            data-testid={__testId ?? `hds.textarea.field.input`}
          />
          {rightIcon && <InputRightElement>{rightIcon}</InputRightElement>}
        </InputGroup>
      </FormContainer>
    );
  }
);

export default TextAreaField;
