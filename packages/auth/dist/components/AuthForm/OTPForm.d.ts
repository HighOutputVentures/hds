import { ReactNode } from 'react';
import { AuthenticateSchemaValues } from './validation';
export interface OTPFormProps {
    title?: ReactNode;
    subTitle?: ReactNode;
    numberOfFields?: number;
    buttonText?: string;
    otpType?: 'number' | 'alphanumeric';
    onSubmitOTPValue?(value: AuthenticateSchemaValues): void;
}
declare const OTPForm: (props: OTPFormProps) => JSX.Element;
export default OTPForm;
