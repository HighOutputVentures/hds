import { InferType, SchemaOf } from 'yup';
export interface CredentialFormInputEmailProps {
    email: string;
    password: string;
}
export declare const withCredentialFormSchemaEmail: SchemaOf<CredentialFormInputEmailProps>;
export declare type withCredentialFormSchemaEmailValues = InferType<typeof withCredentialFormSchemaEmail>;
export interface CredentialFormInputNameProps {
    name: string;
    password: string;
}
export declare const withCredentialFormSchemaName: SchemaOf<CredentialFormInputNameProps>;
export declare type withCredentialFormSchemaNameValues = InferType<typeof withCredentialFormSchemaName>;
export declare const generateEmailOTPSchema: SchemaOf<{
    emailAddress: string;
}>;
export declare type GenerateEmailOTPSchemaValues = InferType<typeof generateEmailOTPSchema>;
export declare const authenticateSchema: SchemaOf<{
    otp: string;
}>;
export declare type AuthenticateSchemaValues = InferType<typeof authenticateSchema>;
