import { InputGroupProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { FormContainerProps } from '../FormContainer/FormContainer';
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
    __testId?: string;
    variant?: string;
    onPressEnter?(): void;
    inputValue?: string | undefined;
}
declare const InputField: React.ForwardRefExoticComponent<Pick<InputFieldProps, "onChange" | "onBlur" | "name" | "min" | "max" | "maxLength" | "minLength" | "pattern" | "required" | "disabled" | "id" | "label" | "errorMsg" | "helperMsg" | "children" | "variant" | "size" | "colorScheme" | "orientation" | "styleConfig" | "defaultValue" | "placeholder" | "type" | "autoFocus" | "leftIcon" | "rightIcon" | "autoComplete" | "readOnly" | "__testId" | "onPressEnter" | "inputValue"> & React.RefAttributes<HTMLInputElement>>;
export default InputField;
