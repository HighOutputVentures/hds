import { FC } from 'react';
export declare type AutoFormProps = {
    yupSchema?: any;
    onSubmitForm?(v: any): void;
    placeholders?: Array<string>;
};
export declare enum InputTypeEnum {
    Textarea = "textarea",
    Input = "input"
}
export interface InputTypeProps {
    key: string;
    label: string;
    placeholder: string;
}
declare const AutoForm: FC<AutoFormProps>;
export default AutoForm;
