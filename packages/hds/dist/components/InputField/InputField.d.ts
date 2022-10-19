import { CSSObject, InputElementProps, InputGroupProps, InputProps, ThemeTypings } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { FormContainerProps } from '../FormContainer/FormContainer';
declare type WithoutChildren<T> = Omit<T, 'children'>;
export interface InputFieldProps extends Omit<FormContainerProps, 'partProps'> {
    size?: ThemeTypings['sizes'];
    type?: string;
    maxLength?: number;
    autoFocus?: boolean;
    placeholder: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    autoComplete?: string;
    disabled?: boolean;
    readOnly?: boolean;
    defaultValue?: string;
    variant?: string;
    _hover?: CSSObject;
    onPressEnter?(): void;
    inputValue?: string | undefined;
    partProps?: Partial<{
        input: WithoutChildren<InputProps>;
        inputGroup: WithoutChildren<InputGroupProps>;
        inputLeftElement: WithoutChildren<InputElementProps>;
        inputRightElement: WithoutChildren<InputElementProps>;
    }>;
}
declare const InputField: React.ForwardRefExoticComponent<Pick<InputFieldProps, "children" | "partProps" | "onChange" | "onBlur" | "name" | "min" | "max" | "maxLength" | "minLength" | "pattern" | "required" | "disabled" | "id" | "label" | "labelColor" | "errorMsg" | "helperMsg" | "variant" | "size" | "colorScheme" | "orientation" | "styleConfig" | "_hover" | "autoComplete" | "autoFocus" | "placeholder" | "readOnly" | "type" | "defaultValue" | "leftIcon" | "rightIcon" | "onPressEnter" | "inputValue"> & React.RefAttributes<HTMLInputElement>>;
export default InputField;
