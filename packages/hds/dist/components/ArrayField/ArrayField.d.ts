import { ButtonProps, IconProps, InputElementProps, InputGroupProps, InputProps, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { ArrayFieldTypeValues } from './validation';
declare type WithoutChildren<T> = Omit<T, 'children'>;
export interface ArrayFieldProps {
    partProps?: {
        input?: WithoutChildren<InputProps>;
        labelProps?: WithoutChildren<TextProps>;
        inputGroup?: WithoutChildren<InputGroupProps>;
        inputLeftElement?: WithoutChildren<InputElementProps>;
        inputRightElement?: WithoutChildren<InputElementProps>;
        buttonRemoveProps?: {
            buttonProps?: WithoutChildren<ButtonProps>;
            iconProps?: WithoutChildren<IconProps>;
        };
        buttonAddProps?: {
            buttonProps?: WithoutChildren<ButtonProps>;
            iconProps?: WithoutChildren<IconProps>;
        };
    };
    buttonRemoveChildren?: ReactNode;
    buttonAddChildren?: ReactNode;
    defaultValues: {
        input: ArrayFieldTypeValues[];
    };
    onChange: (data: Record<string, any>) => void;
    onRemove: (data: Record<string, any>) => void;
    onAppend: (data: Record<string, any>) => void;
    onBlur: (data: Record<string, any>) => void;
    maxValue?: number;
    label?: string;
    placeholder?: string;
    isRequired?: boolean;
}
declare const ArrayField: (props: ArrayFieldProps) => JSX.Element;
export default ArrayField;
