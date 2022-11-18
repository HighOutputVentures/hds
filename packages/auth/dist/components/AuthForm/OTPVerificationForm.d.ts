/// <reference types="react" />
import { OTPFormProps } from './OTPForm';
import { AuthenticateSchemaValues, GenerateEmailOTPSchemaValues } from './validation';
export interface OTPVerificationProps extends OTPFormProps {
    onSubmitEmailValue?(value: GenerateEmailOTPSchemaValues): void;
    onSubmitOTPValue?(value: AuthenticateSchemaValues): void;
    otpReceived: boolean;
    numberOfFields?: number;
    otpType?: 'number' | 'alphanumeric';
}
declare const OTPVerificationForm: (props: OTPVerificationProps) => JSX.Element;
export default OTPVerificationForm;
