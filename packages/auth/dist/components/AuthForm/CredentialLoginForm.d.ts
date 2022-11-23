import { FC, ReactNode } from 'react';
import { CredentialFormInputEmailProps, CredentialFormInputNameProps } from './validation';
export declare type CredentialLoginFormDefaultProps = {
    loginTitle?: ReactNode;
    signUpTitle?: ReactNode;
};
export interface CredentialLoginFormNameProps extends CredentialLoginFormDefaultProps {
    variant?: 'name-password';
    nameLabel: string;
    onSubmit?(values: CredentialFormInputNameProps): void;
}
export interface CredentialLoginFormEmailProps extends CredentialLoginFormDefaultProps {
    variant?: 'email-password';
    nameLabel?: never;
    onSubmit?(values: CredentialFormInputEmailProps): void;
}
export declare type CredentialLoginFormProps = CredentialLoginFormNameProps | CredentialLoginFormEmailProps;
declare const CredentialLoginForm: FC<CredentialLoginFormProps>;
export default CredentialLoginForm;
