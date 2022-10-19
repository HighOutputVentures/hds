import { BoxProps, ButtonProps, PinInputFieldProps as PinProps, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { AuthenticateSchemaValues } from '../../layouts/Auth/validation';
declare type WithoutChildren<T> = Omit<T, 'children'>;
export interface OTPFormProps {
    title?: ReactNode;
    subTitle?: ReactNode;
    numberOfFields?: number;
    buttonText?: string;
    otpType?: 'number' | 'alphanumeric';
    onSubmitOTPValue?(value: AuthenticateSchemaValues): void;
    partProps?: {
        title?: WithoutChildren<TextProps>;
        subTitle?: WithoutChildren<TextProps>;
        button?: WithoutChildren<ButtonProps>;
        container?: WithoutChildren<BoxProps>;
        pin?: WithoutChildren<PinProps>;
    };
}
declare const OTPForm: (props: OTPFormProps) => JSX.Element;
export default OTPForm;
