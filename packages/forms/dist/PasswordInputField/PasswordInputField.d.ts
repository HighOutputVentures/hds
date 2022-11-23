import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
export interface PasswordInputFieldProps extends UseFormRegisterReturn {
    placeholder: string;
    errorMsg?: string;
    onPressEnter?: () => void;
}
declare const PasswordInputField: React.ForwardRefExoticComponent<Pick<PasswordInputFieldProps, "placeholder" | "errorMsg" | "onPressEnter" | "onChange" | "onBlur" | "name" | "min" | "max" | "maxLength" | "minLength" | "pattern" | "required" | "disabled"> & React.RefAttributes<HTMLInputElement>>;
export default PasswordInputField;
