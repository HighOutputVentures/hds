import { CSSObject, InputElementProps, InputGroupProps, InputProps, ThemeTypings } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FormContainerPartProps, FormContainerProps } from '../FormContainer/FormContainer';
declare type WithoutChildren<T> = Omit<T, 'children'>;
export interface InputFieldPartProps extends FormContainerPartProps {
    input?: WithoutChildren<InputProps>;
    inputGroup?: WithoutChildren<InputGroupProps>;
    inputLeftElement?: WithoutChildren<InputElementProps>;
    inputRightElement?: WithoutChildren<InputElementProps>;
}
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
    variant?: string;
    _hover?: CSSObject;
    onPressEnter?(): void;
    inputValue?: string | undefined;
    partProps?: Partial<InputFieldPartProps>;
}
declare const InputField: any;
export default InputField;
