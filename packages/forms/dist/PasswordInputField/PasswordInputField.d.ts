import { ButtonProps, InputElementProps, InputGroupProps, InputProps } from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';
declare type WithoutChildren<T> = Omit<T, 'children'>;
export interface PasswordInputFieldProps extends UseFormRegisterReturn {
    partProps?: Partial<{
        button?: WithoutChildren<ButtonProps>;
        input?: WithoutChildren<InputProps>;
        inputGroup?: WithoutChildren<InputGroupProps>;
        inputLeftElement?: WithoutChildren<InputElementProps>;
        inputRightElement?: WithoutChildren<InputElementProps>;
    }>;
    placeholder: string;
    errorMsg?: string;
    onPressEnter?: () => void;
}
declare const PasswordInputField: any;
export default PasswordInputField;
