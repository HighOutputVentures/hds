import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  // ButtonProps,
  // InputElementProps,
  // InputGroupProps,
  // InputProps,
} from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import InputField from '../InputField/InputField';

// type WithoutChildren<T> = Omit<T, 'children'>;

export interface PasswordInputFieldProps extends UseFormRegisterReturn {
  // partProps?: Partial<{
  //   button?: WithoutChildren<ButtonProps>;
  //   input?: WithoutChildren<InputProps>;
  //   inputGroup?: WithoutChildren<InputGroupProps>;
  //   inputLeftElement?: WithoutChildren<InputElementProps>;
  //   inputRightElement?: WithoutChildren<InputElementProps>;
  // }>;
  placeholder: string;
  errorMsg?: string;
  onPressEnter?: () => void;
}

const PasswordInputField = forwardRef<
  HTMLInputElement,
  PasswordInputFieldProps
>((props, _) => {
  const {
    placeholder,
    onBlur,
    errorMsg,
    onChange,
    onPressEnter,
  } = props;
  const [showPassword, setShowPassword] = React.useState(false);
  const onClickRightIcon = () => setShowPassword(prev => !prev);

  return (
    <InputField
      placeholder={placeholder}
      id="Password-input"
      type={showPassword ? 'text' : 'password'}
      errorMsg={errorMsg}
      onBlur={onBlur}
      onChange={onChange}
      onPressEnter={onPressEnter}
      rightIcon={
        <Button
          background={'none'}
          _hover={{ background: 'none' }}
          _active={{ background: 'none' }}
          aria-label={'show-hide-btn'}
          onClick={onClickRightIcon}
        >
          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
        </Button>
      }
    />
  );
});

PasswordInputField.displayName = 'PasswordInputField';

export default PasswordInputField;
