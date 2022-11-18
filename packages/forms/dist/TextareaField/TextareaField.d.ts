import { TextareaProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FormContainerProps } from '../FormContainer/FormContainer';
export interface TextAreaFieldProps extends FormContainerProps, Omit<TextareaProps, 'onBlur' | 'id' | 'onChange' | 'size'> {
    type?: string;
    autoFocus?: boolean;
    placeholder: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    limit?: number | undefined;
    isInvalid?: boolean | undefined;
    isDisabled?: boolean;
    variant?: string;
}
declare const TextAreaField: any;
export default TextAreaField;
