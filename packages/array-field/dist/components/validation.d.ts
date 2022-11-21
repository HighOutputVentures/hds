import { SchemaOf, InferType } from 'yup';
export interface ArrayInputFieldProps {
    value: string;
}
export declare const ArrayFieldSchema: SchemaOf<ArrayInputFieldProps>;
export declare type ArrayFieldTypeValues = InferType<typeof ArrayFieldSchema>;
