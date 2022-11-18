import { InferType, SchemaOf } from 'yup';
export interface ContactFormInputProps {
    emailAddress: string;
    message: string;
    details: {
        name: string;
    };
}
export declare const withContactFormSchema: SchemaOf<ContactFormInputProps>;
export declare type withContactFormSchemaValues = InferType<typeof withContactFormSchema>;
