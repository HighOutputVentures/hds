import { BoxProps, ButtonProps, InputProps, TextareaProps } from '@chakra-ui/react';
import { FC } from 'react';
import { InputFieldProps } from '../../components/InputField/InputField';
import { TextAreaFieldProps } from '../../components/TextareaField/TextareaField';
declare type WithoutChildren<T> = Omit<T, 'children'>;
export declare type AutoFormProps = {
    yupSchema?: any;
    onSubmitForm?(v: any): void;
    placeholders?: Array<string>;
    partProps?: {
        boxContainer: WithoutChildren<BoxProps>;
        button: WithoutChildren<ButtonProps>;
        textarea: WithoutChildren<TextareaProps>;
        input: WithoutChildren<InputProps>;
    };
};
export declare enum InputTypeEnum {
    Textarea = "textarea",
    Input = "input"
}
export interface InputTypeProps {
    key: string;
    label: string;
    placeholder: string;
    partProps?: {
        textarea: WithoutChildren<TextAreaFieldProps>;
        input: WithoutChildren<InputFieldProps>;
    };
}
declare const AutoForm: FC<AutoFormProps>;
export default AutoForm;
