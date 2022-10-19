import { ButtonProps, InputElementProps, InputGroupProps, InputProps } from '@chakra-ui/react';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
declare type WithoutChildren<T> = Omit<T, 'children'>;
export interface PasswordInputProps extends UseFormRegisterReturn {
    partProps?: Partial<{
        button: WithoutChildren<ButtonProps>;
        input: WithoutChildren<InputProps>;
        inputGroup: WithoutChildren<InputGroupProps>;
        inputLeftElement: WithoutChildren<InputElementProps>;
        inputRightElement: WithoutChildren<InputElementProps>;
    }>;
    placeholder: string;
    errorMsg?: string;
    onPressEnter?: () => void;
}
declare const PasswordInputField: React.ForwardRefExoticComponent<Pick<PasswordInputProps, "pattern" | "partProps" | "onChange" | "onBlur" | "placeholder" | "required" | "disabled" | "max" | "maxLength" | "min" | "minLength" | "name" | "errorMsg" | "onPressEnter"> & React.RefAttributes<HTMLInputElement>>;
export default PasswordInputField;
