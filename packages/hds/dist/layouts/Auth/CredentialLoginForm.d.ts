import { BoxProps, ButtonProps, TextProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { InputFieldProps } from '../../components/InputField/InputField';
import { CredentialFormInputEmailProps, CredentialFormInputNameProps } from './validation';
declare type WithoutChildren<T> = Omit<T, 'children'>;
export declare type CredentialLoginFormDefaultProps = {
    loginTitle?: ReactNode;
    signUpTitle?: ReactNode;
    partProps?: {
        title?: WithoutChildren<TextProps>;
        button?: WithoutChildren<ButtonProps>;
        containerProps?: WithoutChildren<BoxProps>;
        input?: WithoutChildren<InputFieldProps>;
    };
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
