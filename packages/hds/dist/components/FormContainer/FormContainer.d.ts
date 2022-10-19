import { FormControlProps, FormErrorMessageProps, FormLabelProps, HelpTextProps, ThemingProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
declare type WithoutChildren<T> = Omit<T, 'children'>;
export interface FormContainerProps extends Partial<UseFormRegisterReturn>, ThemingProps {
    id: string;
    label?: string;
    labelColor?: string;
    errorMsg?: string;
    helperMsg?: string;
    disabled?: boolean;
    children?: ReactNode;
    partProps?: Partial<{
        formControl: WithoutChildren<FormControlProps>;
        formLabel: WithoutChildren<FormLabelProps>;
        formErrorMessage: WithoutChildren<FormErrorMessageProps>;
        formHelperText: WithoutChildren<HelpTextProps>;
    }>;
}
declare const FormContainer: FC<FormContainerProps>;
export default FormContainer;
