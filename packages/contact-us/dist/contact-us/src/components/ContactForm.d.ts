import { FC } from 'react';
import { ContactFormInputProps } from './validation';
export interface ContactFormProps {
    onSubmit?(values: ContactFormInputProps): void;
    url?: string;
}
declare const ContactForm: FC<ContactFormProps>;
export default ContactForm;
