import { ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';
import { InputFieldProps } from '../../components/InputField/InputField';
import { TextAreaFieldProps } from '../../components/TextareaField/TextareaField';
import { ContactFormInputProps } from './validation';
declare type WithoutChildren<T> = Omit<T, 'children'>;
export interface ContactFormProps {
    onSubmit?(values: ContactFormInputProps): void;
    url?: string;
    partProps?: Partial<{
        input?: WithoutChildren<InputFieldProps>;
        textarea?: WithoutChildren<TextAreaFieldProps>;
        button?: WithoutChildren<ButtonProps>;
    }>;
}
declare const ContactForm: FC<ContactFormProps>;
export default ContactForm;
